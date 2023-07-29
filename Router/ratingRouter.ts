import express from "express";
import {
  createRating,
  rateArticle,
  readRating,
} from "../Controller/ratingController";

const router = express.Router();

router.route("/:authorID/:articleID/rate-article").post(createRating);
router.route("/:articleID/read-rate-article").get(readRating);
router.route("/:articleID/total-rate-article").patch(rateArticle);

export default router;
