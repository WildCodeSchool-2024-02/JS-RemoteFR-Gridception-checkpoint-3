const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/tileActions");

router.get("/api/tiles", browse);

/* ************************************************************************* */

module.exports = router;