export default (sequelize, Sequelize) => {
  const Teacher = sequelize.define("Teacher", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
  });

  return Teacher;
};
