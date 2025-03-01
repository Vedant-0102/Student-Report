// Arrays to hold courses and students
let courses = [];
let students = [];

// Function to add a course
function addCourse() {
    const courseId = document.getElementById('courseId').value.trim();
    const courseName = document.getElementById('courseName').value.trim();

    if (courseId && courseName) {
        courses.push({ courseId, courseName });
        alert('Course added successfully!');
        document.getElementById('courseForm').reset();
        updateCourseOptions();
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to add a student
function addStudent() {
    const studentId = document.getElementById('studentId').value.trim();
    const studentName = document.getElementById('studentName').value.trim();
    const studentEmail = document.getElementById('studentEmail').value.trim();
    const studentType = document.getElementById('studentType').value;

    if (studentId && studentName && studentEmail && studentType) {
        students.push({ studentId, studentName, studentEmail, studentType, grades: [], attendance: [] });
        alert('Student added successfully!');
        document.getElementById('studentForm').reset();
        updateStudentOptions();
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to update course options for the grade form
function updateCourseOptions() {
    const courseSelect = document.getElementById('courseSelect');
    courseSelect.innerHTML = '<option value="">Select Course</option>';
    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.courseId;
        option.textContent = course.courseName;
        courseSelect.appendChild(option);
    });
}

// Function to update student options for the grade form
function updateStudentOptions() {
    const studentSelect = document.getElementById('studentSelect');
    studentSelect.innerHTML = '<option value="">Select Student</option>';
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.studentId;
        option.textContent = student.studentName;
        studentSelect.appendChild(option);
    });
}

// Function to add grade and attendance
function addGradeAndAttendance() {
    const studentId = document.getElementById('studentSelect').value;
    const courseId = document.getElementById('courseSelect').value;
    const gradeValue = parseFloat(document.getElementById('grade').value);
    const totalClasses = parseInt(document.getElementById('totalClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);

    if (studentId && courseId && !isNaN(gradeValue) && !isNaN(totalClasses) && !isNaN(attendedClasses)) {
        const student = students.find(s => s.studentId === studentId);
        student.grades.push({ courseId, grade: gradeValue });
        student.attendance.push({ courseId, totalClasses, attendedClasses });
        alert('Grade and attendance added successfully!');
        document.getElementById('gradeForm').reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Function to calculate GPA for a student
function calculateGPA(student) {
    const grades = student.grades.map(g => g.grade);
    if (grades.length === 0) return 0;

    const total = grades.reduce((acc, curr) => acc + curr, 0);
    const average = total / grades.length;
    let gpa = average / 10; // GPA on a 10-point scale

    if (student.studentType === 'Graduate') {
        gpa *= 1.1; 
    }

    return Math.min(gpa, 10.0); // Cap GPA at 10
}

// Function to generate the student report
function generateReport() {
    const reportSection = document.getElementById('reportSection');
    reportSection.innerHTML = ''; // Clear previous report

    if (students.length === 0) {
        reportSection.innerHTML = '<p>No students available.</p>';
        return;
    }

    students.forEach((student) => {
        const gpa = calculateGPA(student);
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student-report');
        studentDiv.innerHTML = `
            <h3>Student: ${student.studentName}</h3>
            <p>ID: ${student.studentId}</p>
            <p>Email: ${student.studentEmail}</p>
            <p>Type: ${student.studentType}</p>
            <p>GPA: ${gpa.toFixed(2)}</p>
            <hr>
        `;
        reportSection.appendChild(studentDiv);
    });
}
