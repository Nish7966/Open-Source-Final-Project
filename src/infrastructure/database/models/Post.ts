import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  userId: String
}, { timestamps: true });

export const PostModel = mongoose.model("Post", postSchema);