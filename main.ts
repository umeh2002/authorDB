import cors from "cors";
import express, { Application, Request, Response } from "express";
import author from "./Router/authorRouter";
import article from "./Router/articleRouter";
import rating from "./Router/ratingRouter";
import friends from "./Router/friendRouter";
import request from "./Router/requestRouter";

const main = (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.get("/", (req: Request, res: Response) => {
    try {
      res.status(200).json({
        message: "welcome home",
      });
    } catch (error) {
      res.status(404).json({
        message: "error",
        data: error.message,
      });
    }
  });
  
  app.use("/api/v1/author", author);
  app.use("/api/v1/article", article);
  app.use("/api/v1/rating", rating);
  app.use("/api/v1/friends", friends);
  app.use("/api/v1/request", request);

};

export default main;
