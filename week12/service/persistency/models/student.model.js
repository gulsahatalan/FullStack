export default (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      defaultValue: "Hi",
    },
    lastName: {
      type: Sequelize.STRING,
      defaultValue: "Coders",
    },
    classe: {
      type: Sequelize.STRING,
      defaultValue: "8K",
    },
    age: {
      type: Sequelize.INTEGER,
      defaultValue: "12",
    },
  });

  return Student;
};
