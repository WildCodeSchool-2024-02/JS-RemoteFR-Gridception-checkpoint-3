const express = require("express");

const router = express.Router();

const { browse, edit } = require("../../../controllers/boatActions");

const validateCoordinates = require("../../../services/tileExists");

router.get("/", browse);

router.put("/:id", validateCoordinates, edit);

module.exports = router;
