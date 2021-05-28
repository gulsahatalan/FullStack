import db from "./sequelize-setup.js"

export async function getAll(){
  return await db.lectures.findAll();
}

export async function findById(pId){
  return await db.lectures.findByPk(pId);
}

export async function create(pLecture){
  return await db.lectures.create(pLecture);
}

export async function remove(pId){
  return await db.lectures.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedLecture){
  return await db.lectures.update(pUpdatedLecture, {
    where: { id: pId }
  });
}
