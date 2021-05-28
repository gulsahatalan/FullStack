export default (sequelize, Sequelize) => {
  const Lecture = sequelize.define("lectureByG", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Lecture;
};
