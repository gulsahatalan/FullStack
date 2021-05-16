import rent from "../data/rentData.js";

export default function createMovieRent(movieId, rentInfo) {
  rent.push({
    movieId: movieId,
    ...rentInfo,
  });
}

export function getAllRentMovies() {
  return rent;
}
