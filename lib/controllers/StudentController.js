const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentController {
    static getStudents() {
        const students = Reader.readJSONFile("students.json");
        return StudentService.getStudentList(students);
    }
    static getEmails() {
        const students = Reader.readJSONFile("students.json");
        return StudentService.getStudentCertifiedList(students);
    }
}

module.exports = StudentController;