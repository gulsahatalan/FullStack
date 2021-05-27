import db from "./sequelize-setup.js"

export async function getAll(){
  return await db.lecture.findAll();
}

export async function findById(pId){
  return await db.lecture.findByPk(pId);
}

export async function create(pLecture){
  return await db.lecture.create(pLecture);
}

export async function remove(pId){
  return await db.lecture.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedLecture){
  return await db.lecture.update(pUpdatedLecture, {
    where: { id: pId }
  });
}
