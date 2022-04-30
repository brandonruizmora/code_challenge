class StudentService {
    static getStudentList(students) {
        return [...students];
    }
    static getStudentCertifiedList(students) {
        const studentsWithCertification = students.filter(student => student.haveCertification === true);
        const studentsEmailList = studentsWithCertification.map(student => student.email);
        return studentsEmailList;
    }
    static getStudentWithEnoughCreditsList(students) {
        const studentsWithEnoughCredits = students.filter(student => student.credits > 500);
        return studentsWithEnoughCredits;
    }
}

module.exports = StudentService;