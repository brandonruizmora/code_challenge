const StudentService = require("../../lib/services/StudentService");

describe("StudentService class unit test", () => {
    test("Regresa una lista de estudiantes", () => {
        const students = [{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
        },
        {
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": true
        }];
        const studentsList = StudentService.getStudentList(students);
        expect(studentsList.length).toBe(2);
        expect(typeof studentsList).toBe(typeof []);
    });
    test("Regresa una lista de estudiantes que tienen una certificación", () => {
        const students = [{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
        },
        {
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 677,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": false
        }];
        const studentsList = StudentService.getStudentCertifiedList(students);
        expect(studentsList.length).toBe(1);
        expect(studentsList[0]).toMatch(/visualpartnership/);
        expect(studentsList[0]).toBe(students[0].email);
    });
    test("Regresa una lista de estudiantes que tienen una certificación", () => {
        const students = [{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 500,
            "enrollments": [
                "Visual Thinking Intermedio",
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
        },
        {
            "id": "6264d5d85cf81c496446b67f",
            "name": "Lucinda",
            "email": "Sexton@visualpartnership.xyz",
            "credits": 501,
            "enrollments": [
                "Visual Thinking Avanzado"
            ],
            "previousCourses": 6,
            "haveCertification": false
        }];
        const studentsList = StudentService.getStudentWithEnoughCreditsList(students);
        expect(studentsList.length).toBe(1);
        expect(studentsList[0].credits > 500).toBe(true);
        expect(studentsList[0].credits).toBe(students[1].credits);
        expect(studentsList[0]).toEqual(students[1]);
    });
});