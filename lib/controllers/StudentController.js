const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController {
    static getStudents() {
        const students = Reader.readJSONFile("students.json");
        return StudentService.getStudentList(students);
    }
    static getStudentEmailList() {
        const students = Reader.readJSONFile("students.json");
        return StudentService.getStudentCertifiedList(students);
    }
    static getStudentCreditList() {
        const students = Reader.readJSONFile("students.json");
        return StudentService.getStudentWithEnoughCreditsList(students);
    }
}

module.exports = StudentController;