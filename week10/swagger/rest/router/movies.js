import express from "express";
var router = express.Router();
import * as service from "../service/movie-service.js";

/* GET movies list. */

router.get("/", function (req, res, next) {
  const allMovies = service.getAllMovies();
  res.status(200).send(allMovies);
});

/** get a movie by id */

router.get("/:id", (req, res) => {
  let movieId = req.params.id;
  let movie = service.getMovieById(movieId);
  res.send(movie);
});

/** Add a new movie */

router.post("/", (req, res) => {
  let newMovie = req.body;
  service.createMovie(newMovie);
  res.status(201).send();
});

/** delete a movie by id */

router.delete("/:id", (req, res) => {
  let deletedMovieId = req.params.id;
  service.deleteMovie(deletedMovieId);
  res.status(200);
});

/** update a movie by id */

router.put("/:id", (req, res) => {
  let movieId = req.params.id;
  let updatedMovie = req.body;
  service.updateMovie(movieId, updatedMovie);
  res.status(200);
});

export default router;
