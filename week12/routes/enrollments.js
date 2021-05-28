import express from "express";
var router = express.Router();
import * as service from "../service/enrollments-service.js";

/* GET */
router.get("/", async function (req, res, next) {
  const allEnrollments = await service.getAllEnrollments();
  res.send(allEnrollments);
});

/** Add a new enrollment */
router.post("/", async function (req, res, next) {
  const newEnrollment = req.body;
  const createdEnrollment = await service.createEnrollment(newEnrollment);
  res.status(201).send(createdEnrollment);
});

/** get a enrollment by id */
router.get("/:id", async function (req, res, next) {
  let pId = req.params.id;
  const enrollment = await service.getEnrollmentById(pId);
  res.send(enrollment);
});

/** delete a enrollment by id */
router.delete("/:id", async function (req, res, next) {
  let pId = req.params.id;
  await service.deleteEnrollment(pId);
  res.status(200).send({});
});

export default router;
