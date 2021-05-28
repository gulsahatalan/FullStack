export default (sequelize, Sequelize) => {
    const Enrollment = sequelize.define("enrollment", {
      teacherId:{
        type: Sequelize.INTEGER,
        // primaryKey: true,
        
      },
     
      lectureId: {
        type: Sequelize.STRING,
      },
      studentId: {
        type: Sequelize.STRING,
      },
      
    });
  
    return Enrollment;
  };
