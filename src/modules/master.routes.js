const router = require("express").Router();

router.use("/streetlight", require("./streetlight/streetlight.routes"));

module.exports = router;
