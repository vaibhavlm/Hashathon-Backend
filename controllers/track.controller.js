const tracks = require("../models/track.model");
const evaluator = require("../models/evaluator.model");

exports.addTrack = (req,res,next)=>{
   tracks.create(req.body).then(result=>{
       console.log(result);
       res.send("Track added successfully");
   })
}

exports.showTrack = (req,res,next)=>{
    tracks.find({},(err,track)=>{
        res.send(track);
    })
}

exports.addLead = (req,res,next)=>{
   const email = req.body.email;
   evaluator.findOne({email:email}).then(eval=>{
       tracks.findOne({track_id:req.body.track_id}).then(track=>{
           track.lead = eval;
           eval.trackAssigned = track;
           evaluator.create(eval)
           tracks.create(track).then(data=>{
               res.send(data);
           })
       })
   })
}