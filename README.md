# 🎓 Student Management System

## 📌 Overview
The **Student Management System** is a simple web-based application that allows users to manage students and courses. It includes functionalities such as adding students, adding courses, assigning grades and attendance, and generating student reports with GPA calculations.

## 🌟 Features
- 📚 Add courses with a unique Course ID and Course Name.
- 🧑‍🎓 Add students with a unique Student ID, Name, Email, and Type (Undergraduate/Graduate).
- ✅ Assign grades and attendance records to students for specific courses.
- 📊 Calculate GPA, with weight adjustments for graduate students.
- 📜 Generate a student report displaying student details and GPA.
- 🖼️ Option to add screenshots of code for better understanding.

## 🛠 Technologies Used
- 🌐 HTML
- 🎨 CSS
- ⚡ JavaScript

## 🚀 Installation
1. Clone the repository or download the source files.
   ```sh
   git clone https://github.com/Vedant-0102/Student-Report.git
   ```
2. Navigate to the project directory.
   ```sh
   cd student-management-system
   ```

## 📖 Usage
### ➕ Add a Course
- Enter Course ID and Course Name.
- Click "Add Course" to save it.

### 🧑‍🎓 Add a Student
- Enter Student ID, Name, Email, and Type (Undergraduate/Graduate).
- Click "Add Student" to save it.

### 📊 Assign Grades and Attendance
- Select a Student and a Course.
- Enter Grade, Total Classes Held, and Attended Classes.
- Click "Submit" to save records.

### 📜 Generate Student Report
- Click "Generate Report" to view all students with their GPA.

### 🎯 GPA Calculation
GPA is calculated as:
```math
GPA = \left( \frac{\text{total grades}}{\text{number of subjects}} \right) / 10
```
Graduate students receive a 10% weight increase.
The maximum GPA is capped at 10.0.

## 🖼️ Adding Screenshots

### Landing Page
![Landing Page](https://github.com/Vedant-0102/Student-Report/blob/main/assests/Landing.png)

### Adding Courses
![Add Courses](https://github.com/Vedant-0102/Student-Report/blob/main/assests/Courses.png)

### Adding Students
![Add Students](https://github.com/Vedant-0102/Student-Report/blob/main/assests/Student.png)

### Add Grade and Attendance
![Add Grade and Attendance](https://github.com/Vedant-0102/Student-Report/blob/main/assests/Grade_Attendance.png)

### Option to Generate Report Card
![Generate Report](https://github.com/Vedant-0102/Student-Report/blob/main/assests/Generate.png)

### Example
![Report Generated](https://github.com/Vedant-0102/Student-Report/blob/main/assests/Report_gen.png)
