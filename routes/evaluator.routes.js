const express = require('express');
const { addEvaluator } = require('../controllers/evaluators.controller');
const router = express.Router();

router.get("/")
.post("/addEval",addEvaluator);

module.exports = router;
