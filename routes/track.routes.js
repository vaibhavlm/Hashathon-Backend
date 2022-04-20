const express = require('express');
const { addTrack, showTrack, addLead } = require('../controllers/track.controller');
const router = express.Router();

router.get("/",showTrack)
.post("/addTrack",addTrack)
.put("/addLead",addLead);

module.exports = router;