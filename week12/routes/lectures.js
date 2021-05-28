import express from 'express';
var router = express.Router();
import * as service from '../service/lectures-service.js'

/* GET */
router.get('/', async function(req, res, next) {
  const allLectures = await service.getAllLectures();
  res.status(200).send(allLectures);
});

/** Add a new lecture */
router.post('/', async function(req, res, next) {
  const newLecture = req.body; 
  const createdLecture = await service.createLecture(newLecture);
  res.status(201).send(createdLecture);
});

/** get a lecture by id */
router.get('/:id', async function(req, res, next) {
  let pId = req.params.id;
  const lecture = await service.getLectureById(pId)
  res.send(lecture);
});


/** delete a lecture by id */
router.delete('/:id', async function(req, res, next) {
  let pId = req.params.id;
  await service.deleteLecture(pId);
  res.status(200).send({});
});


export default router;