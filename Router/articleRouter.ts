import express, { Router } from "express";
import {
  createArticle,
  getAuthorArticle,
} from "../Controller/articleController";
import upload from "../Config/multer";

const router = Router();

router.route("/:authorID/create-article").post(upload, createArticle);
router.route("/:authorID/get-article").get(getAuthorArticle);

export default router;
