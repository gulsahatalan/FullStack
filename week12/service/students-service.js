import * as studentRepository from '../service/persistency/student-repository.js'
// import config from '../environment-config.json'


export async function createStudent(pStudent){
    return await studentRepository.create(pStudent);
}

export async function deleteStudent(pId){
    return await studentRepository.remove(pId);
}

export async function getAllStudents(){
    return await studentRepository.getAll();
}
export async function getAllStudentsInClas(){
    return await studentRepository.getAllStudentsByClas();
}
export async function getStudentById(pId){
    let movie = await studentRepository.findById(pId)
    return movie;
}

export async function updateStudent(pId, pUpdateStudent){
    let student = await studentRepository.updateMovie(pId, pUpdateStudent);
    return student;
}


// setInterval(function(){
//     //populate students by using fakerjs
//     console.log('you can populate students')
// }, config.populationTimeOutInterval)

//let newMovie = JSON.parse(JSON.stringify(movie))
//Object.assign({}, movie)