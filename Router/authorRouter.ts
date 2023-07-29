import express, { Router } from "express";
import {
  createAuthor,
  deleteOneAuthor,
  findAuthors,
  findOneAuthor,
  signinAuthor,
  updateOneAuthor,
} from "../Controller/authorController";
import upload from "../Config/multer"

const router = Router();

router.route("/get-authors").get(findAuthors);
router.route("/register-authors").post(upload,createAuthor);
router.route("/signin-authors").post(signinAuthor);
router.route("/:authorID/get-one-author").get(findOneAuthor);
router.route("/:authorID/update-one-author").patch(updateOneAuthor);
router.route("/:authorID/delete-one-author").delete(deleteOneAuthor);
export default router;
