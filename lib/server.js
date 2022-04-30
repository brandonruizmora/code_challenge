const express = require("express");

const StudentController = require("./controllers/StudentController");

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (_request, response) => {
    response.status(200).json("WELCOME");
});

app.get("/v1/students", (_request, response) => {
    const students =  StudentController.getStudents();
    response.status(200).json({students: students});
});

app.get("/v1/emails", (_request, response) => {
    const students =  StudentController.getStudentEmailList();
    response.status(200).json({credits: "> 500 ", emails: students});
});

const server = app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

const handler = () => {
    server.close();
};

module.exports = {app, handler}