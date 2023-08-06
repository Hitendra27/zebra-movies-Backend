import express from "express";
import * as movieController from "../controllers/movie_controller";
import * as personController from "../controllers/person_controller";

export const router = express.Router();

router.get("/movie", movieController.getMovie);

router.get("/search", movieController.getSearch);

router.get("/genres", movieController.getGenres);

router.get("/person/:id", personController.getPersonById);
