const evaluators = require("../models/evaluator.model")

exports.addEvaluator = (req,res,next)=>{
    evaluators.create(req.body);
    res.send("evaluator added successfully");
}
