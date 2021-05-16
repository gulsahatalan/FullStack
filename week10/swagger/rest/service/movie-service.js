import data from "../data/data.js";

export function createMovie(pMovie) {
  data.push(pMovie);
  return pMovie;
}

export function deleteMovie(pId) {
  data = data.filter((m) => m.id != pId);
}

export function getAllMovies() {
  return data;
}

export function getMovieById(pId) {
  let movie = data.find((m) => (m.id = pId));
  return movie;
}

export function updateMovie(pId, pUpdateMovie) {
  let movie = getMovieById(pId);
  movie.name = pUpdateMovie.name;
  movie.year = pUpdateMovie.year;
}
