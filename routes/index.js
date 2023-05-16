const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

/**
 * @route GET /
 * @description Rota inicial.
 * @access Público
 */
router.get("/", indexController.home);
router.get("/about", indexController.about);
router.get("/api/v1/", indexController.apiData);

module.exports = router;
