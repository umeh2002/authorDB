import mongoose, { Schema } from "mongoose";
import { iArticleData } from "../Utils/interface";

const articleModel = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    imageId: {
      type: String,
    },
    coverImageId: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    authorId: {
      type: String,
    },
    rate: {
      type: Number,
    },
    like: {
      type: Array,
    },
    rating: [{
        type:mongoose.Types.ObjectId,
        ref:"ratings"
    }],
    author: {
        type:mongoose.Types.ObjectId,
        ref:"authors"
    },
  },
  { timestamps: true }
);

export default mongoose.model<iArticleData>("articles", articleModel);
