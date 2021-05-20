
let studentList = [];

export default function createMovieRent(movieId, rentInfo){
    studentList.push({
        movieId: movieId,
        ...rentInfo
    })
}
export function updateMovieRent(pId, pUpdateMovieRent){
    let movieRent=  movieRepository.updateMovie(pId, pUpdateMovieRent);
    return movieRent;
}