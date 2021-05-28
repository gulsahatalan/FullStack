import * as lectureRepository from "./persistency/lecture-repository.js";

export async function createLecture(pLecture) {
  return await lectureRepository.create(pLecture);
}

export async function deleteLecture(pId) {
  return await lectureRepository.remove(pId);
}

export async function getAllLectures() {
  return await lectureRepository.getAll();
}

export async function getLectureById(pId) {
  let lecture = await lectureRepository.findById(pId);
  return lecture;
}

export async function updateLecture(pId, pUpdateTeacher) {
  let lecture = await lectureRepository.updateLecture(pId, pUpdateTeacher);
  return lecture;
}
