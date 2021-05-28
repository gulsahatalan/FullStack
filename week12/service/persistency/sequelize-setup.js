import Sequelize from 'sequelize';
import dbConfig from "../../environment-config.json";
import lecturesModel from "./models/lectures.model.js";
import studentModel from './models/student.model.js';
import teacherModel from './models/teacher.model.js';
import enrollmentModel from './models/enrollment.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
 operatorsAliases: 0,
  // operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.lectures = lecturesModel(sequelize, Sequelize);
db.teachers = teacherModel(sequelize, Sequelize);
db.enrollment = enrollmentModel(sequelize, Sequelize);
db.students = studentModel(sequelize, Sequelize);



// // create relationship
// // teacher- lecture
//  db.teachers.hasMany(db.lectures);

// // teacher- student
db.students.belongsToMany(db.teachers,{
  through: "students_teacher",
  as: "teachers",
  foreignKey: "student_id",
})
db.teachers.belongsToMany(db.students,{
  through: "teacher_students",
  as: "students",
  foreignKey: "teacher_id",
})
// // lecture- student
db.students.belongsToMany(db.lectures,{
  through: "Students_Lecture",
  as: "lectures",
  foreignKey: "student_id",
})
db.lectures.belongsToMany(db.students,{
  through: "Lecture_Students",
  as: "Students",
  foreignKey: "lecture_id",
})
// use it to force to create the db from scratch 
//  sync({ force: true })
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});

export default db;


