const express = require('express');
const { handleGenerateNEwShortURL, handleGetAnalytics } = require('../controllers/url')

const router = express.Router();

router.post("/", handleGenerateNEwShortURL);

router.get("/analytics/:shortId", handleGetAnalytics)

module.exports = router;