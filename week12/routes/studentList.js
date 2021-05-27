import express from 'express';
var router = express.Router();
import * as service from '../service/students-service.js'


router.post('/', async function(req, res, next) {
  const newStudent = req.body; 
  const createdStudent = await service.createStudent(newStudent);
  res.status(201).send(createdStudent);
});

  
router.get('/', async function(req, res, next) {
  let studentList = await service.getAllStudents();
  res.status(200).send(studentList);
});

router.get('/:id', async function(req, res, next) {
  let pId = req.params.id;
  const student = await service.getStudentById(pId)
  res.send(student);
});
router.get('/:clas', async function(req, res, next) {
  let pClas = req.params.class;
  const student = await service.getAllStudentsInClas(pClas)
  res.send(student);
});
router.delete('/:id', async function(req, res, next) {
  let pId = req.params.id;
  await service.deleteStudent(pId);
  res.status(200).send({});
});

export default router;