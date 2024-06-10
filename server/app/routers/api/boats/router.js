const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");

// Route to get
router.get("/", browse);

// Route to edit
router.put("/:id", edit);

/* ************************************************************************* */

module.exports = router;
