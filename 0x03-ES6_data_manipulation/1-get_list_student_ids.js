export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  // Use map function to extract the 'id' from each student object
  return students.map((student) => student.id);
}
