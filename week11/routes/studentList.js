import express from 'express';
var router = express.Router();
import * as service from '../service/students-service.js'

router.post('/:id/student', function(req, res, next) {
    let movieId = req.params.id;
    service.createMovieRent(movieId, req.body);
    res.status(200).send({});
});
router.put('/:id', async function(req, res, next) {
    let movieId = req.params.id;
    let movieToBeUpdated = req.body;
    let updatedMovie = await service.updateMovieRent(movieId, movieToBeUpdated);
    res.status(200).send(updatedMovie);
  });
  


export default router;