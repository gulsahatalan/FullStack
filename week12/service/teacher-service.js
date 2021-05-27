import * as teacherRepository from './persistency/teacher-repository.js'

export async function createTeacher(pTeacher){
    return await teacherRepository.create(pTeacher);
}

export async function deleteTeacher(pId){
    return await teacherRepository.remove(pId);
}

export async function getAllTeachers(){
    return await teacherRepository.getAll();
}

export async function getTeacherById(pId){
    let teacher = await teacherRepository.findById(pId)
    return teacher;
}

export async function updateTeacher(pId, pUpdateTeacher){
    let teacher = await teacherRepository.updateMovie(pId, pUpdateTeacher);
    return teacher;
}

// let newMovie = JSON.parse(JSON.stringify(movie))
// Object.assign({}, movie)