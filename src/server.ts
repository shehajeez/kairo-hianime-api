import https from "https";
import { config } from "dotenv";
import { ratelimit } from "./config/ratelimit.js";
import { hianimeRouter } from "./routes/hianime.js";
import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from 'hono/cors'
import { HiAnimeError } from "aniwatch";

config();

const BASE_PATH = "/api/v2";
const PORT = Number(process.env.ANIWATCH_API_PORT) || 4000;
const ANIWATCH_API_HOSTNAME = process.env?.ANIWATCH_API_HOSTNAME;

const app = new Hono();

app.use(logger());

// fixed up cors config
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length'],
  maxAge: 600,
  credentials: true,
}))

const ISNT_PERSONAL_DEPLOYMENT = Boolean(ANIWATCH_API_HOSTNAME);
if (ISNT_PERSONAL_DEPLOYMENT) {
  app.use(ratelimit);
}

app.use("/", serveStatic({ root: "public" }));
app.get("/health", (c) => c.text("OK", { status: 200 }));

app.basePath(BASE_PATH).route("/hianime", hianimeRouter);
app
  .basePath(BASE_PATH)
  .get("/anicrush", (c) => c.text("Anicrush could be implemented in future."));

app.notFound((c) =>
  c.json({ status: 404, message: "Resource Not Found" }, 404)
);

app.onError((err, c) => {
  console.error(err);
  const res = { status: 500, message: "Internal Server Error" };

  if (err instanceof HiAnimeError) {
    res.status = err.status;
    res.message = err.message;
  }

  return c.json(res, { status: res.status });
});

if (!Boolean(process?.env?.ANIWATCH_API_VERCEL_DEPLOYMENT)) {
  serve({
    port: PORT,
    fetch: app.fetch,
  }).addListener("listening", () =>
    console.info(
      "\x1b[1;36m" + `aniwatch-api at http://localhost:${PORT}` + "\x1b[0m"
    )
  );

  if (ISNT_PERSONAL_DEPLOYMENT) {
    const interval = 9 * 60 * 1000;

    setInterval(() => {
      console.log("aniwatch-api HEALTH_CHECK at", new Date().toISOString());
      https
        .get(`https://${ANIWATCH_API_HOSTNAME}/health`)
        .on("error", (err) => {
          console.error(err.message);
        });
    }, interval);
  }
}

export default app
