const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({

    linker:{type: mongoose.Schema.Types.ObjectId, ref: 'linker'},
    evaluator: {type: mongoose.Schema.Types.ObjectId, ref: 'evaluator'},
    queueNumber: {type: Number},
    status: {type: Boolean},
});
module.exports = mongoose.model("tokens",tokenSchema);
