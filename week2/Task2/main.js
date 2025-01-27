const students = [
    { name: "Mohamed", grades: [80, 90, 100], passed: false },
    { name: "Ali", grades: [60, 70, 65], passed: false },
    { name: "Salah", grades: [85, 95, 100], passed: false },
];

/* Find Average */
function calculateAverage(grades) {
    let sum = grades.reduce((acc, curr) => acc + curr);

    return sum / grades.length
}

/* Filter students */
students.forEach(student => {
    student.passed = calculateAverage(student.grades) >= 70;
});

/* sort desc */

students.sort((a, b) => calculateAverage(b.grades) - calculateAverage(a.grades))

const FilteredStudents = []

/* print array */
students.forEach(student => {
    if(student.passed) FilteredStudents.push(student.name)
   console.log(`${student.name}: Average = ${calculateAverage(student.grades)}, Passed = ${student.passed}`)
});


console.log(FilteredStudents)

