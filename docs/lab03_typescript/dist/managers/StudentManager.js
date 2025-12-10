export class StudentManager {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
        this.saveToLocalStorage();
    }
    getAllStudents() {
        return this.students;
    }
    findStudentByID(id) {
        return this.students.find(s => s.id === id);
    }
    // ค้นหาจาก first_name หรือ last_name (ไม่สนตัวพิมพ์เล็ก-ใหญ่)
    findStudentsByName(name) {
        const keyword = name.toLowerCase();
        return this.students.filter(s => s.first_name.toLowerCase().includes(keyword) ||
            s.last_name.toLowerCase().includes(keyword));
    }
    findStudentsByMajor(major) {
        const keyword = major.toLowerCase();
        return this.students.filter(s => s.major.toLowerCase().includes(keyword));
    }
    // หาแบบตรงตัวด้วย email
    findStudentByEmail(email) {
        const target = email.toLowerCase();
        return this.students.find(s => s.email.toLowerCase() == target);
    }
    saveToLocalStorage() {
        localStorage.setItem("students", JSON.stringify(this.students));
    }
    loadFromLocalStorage() {
        const data = localStorage.getItem("students");
        if (data) {
            this.students = JSON.parse(data);
        }
    }
}
