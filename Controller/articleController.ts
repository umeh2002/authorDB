import express, { Request, Response, response } from "express";
import authorModel from "../Model/authorModel";
import cloudinary from "../Config/cloudinary";
import articleModel from "../Model/articleModel";
import mongoose from "mongoose";

export const createArticle = async (req: any, res: Response) => {
  try {
    const { description, content, title } = req.body;
    const { authorID } = req.params;
    const author: any = await authorModel.findById(authorID);

    const { secure_url, public_id } = await cloudinary.uploader.upload(
      req.file?.path
    );
    const article = await articleModel.create({
      description,
      content,
      title,
      authorID: author._id,
      author,
      image: secure_url,
      imageID: public_id,
    });

    author?.articles.push(new mongoose.Types.ObjectId(article._id));

    author.save();

    return response.status(201).json({
      message: "Success",
      data: article,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating article",
      data: error.message,
    });
  }
};

export const getAuthorArticle = async (req: Request, res: Response) => {
  try {
    const { authorID } = req.params;
    const author: any = await authorModel.findById(authorID).populate({
      path: "articles",
      options: {
        sort: {
          createdAt: -1,
        },
      },
    });
    return res.status(200).json({
      message: "success",
      data: author,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating article",
      data: error.message,
    });
  }
};
