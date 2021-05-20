export default (sequelize, Sequelize) => {
    const Student = sequelize.define("studentBa", {
      firstName:{
        type: Sequelize.STRING,
        defaultValue: "Hi"
        
      },
      lastName: {
        type: Sequelize.STRING,
        defaultValue: "Coders"
      },
      classe: {
        type: Sequelize.STRING,
        defaultValue: "8K"
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: "12"
      }
    });
  
    return Student;
  };
