import express from 'express';
var router = express.Router();
import * as service from '../service/teacher-service.js'

/* GET */
router.get('/', async function(req, res, next) {
  const allTeachers = await service.getAllTeachers();
  res.send(allTeachers);
});

/** Add a new teacher */
router.post('/', async function(req, res, next) {
  const newTeacher = req.body; 
  const createdTeacher = await service.createTeacher(newTeacher);
  res.status(201).send(createdTeacher);
});

/** get a teacher by id */
router.get('/:id', async function(req, res, next) {
  let pId = req.params.id;
  const teacher = await service.getTeacherById(pId)
  res.send(teacher);
});


/** delete a teacher by id */
router.delete('/:id', async function(req, res, next) {
  let pId = req.params.id;
  await service.deleteTeacher(pId);
  res.status(200).send({});
});


export default router;