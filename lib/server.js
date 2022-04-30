const express = require("express");

const StudentController = require("./controllers/StudentController");

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (_request, response) => {
    response.status(200).json("WELCOME");
});

const server = app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

const handler = () => {
    server.close();
};

module.exports = {app, handler}