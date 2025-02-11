const http = require("http");
const fs = require("fs");

const PORT = 3000;

const getStudents = () => {
    const data = fs.readFileSync("students.json", "utf8");
    return JSON.parse(data).map(student => ({
        ...student,
        average: student.grades.reduce((a, b) => a + b, 0) / student.grades.length
    }));
};

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    const students = getStudents();

    if (req.url === "/students") {
        return res.end(JSON.stringify(students));
    }

    if (req.url === "/students/active") {
        const activeStudents = students.filter(s => s.status === "active");
        return res.end(JSON.stringify(activeStudents));
    }

    if (req.url === "/students/inactive") {
        const inactiveStudents = students.filter(s => s.status === "inactive");
        return res.end(JSON.stringify(inactiveStudents));
    }

    if (req.url === "/students/top") {
        const topStudent = students.reduce((prev, curr) => (curr.average > prev.average ? curr : prev));
        return res.end(JSON.stringify(topStudent));
    }

    if (req.url === "/students/fail") {
        const failedStudents = students.filter(s => s.average < 60);
        return res.end(JSON.stringify(failedStudents));
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Endpoint not found");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
