import studentModel from "./models/student.model.js";
import db from "./sequelize-setup.js"

export async function getAll(){
  return await db.students.findAll(); 
}

export async function findById(pId){
  return await db.students.findByPk(pId);
}

export async function create(pStudent){
  return await db.students.create(pStudent);
}

export async function remove(pId){
  return await db.students.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedStudent){
  return await db.students.update(pUpdatedStudent, {
    where: { id: pId }
  });
}
export async function getAllStudentsByClas(){
  return await db.students.findAll({
    include: [ {
        model: student,
        include: {
            model: lecture 
        }
    } ],
    where: {
        'student.id': Sequelize.col("teacher.id")
    }
  }); 
}
