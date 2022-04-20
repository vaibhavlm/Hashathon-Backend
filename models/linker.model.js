const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkerSchema = new Schema({

    name: {type: String, required: true },
    email: {type: String, required: true, unique:true },
    comment: {type: String },
    token:[{type: mongoose.Schema.Types.ObjectId, ref: 'tokens'}]
});
module.exports = mongoose.model("linker",linkerSchema);