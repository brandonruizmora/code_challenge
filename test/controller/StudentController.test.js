const StudentController = require("../../lib/controllers/StudentController");

describe("StudentService class unit test", () => {
    test("Regresa una lista de estudiantes", () => {
        const students = StudentController.getStudents();
        expect(students.length).toBe(51);
        expect(typeof students).toBe(typeof []);
    });
    test("Regresa una lista de emails", () => {
        const students = StudentController.getStudentEmailList();
        expect(typeof students).toBe(typeof []);
        expect(students.length).toBe(29);
        expect(students[0]).toMatch(/visualpartnership/);
    });
    test("Regresa una lista de estudiante con creditos suficientes", () => {
        const students = StudentController.getStudentCreditList();
        expect(typeof students).toBe(typeof []);
        expect(students.length).toBe(27);
        expect(students[0].credits > 500).toBeTruthy();
    });
});