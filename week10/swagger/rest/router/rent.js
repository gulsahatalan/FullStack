import express from "express";
var router = express.Router();
import * as service from "../service/rent-service.js";

router.get("/", function (req, res, next) {
  const allRentMovies = service.getAllRentMovies();
  res.status(200).send(allRentMovies);
});

router.post("/:id/rent", function (req, res, next) {
  let movieId = req.params.id;
  service.createMovieRent(movieId, req.body);
  res.status(200);
});

export default router;
