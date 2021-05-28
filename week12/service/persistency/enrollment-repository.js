import db from "./sequelize-setup.js";

export async function getAll() {
  return await db.enrollment.findAll();
}

export async function findById(pId) {
  return await db.enrollment.findByPk(pId);
}

export async function create(pEnrollment) {
  return await db.enrollment.create(pEnrollment);
}

export async function remove(pId) {
  return await db.enrollment.destroy({
    where: { id: pId },
  });
}

export async function update(pId, pUpdatedEnrollment) {
  return await db.enrollment.update(pUpdatedEnrollment, {
    where: { id: pId },
  });
}
