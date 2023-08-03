import mongoose, {Document} from "mongoose";

interface iAuthor {
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    avatarId?: string;
    article?: {}[];
    friends?:string[]
    request?: string[]
  }
  interface iArticle {
    rate?: number;
    title?: string;
    content?: string;
    description?: string;
    authorID?: string;
    image?: string;
    imageID?: string;
    coverImage?: string;
    coverImageID?: string;
    ratings?: [];
    likes?: [];
    author?: {};
  }
  

interface iRating {
    rate?: number;
    ratedBy?: string;
   article?: {};
  }
  
  export interface iRatingData extends iRating, mongoose.Document {}
  
  export interface iArticleData extends iArticle, mongoose.Document {}

  export interface iAuthorData extends iAuthor, mongoose.Document {}