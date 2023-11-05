const controller = require("./Controller");

const express = require('express');
const router = express.Router();

router.get("/song",controller.getSong);
router.get("/detailplaylist",controller.getDetailPlaylist);
router.get("/home",controller.getHome);
router.get("/charthome",controller.getChartHome);
router.get("/top100",controller.getTop100);
router.get("/newreasechart",controller.getNewReaseChart);
router.get("/songinfo",controller.getSongInfo);
router.get("/artist",controller.getArtist);
router.get("/listartist",controller.getListArtistSong);
router.get("/lyric",controller.getLyric);
router.get("/search",controller.search);
router.get("/listmv",controller.getListMV);
router.get("/categorymv",controller.getCategoryMV);
router.get("videomv",controller.getVideoMV);

module.exports = router

