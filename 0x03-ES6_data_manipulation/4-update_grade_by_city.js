export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const check = newGrades.findIndex((grade) => grade.studentId === student.id);
    if (check !== -1) {
      return { ...student, grade: newGrades[check].grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
