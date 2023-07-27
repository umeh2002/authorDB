import mongoose, {Document} from "mongoose";

interface iAuthor {
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    avatarId?: string;
    article?: {}[];
  }
  
interface iArticle {
    title?: string;
    content?: string;
    description?: string;
    authorId?: string;
    image?: string;
    imageId?: string;
    coverImage?: string;
    coverImageId?: string;
    rating?: [];
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