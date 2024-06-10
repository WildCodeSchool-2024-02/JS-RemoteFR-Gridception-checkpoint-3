const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const boatsRouter = require("./boats/router");
const tilesRouter = require("./tiles/router")

router.use("/boats", boatsRouter);
router.use("/tiles", tilesRouter)

const gamesRouter = require("./games/router");

router.use("/games", gamesRouter);

/* ************************************************************************* */

module.exports = router;
