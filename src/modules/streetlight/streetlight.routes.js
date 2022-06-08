const router = require("express").Router();

const _controller = require("./streetlight.controller");

router.get("/create-streetlight", _controller.createStreetLight);

router.get("/get-streetlight", _controller.getStreetLight);

router.get("/data", _controller.getdata);
module.exports = router;
