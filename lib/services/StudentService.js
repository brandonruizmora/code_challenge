class StudentService {
    static getStudentList(students) {
        return [...students];
    }
    static getStudentCertifiedList(students) {
        return students.filter(student => student.haveCertification === true);
    }
}

module.exports = StudentService;