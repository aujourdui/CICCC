const mongoose = require("mongoose");
const { Schema, model, SchemaTypes } = mongoose;

const commentsSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  comments: {
    type: SchemaTypes.ObjectId,
    ref: "Blog",
    content: String,
  },
});

const Comments = model("Comments", commentsSchema);
module.exports = Comments;
