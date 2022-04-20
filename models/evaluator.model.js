const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const evaluatorSchema = new Schema({
    trackAssigned: {type: mongoose.Schema.Types.ObjectId, ref: 'track'},
    name: {type: String, required: true },
    email: {type: String, required: true, unique:true },
});
module.exports = mongoose.model("evaluators",evaluatorSchema);

