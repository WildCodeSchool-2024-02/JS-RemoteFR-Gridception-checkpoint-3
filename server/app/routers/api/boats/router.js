const express = require("express");

const router = express.Router();

const tileExists = require("../../../services/tileExists");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");

// Route to get
router.get("/", browse);

// Route to edit
router.put("/:id", tileExists, edit);

/* ************************************************************************* */

module.exports = router;
