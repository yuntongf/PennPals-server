const mongoose = require("mongoose");

const replySchema = 
  new mongoose.Schema({
    author: {
      type: String,
      default:'Anonymous',
      trim:true
    },
    content: {
      type: String
    },
    likes : {
      type: Number,
      default:0
    },
    edited : {
      type : Boolean,
      default : false
    },
    reported : {
      type : Number,
      default : 0
    }
  });

const Reply = mongoose.model('Reply', replySchema);
exports.Reply = Reply;
exports.replySchema = replySchema;

