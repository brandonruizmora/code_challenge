class StudentService {
    static getStudentList(students) {
        return [...students];
    }
    static getStudentCertifiedList(students) {
        const studentsWithCertification = students.filter(student => student.haveCertification === true);
        const studentsEmailList = studentsWithCertification.map(student => student.email);
        return studentsEmailList;
    }
}

module.exports = StudentService;