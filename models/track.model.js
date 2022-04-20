const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    track_id : {type:String , required:true, unique:true},
    name: {type: String, required: true,},
    start:{type: Date , required: true},
    end:{type:Date, required:true},
    lead:{type: mongoose.Schema.Types.ObjectId, ref: 'evaluators'},
    helper: [{type: mongoose.Schema.Types.ObjectId, ref: 'evaluators'}],
    token:[{type: mongoose.Schema.Types.ObjectId, ref: 'tokens'}]
});
module.exports = mongoose.model("tracks",trackSchema);
