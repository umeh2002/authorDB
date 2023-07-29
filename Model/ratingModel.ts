import mongoose, { Schema } from "mongoose";
import { iRatingData } from "../Utils/interface";

const ratingModel = new mongoose.Schema(
  {
  rate: {
      type: Number,
    },
   ratedBy: {
      type: String,
    },
    article: {
        type:mongoose.Types.ObjectId,
        ref:"articles"
    },
  },
  { timestamps: true }
);

export default mongoose.model<iRatingData>("ratings", ratingModel);
