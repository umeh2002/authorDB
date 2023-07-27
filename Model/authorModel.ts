import mongoose, { Schema } from "mongoose";
import { iAuthorData } from "../Utils/interface";



const authorModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim:true,
    toLowerCase: true
  },
  password: {
    type: String,
    min: 7,
  },
  avatar: {
    type: String,
  },
  avatarId: {
    type: String,
  },
  article:[{
    type:mongoose.Types.ObjectId,
    ref:"articles"
  }]
},{timestamps:true});

export default mongoose.model<iAuthorData>("authors", authorModel)