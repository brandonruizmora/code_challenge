const StudentController = require("../../lib/controllers/StudentController");

describe("StudentService class unit test", () => {
    test("Regresa una lista de estudiantes", () => {
        const students = StudentController.getStudents();
        expect(students.length).toBe(51);
        expect(typeof students).toBe(typeof []);
    });
});