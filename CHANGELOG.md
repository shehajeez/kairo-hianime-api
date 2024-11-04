# 3.0.0 (2024-11-04)


### Bug Fixes

* **#4 bug:** add otherInfo episodes clarification ([4afc916](https://github.com/ghoshRitesh12/aniwatch-api/commit/4afc916f7e9c90d9a19d2e4b7891c0c5bf83df08)), closes [#4](https://github.com/ghoshRitesh12/aniwatch-api/issues/4)
* **#5:** update secret key fetch url ([5f4f7fa](https://github.com/ghoshRitesh12/aniwatch-api/commit/5f4f7faf7eb8a87d05dc852766dd65c14e7d4390)), closes [#5](https://github.com/ghoshRitesh12/aniwatch-api/issues/5)
* added `healthcheck` awake ([2b22cc6](https://github.com/ghoshRitesh12/aniwatch-api/commit/2b22cc641e30633908cddd625b0695047602e68c))
* added japanese anime names to all responses ([94664ab](https://github.com/ghoshRitesh12/aniwatch-api/commit/94664abdfdf1be8820f96afe081182f59281f4cb))
* **animeCategory:** added `animeCategory` name ([aa4c922](https://github.com/ghoshRitesh12/aniwatch-api/commit/aa4c922a33d83ba291aee761f0d6acb917981aa9))
* **animeSearch:** fixed bug where if q is null throws `BadGateway` ([fa7b6e7](https://github.com/ghoshRitesh12/aniwatch-api/commit/fa7b6e70f024375d32cb54c1319add1e91521e11))
* crash on unencrypted sources in megacloud extractor ([8ee9120](https://github.com/ghoshRitesh12/aniwatch-api/commit/8ee9120a1093e23a0c75b6b97ba83c62e1d58a85))
* **docs:** updated thanks section id ([252445f](https://github.com/ghoshRitesh12/aniwatch-api/commit/252445f2983cade55837f5736519ebb90f0c6d98))
* fixed table spacing ([0a291ad](https://github.com/ghoshRitesh12/aniwatch-api/commit/0a291ad659aa9095fa443cfd55b094b2036920da))
* fixed tests regarding episode sources ([bf2c69e](https://github.com/ghoshRitesh12/aniwatch-api/commit/bf2c69e7abf161f611d8b5c85248d63548211e79))
* fixed using specific server for episode sources ([4437ef2](https://github.com/ghoshRitesh12/aniwatch-api/commit/4437ef24cc224e784701fbed2fa26e1ce90e04a5))
* **healthcheck:** fixed `/health` route response status ([5f2759b](https://github.com/ghoshRitesh12/aniwatch-api/commit/5f2759baf6f68d8831aad126e903bf0a6b44235a))
* **otherInfoBug:** `otherInfo` wouldn't show all stats ([8f1eabe](https://github.com/ghoshRitesh12/aniwatch-api/commit/8f1eabe2d9162ade3adcd604417f4f2b8ce95265))
* regex key grabber ([33bdd5a](https://github.com/ghoshRitesh12/aniwatch-api/commit/33bdd5adcd7c43925b9a6250d958060fd89a7dd1))
* Removed unnecessary attributes from Anime interface ([4682af6](https://github.com/ghoshRitesh12/aniwatch-api/commit/4682af675db9434b389d044d29fd551822542d88))
* **totalPages:** fixed bug showing wrong `totalPages` ([96085a3](https://github.com/ghoshRitesh12/aniwatch-api/commit/96085a32b1aa8f882464da2a47218997b26b8145))
* **ts:** add strict file & type imports ([087c1ba](https://github.com/ghoshRitesh12/aniwatch-api/commit/087c1bada118abf4de00d0ba104f863c350856e5))
* **ts:** add strict file & type imports ([03b3550](https://github.com/ghoshRitesh12/aniwatch-api/commit/03b3550b49fa0e0038c7d7d8c84f1bb3acc33bb6))
* **ts:** add strict file & type imports ([5d2b272](https://github.com/ghoshRitesh12/aniwatch-api/commit/5d2b27270ccc617777cfd8966348d6b04bd253e8))
* **ts:** add strict file & type imports ([1f3b98f](https://github.com/ghoshRitesh12/aniwatch-api/commit/1f3b98f19142243f942dead64f8dad3fa87d9546))
* **ts:** add strict file & type imports ([f5510aa](https://github.com/ghoshRitesh12/aniwatch-api/commit/f5510aa6dbf421c4b190d5c3be2a8c21f072f820))
* **ts:** add strict file & type imports ([a768165](https://github.com/ghoshRitesh12/aniwatch-api/commit/a7681655aa65c1248dabb85e24ef2421ab39fd62))
* **ts:** add strict file & type imports ([3a41455](https://github.com/ghoshRitesh12/aniwatch-api/commit/3a414555f2e05c82248b70633b9377b18dbd9e61))
* **ts:** add strict file imports ([2cb44a6](https://github.com/ghoshRitesh12/aniwatch-api/commit/2cb44a6c7515d3fa4a7c753f4135b961145021d5))
* **ts:** add strict file imports ([bee4436](https://github.com/ghoshRitesh12/aniwatch-api/commit/bee44369f1cd5c0aa84c16a6320e146c171afb16))
* **ts:** add strict file imports ([9ece100](https://github.com/ghoshRitesh12/aniwatch-api/commit/9ece1000d6794f74695771d714130b3c98f7e83a))
* **ts:** add strict file imports ([cbfba10](https://github.com/ghoshRitesh12/aniwatch-api/commit/cbfba10a56b62eb80e005080578137a6563d4086))
* **ts:** add strict file imports ([f9646c2](https://github.com/ghoshRitesh12/aniwatch-api/commit/f9646c2bf8cea3c03214a7c926de776b9ab8f76d))
* **ts:** controller file imports ([784a585](https://github.com/ghoshRitesh12/aniwatch-api/commit/784a5850a6f305718c53a19ce1eb9391cf478373))
* **ts:** file import types & static folder path ([f8e27d7](https://github.com/ghoshRitesh12/aniwatch-api/commit/f8e27d77d20f6c1f727785377bec6839d943abff))
* updated controllers exports ([de09205](https://github.com/ghoshRitesh12/aniwatch-api/commit/de092054c669bb45427369ea6ea8a4d8a97b1511))
* updated docker build workflow ([ddd77f4](https://github.com/ghoshRitesh12/aniwatch-api/commit/ddd77f42aeae90133caa585051c398bf5b9fb1b0))
* updated parser exports ([a42163e](https://github.com/ghoshRitesh12/aniwatch-api/commit/a42163e884417cfcbec25c7018cf2b75ff637402))


* Aniwatch API Version 2 (#66) ([46f688a](https://github.com/ghoshRitesh12/aniwatch-api/commit/46f688ac12a99b8fb145b0745dd4cc6babff1e1e)), closes [#66](https://github.com/ghoshRitesh12/aniwatch-api/issues/66)


### Features

* add `.editorconfig` ([90c0e86](https://github.com/ghoshRitesh12/aniwatch-api/commit/90c0e869abaae168bc07fe93782b65651f45dfc8))
* add `airingTimestamp` and `secondsUntilAiring` to `/anime/schedule` endpoint ([041c0b7](https://github.com/ghoshRitesh12/aniwatch-api/commit/041c0b7098ffb3d87a729d7dbfc774a96761d3c3))
* add `airingTimestamp` and `secondsUntilAiring` to `/anime/schedule` endpoint ([3f0b367](https://github.com/ghoshRitesh12/aniwatch-api/commit/3f0b367ae027370a81df716eb75c05703a1af905))
* add `anilistID` in response ([4cf7e46](https://github.com/ghoshRitesh12/aniwatch-api/commit/4cf7e460cfc5449fdeea29634fa24c4709473178))
* add `jname` field to Anime interface ([c65d786](https://github.com/ghoshRitesh12/aniwatch-api/commit/c65d786673c4369b8d617a6972d01b7ad3a51954))
* add `malID` to episode srcs ([746e645](https://github.com/ghoshRitesh12/aniwatch-api/commit/746e645c2feb1ee7b7464f36d59522b1a2fe42bb))
* add `robots.txt` ([de34e7a](https://github.com/ghoshRitesh12/aniwatch-api/commit/de34e7ae57e0454592be7cce15e49327a9183f00))
* add axios config for future code reusability ([4782a8d](https://github.com/ghoshRitesh12/aniwatch-api/commit/4782a8dd708ec1f68bf469907024c082d606dc79))
* add check for vercel deployment ([c079bf8](https://github.com/ghoshRitesh12/aniwatch-api/commit/c079bf808ab2e6ec7fa58832f842b05e6212111a))
* add explicit interval time for convenience ([a4b08c4](https://github.com/ghoshRitesh12/aniwatch-api/commit/a4b08c435c0ed62c57a1a6a985e3eed25bb82c92))
* add json rate limit response; replace `max` with `limit` ([870fae7](https://github.com/ghoshRitesh12/aniwatch-api/commit/870fae700b56cc20010296387e3d9cda8330560c))
* add MegaCloud extractor ([c634f6e](https://github.com/ghoshRitesh12/aniwatch-api/commit/c634f6e560bdb3b8dec2333439a3e285813e6532))
* add render deployment config file ([a0cdb59](https://github.com/ghoshRitesh12/aniwatch-api/commit/a0cdb59f74d6f1994ba84faa6430933edb505182))
* add vercel api entry point file ([5da81f1](https://github.com/ghoshRitesh12/aniwatch-api/commit/5da81f18ce271df71a80d63a19d2f6ce7da6d072))
* added `animeEpisodes` & `animeEpisodeSrcs` routes ([277902a](https://github.com/ghoshRitesh12/aniwatch-api/commit/277902a835a83847e252d57bef87cba32d63b90a))
* added `animeSearch` controller ([39e80ff](https://github.com/ghoshRitesh12/aniwatch-api/commit/39e80ff7edc3b87ee85c29b0d85de375586b0287))
* added `CryptoJS` pkg ([5d1bf2f](https://github.com/ghoshRitesh12/aniwatch-api/commit/5d1bf2fcc91cad695a054bf838eff668a316a7b4))
* added `healthcheck` awake ([25115e2](https://github.com/ghoshRitesh12/aniwatch-api/commit/25115e22892d20afa33bf28da347f895a95dd65e))
* added `healthcheck` script ([0791724](https://github.com/ghoshRitesh12/aniwatch-api/commit/0791724a9fa4e73d28867acaafe59d466be1fa4a))
* added `mostPopular`, `mostFavorite` and `latestCompleted` to the home route response ([5d92946](https://github.com/ghoshRitesh12/aniwatch-api/commit/5d929461ce918006b9c3977e5af5f76799e820b3))
* added all controllers export ([92dfaad](https://github.com/ghoshRitesh12/aniwatch-api/commit/92dfaad3c624da881800832b5ad3b95ce801bd0a))
* added all parsers export ([b1357de](https://github.com/ghoshRitesh12/aniwatch-api/commit/b1357dea6eb1d1f845ec793d3954281e622da734))
* added all types export ([6004273](https://github.com/ghoshRitesh12/aniwatch-api/commit/60042738d67645d0d5a5d7ccf67488ee4c5c135a))
* added anime category controller ([59c7c23](https://github.com/ghoshRitesh12/aniwatch-api/commit/59c7c23f09ea3303999385f95f2bd488bfb07ca8))
* added anime category parser ([a3a7414](https://github.com/ghoshRitesh12/aniwatch-api/commit/a3a74145c4ac949646d3dd8ce4248aaa10ffb257))
* added anime extraction util methods ([1c74ecf](https://github.com/ghoshRitesh12/aniwatch-api/commit/1c74ecf27ee1144e7bbd441e3eee542074b5b409))
* added anime route ([bad7933](https://github.com/ghoshRitesh12/aniwatch-api/commit/bad7933de7f61ea7ed62495c3b26e7b007bd133f))
* added anime router ([e758c74](https://github.com/ghoshRitesh12/aniwatch-api/commit/e758c74d15a5158003b8fb6d3729c2224503fe68))
* added anime search parser ([a47790a](https://github.com/ghoshRitesh12/aniwatch-api/commit/a47790a773b9584de5c38dcd1188a94f7aa15572))
* added anime types ([d4e3012](https://github.com/ghoshRitesh12/aniwatch-api/commit/d4e3012320367f4c8c1bc15f955da07c4d7e2989))
* added build dir ([e05b90c](https://github.com/ghoshRitesh12/aniwatch-api/commit/e05b90c7a37cdcff35452ce246ca2d94600ee11e))
* added characters and voice actors to `/info` endpoint response ([f626119](https://github.com/ghoshRitesh12/aniwatch-api/commit/f6261199f8e83fd52714055023d033afbc09e53f))
* added controller request handler types ([10e46b1](https://github.com/ghoshRitesh12/aniwatch-api/commit/10e46b1002dcbbed5202936f1028fae550d9f765))
* added episode count to top airing anime ([62fa83a](https://github.com/ghoshRitesh12/aniwatch-api/commit/62fa83a56d5e5ea4cc5e7b38b478208b0c5e6a72))
* added episode number to estimated anime schedule ([bdfebb5](https://github.com/ghoshRitesh12/aniwatch-api/commit/bdfebb5e320c15ae9de1a57a66b6a4602bcebf4d))
* added home page controller ([3d81a6c](https://github.com/ghoshRitesh12/aniwatch-api/commit/3d81a6c422ac4efd957961d190d7638ab0695062))
* added index page ([e1b37a5](https://github.com/ghoshRitesh12/aniwatch-api/commit/e1b37a5b5ee16632e6b32e72e65f6420492e27bc))
* added mal and anilist id to anime info endpoint ([55eaf06](https://github.com/ghoshRitesh12/aniwatch-api/commit/55eaf060816f7ba05c12b1d1dcfa5404f0abde20))
* added new error message ([44d6ff5](https://github.com/ghoshRitesh12/aniwatch-api/commit/44d6ff5a11f41db7776910a4e8fd635352913b06))
* added parser types ([4efe9c9](https://github.com/ghoshRitesh12/aniwatch-api/commit/4efe9c9b094d59809b91244f70b052d30a21db40))
* added promotional videos to `/info` endpoint response ([8abde11](https://github.com/ghoshRitesh12/aniwatch-api/commit/8abde11e7b09652447938afda936b0fa2bca7c76))
* added rate limit config ([3014ab8](https://github.com/ghoshRitesh12/aniwatch-api/commit/3014ab8ce41d0b11b56ab7c6c32bd0f5c75fee3c))
* added raw servers to `/servers` endpoint response ([ffebb03](https://github.com/ghoshRitesh12/aniwatch-api/commit/ffebb03bc9a0f362e44603c6f71a276567d08c30))
* added render deploy step ([f34f915](https://github.com/ghoshRitesh12/aniwatch-api/commit/f34f91561b692a383dd8145f231f8c6bab91013f))
* added the ability to grab episode sources from raw servers in endpoint `/episode-srcs` ([a0d039e](https://github.com/ghoshRitesh12/aniwatch-api/commit/a0d039ecc120cfeb8352c6b525ee1e766555f9ec))
* added utility props & methods ([38ae13d](https://github.com/ghoshRitesh12/aniwatch-api/commit/38ae13dcdce8b49970d8f51d314856767be40ab1))
* **advancedSearch:** add advanced related constants ([68e4c70](https://github.com/ghoshRitesh12/aniwatch-api/commit/68e4c70dd887805bc2784bcbfabf5328a1ad752a))
* **advancedSearch:** add advanced search feature ([1c02c9c](https://github.com/ghoshRitesh12/aniwatch-api/commit/1c02c9cf4f9c364c57a2f30471e676b5a5e5b5ca))
* **advancedSearch:** add helper types ([71f0905](https://github.com/ghoshRitesh12/aniwatch-api/commit/71f0905115e88a96f59aa4a52d1ce69a793ebe0c))
* **advancedSearch:** add utility methods related to advanced search ([79d0bdf](https://github.com/ghoshRitesh12/aniwatch-api/commit/79d0bdf05f86c5d5411f9473889442000786322f))
* **advancedSearch:** add utility props to search response ([d6f9f0f](https://github.com/ghoshRitesh12/aniwatch-api/commit/d6f9f0f665c9d03b38b88baa8156892b9a32b0af))
* **advancedSearch:** feat: add search filter parsing ([fef106d](https://github.com/ghoshRitesh12/aniwatch-api/commit/fef106da27270dcb86031e511a3cc428e40f41ff))
* **anime:** added `AnimeEpisode` & `AnimeServers` type ([098b09d](https://github.com/ghoshRitesh12/aniwatch-api/commit/098b09d43666293f103f75d5e336ef5c014e6a5b))
* **anime:** added anime search result & most popular anime types ([f949c1c](https://github.com/ghoshRitesh12/aniwatch-api/commit/f949c1c36ba323e2a05526bc4cf29400a2c9641c))
* **animeEpisodes:** added `animeEpisodes` controller path params type ([6d9d859](https://github.com/ghoshRitesh12/aniwatch-api/commit/6d9d859e532f520ba2a330625dd1fd380f4f0e46))
* **animeEpisodes:** added `animeEpisodes` parser ([6e8d849](https://github.com/ghoshRitesh12/aniwatch-api/commit/6e8d84970e19ac43186fa3837dff0e18b168e213))
* **animeEpisodes:** added `animeEpisodes` parser controller ([a67070e](https://github.com/ghoshRitesh12/aniwatch-api/commit/a67070ec5f4c2e295f286fcf53e1bd1672664d84))
* **animeEpisodes:** added `animeEpisodes` parser return type ([bd113f8](https://github.com/ghoshRitesh12/aniwatch-api/commit/bd113f84e5dc73b49a443b51254639ea8fa216ed))
* **animeEpisodeSrcs:** added `animeEpisodeSrcs` parser ([e152221](https://github.com/ghoshRitesh12/aniwatch-api/commit/e152221f8fa85550b8a834bf86a743661e542d07))
* **animeEpisodeSrcs:** added `animeEpisodeSrcs` parser controller ([a8e4351](https://github.com/ghoshRitesh12/aniwatch-api/commit/a8e4351d12568066f758d725cd42e1267f2bfe52))
* **animeEpisodeSrcs:** added `animeEpisodeSrcs` parser controller query params ([3715fdd](https://github.com/ghoshRitesh12/aniwatch-api/commit/3715fdd81a5e8041e472b1e584136d8369d1d86d))
* **animeEpisodeSrcs:** added `animeEpisodeSrcs` parser return type ([c0ce89a](https://github.com/ghoshRitesh12/aniwatch-api/commit/c0ce89a828e838a32769efeac78eebe3207d2027))
* **animeProducer:** added `animeProducer` controller ([953c99a](https://github.com/ghoshRitesh12/aniwatch-api/commit/953c99a9f3b3a8fa24a99f4e907b38ca465e4949))
* **animeProducer:** added `AnimeProducer` controller path & query params type ([50b66ba](https://github.com/ghoshRitesh12/aniwatch-api/commit/50b66ba08d80b6dd10445d27da7f7fb0dd3fc91a))
* **animeProducer:** added `animeProducer` parser ([74a6b96](https://github.com/ghoshRitesh12/aniwatch-api/commit/74a6b96dbf86320a6a94af9169ebc12da39af735))
* **animeProducer:** added `ScrapedProducerAnime` parser type ([c3a77e0](https://github.com/ghoshRitesh12/aniwatch-api/commit/c3a77e0aded343ab0e2e15ab974841d87da06337))
* **animeSearchSuggestion:** added `animeSearchSuggestion` controller ([c9325f4](https://github.com/ghoshRitesh12/aniwatch-api/commit/c9325f4b66f02d4c238604e0b37cb1618ae1f83e))
* **animeSearchSuggestion:** added `animeSearchSuggestion` parser ([e4ffe2a](https://github.com/ghoshRitesh12/aniwatch-api/commit/e4ffe2aba70fd73fa5e75daf3900e92b5881e1c4))
* **animeSearchSuggestion:** added `animeSearchSuggestion` query param type ([1c7799e](https://github.com/ghoshRitesh12/aniwatch-api/commit/1c7799eeaac4af40467b6d3a53d9c5f0af77bb64))
* **animeSearchSuggestion:** added `AnimeSearchSuggestion` type ([39f496a](https://github.com/ghoshRitesh12/aniwatch-api/commit/39f496aa1851b58bba4c9256015c218ded3d823f))
* **animeSearchSuggestion:** added `ScrapedAnimeSearchSuggestion` type ([bec33e6](https://github.com/ghoshRitesh12/aniwatch-api/commit/bec33e60f71bd819c668e79825069678be4921aa))
* **cd:** decoupled triggering deploy job ([cb1bed4](https://github.com/ghoshRitesh12/aniwatch-api/commit/cb1bed43cef491cd9bd245be8c7abf901d218817))
* **controllerTypes:** added request handler types ([84a7981](https://github.com/ghoshRitesh12/aniwatch-api/commit/84a79810c358dece1b3bd2b013a2d788ec100f44))
* **cors:** added cors config ([eff3f34](https://github.com/ghoshRitesh12/aniwatch-api/commit/eff3f3408bb8c20a66a3e8b47561f6fd8260a17d))
* **cors:** added cors pkg ([9470655](https://github.com/ghoshRitesh12/aniwatch-api/commit/9470655d4b67fcd6f21d31c57575c0681760a724))
* **cors:** using cors config ([ca60147](https://github.com/ghoshRitesh12/aniwatch-api/commit/ca60147a88f7f616e5371190259ffc9296c52ac2))
* disabled `ratelimit` & `dont_sleep` for personal deployments ([8565619](https://github.com/ghoshRitesh12/aniwatch-api/commit/8565619f3ab2616b7fbeca7681f063730693a82e))
* **docker:** added `.dockerignore` file ([ace29d6](https://github.com/ghoshRitesh12/aniwatch-api/commit/ace29d6c2bdbdb756ae2ed674e0e817f0aa0be5e))
* **docker:** added `Dockerfile` file ([a8da974](https://github.com/ghoshRitesh12/aniwatch-api/commit/a8da9745229c40fb7ca77a719f9da9809228bedf))
* **docker:** added docker multi stage build ([704c8a3](https://github.com/ghoshRitesh12/aniwatch-api/commit/704c8a3e518f8251f4c343fe6079d57b982c2c8b))
* **dockerfile:** updated `Dockerfile` labels ([bc5364f](https://github.com/ghoshRitesh12/aniwatch-api/commit/bc5364fbf1c6f04f1ab214b9ad35ba04dbbc7602))
* **episodeServers:** added `EpisodeServersQueryParams` query param type ([df0f689](https://github.com/ghoshRitesh12/aniwatch-api/commit/df0f689ff360fc8a80ae313ba9d9d03350e82518))
* **episodeServers:** added `getEpisodeServers` controller ([dfe284a](https://github.com/ghoshRitesh12/aniwatch-api/commit/dfe284a9a7bbef76b59a88c3f75d294663b6001d))
* **episodeServers:** added `getEpisodeServers` route endpoint ([00ee4bc](https://github.com/ghoshRitesh12/aniwatch-api/commit/00ee4bcbab4059888b7385a3d93446bd12662bdf))
* **episodeServers:** added `ScrapedEpisodeServers` parser type ([deaac54](https://github.com/ghoshRitesh12/aniwatch-api/commit/deaac5475ea5ee193bf5e515ddd95259cc36cbdb))
* **episodeServers:** added `scrapeEpisodeServers` parser ([64ede20](https://github.com/ghoshRitesh12/aniwatch-api/commit/64ede2033cf9b433503fa9d08c3debce1eecc179))
* **episodeServers:** added `SubEpisode` & `DubEpisode` types ([921e2bd](https://github.com/ghoshRitesh12/aniwatch-api/commit/921e2bdf3e790b731b17fce991b94ec772b7ffdf))
* **estimatedSchedule:** add `/schedule` endpoint controller ([caec8b6](https://github.com/ghoshRitesh12/aniwatch-api/commit/caec8b684d0afb5fb97ea6fd5a03e8001e2db648))
* **estimatedSchedule:** add `/schedule` endpoint controller query params type ([0685c20](https://github.com/ghoshRitesh12/aniwatch-api/commit/0685c200dd0ccd3de9ed88996b1e55f0e7ce4bf7))
* **estimatedSchedule:** add `/schedule` route ([a19d705](https://github.com/ghoshRitesh12/aniwatch-api/commit/a19d705c909827566d91841360aa472bdfbf6e82))
* **estimatedSchedule:** add `estimatedSchedule` parser ([8826dd2](https://github.com/ghoshRitesh12/aniwatch-api/commit/8826dd276fe4a5ccab2b074d77191b81b265e528))
* **estimatedSchedule:** add `EstimatedSchedule` types ([0ca9a82](https://github.com/ghoshRitesh12/aniwatch-api/commit/0ca9a82a2bd5b769e252424a78a08a17a62e9854))
* **extractor:** added types related to anime extractors ([34efd85](https://github.com/ghoshRitesh12/aniwatch-api/commit/34efd85bc74a2be845d11afa26f4e5c13e293ab7))
* **extractors:** added anime extractors ([e335910](https://github.com/ghoshRitesh12/aniwatch-api/commit/e335910e7a06bb48eaab2817e22d528c353242a9))
* **future:** add hianime_v2 image ([1bba988](https://github.com/ghoshRitesh12/aniwatch-api/commit/1bba988e0d241121b51f9d9a9822da1237bd8aa8))
* **future:** add hianime_v2 social img ([332feca](https://github.com/ghoshRitesh12/aniwatch-api/commit/332feca25f9f287d5cdf82a5bb8cf8ebe2210d67))
* **healthcheck:** added `/health` route ([3aff3e4](https://github.com/ghoshRitesh12/aniwatch-api/commit/3aff3e4a7d8efdc55fcbcb89d29f45ce48fd2e0d))
* **homeController:** added home route controller ([efdf837](https://github.com/ghoshRitesh12/aniwatch-api/commit/efdf83716301ccb8896c59aff98ff97de2d15545))
* **homeRoute:** added home route ([02ece02](https://github.com/ghoshRitesh12/aniwatch-api/commit/02ece0298402a84b3b97f1320ad5d1a0afb67bba))
* **husky:** added husky commit-msg check ([62efb7b](https://github.com/ghoshRitesh12/aniwatch-api/commit/62efb7b8666d27476a816416f127db7b2162b073))
* **legacyHeaders:** update `ratelimit` config ([f8f2883](https://github.com/ghoshRitesh12/aniwatch-api/commit/f8f2883f72136ebcb95d84f9c182bd03a7ad80fe))
* **new types:** added several new types & made types D.R.Y ([bbea6fb](https://github.com/ghoshRitesh12/aniwatch-api/commit/bbea6fb626a0c04ee5d53064f50c5007b5cb898c))
* **newAnimeTypes:** added several types related to `ScrapedAnimeAboutInfo` parser type ([af70a9d](https://github.com/ghoshRitesh12/aniwatch-api/commit/af70a9de1146b2c3bfdacd51f790f34f35b49877))
* **newController:** added `animeAboutInfo` controller ([d503bb6](https://github.com/ghoshRitesh12/aniwatch-api/commit/d503bb6c5c6c412deac29f55a0c734c68df29842))
* **newController:** added `animeGenre` controller ([b86a370](https://github.com/ghoshRitesh12/aniwatch-api/commit/b86a3703818f495c03bd714504c1056456c1e405))
* **newParser:** added  `ScrapedGenreAnime` parser type ([914382e](https://github.com/ghoshRitesh12/aniwatch-api/commit/914382ee516dc9c0d611b0dd280963229779df2c))
* **newParser:** added `animeAboutInfo` parser ([c2c01f8](https://github.com/ghoshRitesh12/aniwatch-api/commit/c2c01f88afa51e30bad465854bf773e7f98924cd))
* **newParser:** added `animeGenre` parser ([65f863b](https://github.com/ghoshRitesh12/aniwatch-api/commit/65f863b3c11c98b9f34bfdc57ba8e896110dcf22))
* **newParserType:** added `ScrapedAnimeAboutInfo` parser type ([904f87a](https://github.com/ghoshRitesh12/aniwatch-api/commit/904f87aa0fd81d18cb5835b1c0e2cea8ada2b19e))
* **newRoute:** added  `/genre/:name` route ([e849c87](https://github.com/ghoshRitesh12/aniwatch-api/commit/e849c870a0ad018f7fd10ba9835c0d98d7546fd2))
* **newRoutes:** added `/` & `/home` routes ([4a1a924](https://github.com/ghoshRitesh12/aniwatch-api/commit/4a1a9249b9aee0cc3446c9a1532eb74786220115))
* **parser types:** added `homePage` & `searchResult` types ([43ca79d](https://github.com/ghoshRitesh12/aniwatch-api/commit/43ca79d812a4a9fc6de28dc1cac4063eae36942e))
* **parser:** added home page parser ([55d024f](https://github.com/ghoshRitesh12/aniwatch-api/commit/55d024ff2d43c17942b47c0e86f215747fbdeebf))
* **prettier:** add `.prettierignore` ([23fcd4a](https://github.com/ghoshRitesh12/aniwatch-api/commit/23fcd4a19f7da2817782d557b6d5e6f664b3b584))
* **prettier:** add `prettier.config.mjs` ([9ae824b](https://github.com/ghoshRitesh12/aniwatch-api/commit/9ae824b42c2665869e0a7bc964339ee6cc414d1a))
* rate limited endpoints ([5a82179](https://github.com/ghoshRitesh12/aniwatch-api/commit/5a82179174c63c67ce8371aa9628529dafd115b6))
* replace RapidCloud extractor for MegaCloud ([74e9455](https://github.com/ghoshRitesh12/aniwatch-api/commit/74e9455890c176e51f89e59a9bc909cd959dc09f))
* **routes:** added  route ([dd3df97](https://github.com/ghoshRitesh12/aniwatch-api/commit/dd3df97493e4a530e065819bf3f998faad6fb5ee))
* **routes:** added `search/suggest` & `/producer` routes ([9714f7f](https://github.com/ghoshRitesh12/aniwatch-api/commit/9714f7f59b15621f0a36aef16e481ee155e9e4c1))
* update allowed origins to include wildcard if env not present ([21a8718](https://github.com/ghoshRitesh12/aniwatch-api/commit/21a8718f87d7409d61970139e39c2bb0c6cfe91c))
* update aniwatch domain name ([699b630](https://github.com/ghoshRitesh12/aniwatch-api/commit/699b630c4b66415222b0bb76e570ccfbedba0c75))
* update api home page ([112e532](https://github.com/ghoshRitesh12/aniwatch-api/commit/112e532331fa3001d263457bff001c201b89d136))
* update decrypt key src ([3617c50](https://github.com/ghoshRitesh12/aniwatch-api/commit/3617c500d6780353b660e4e50040c9c80c9dbc45))
* update rate limit to 6 reqs every 30 mins ([8d82f44](https://github.com/ghoshRitesh12/aniwatch-api/commit/8d82f448963dcf54c75dc93ea572f104dffcc9fb))
* update rebranded domain name ([a6f99bf](https://github.com/ghoshRitesh12/aniwatch-api/commit/a6f99bf681d27483d6f214c48673b875d3cbf6ab))
* update rebranded domain name ([5562885](https://github.com/ghoshRitesh12/aniwatch-api/commit/5562885184e892743f14df199a21d9521deeb989))
* updated `extractAnimes` & added `extractMostPopularAnimes` ([22ef7a5](https://github.com/ghoshRitesh12/aniwatch-api/commit/22ef7a54f6b3b01366cbad15ab2ca62574d30ecb))
* updated `ratelimit` config ([6ebee63](https://github.com/ghoshRitesh12/aniwatch-api/commit/6ebee632d7e894b31f7e1fc8aece4b9e8456542a))
* updated home page view ([ed64499](https://github.com/ghoshRitesh12/aniwatch-api/commit/ed6449909433e0a7489a653688eaf8558f7f0962))
* updated rapidcloud ajax url ([326e13a](https://github.com/ghoshRitesh12/aniwatch-api/commit/326e13ad20f60f478c2e4c98bd30653ca9cad460))
* updated types export ([45f510f](https://github.com/ghoshRitesh12/aniwatch-api/commit/45f510f9c042dc8bd9950d277cf8d5d5fbdf0b3c))


### Performance Improvements

* **rateLimit:** increased `windowMs` time ([6e11137](https://github.com/ghoshRitesh12/aniwatch-api/commit/6e11137ce2d5bd3b35beb7b56904abc82b2f6f18))


### Reverts

* **parserTypes:** refactored parser types ([8a5884b](https://github.com/ghoshRitesh12/aniwatch-api/commit/8a5884b75288ca6fa5870bc026b23d23e1625ebe))


### BREAKING CHANGES

* * chore: remove files that are not necessary for api v2

* test: update existing tests to use  pkg

* feat: organized aniwatch api envs and add more info about them

* feat: update tsconfig to include strict noUnsed params

* feat(api homepage): revamp api home page

* feat: update wani kuni image

* feat: add dot img

* feat: use hono cors

* feat: use hono rate limiter

* build: remove unnecessary deps, add ones needed and update description

* feat: add hianime routes and their handlers

* feat: update vercel deployment file

* docs: update logo and scraper docs, add envs section

* feat: update main server file

* feat: update peronal deployments caution section



