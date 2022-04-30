const request = require("supertest");
const {app, handler} = require("../lib/server");

describe("Server test suite", () => {
    test(" / gives welcome message", async () => {
        const response = await request(app).get("/");
        expect(response.body).toEqual("WELCOME");
        expect(response.statusCode).toBe(200);
        expect.assertions(2);
        handler();
    });
    test(" /v1/students gives list of students", async () => {
        const response = await request(app).get("/v1/students");
        expect(response.body.students[0].email).toMatch(/visualpartnership/);
        expect(response.statusCode).toBe(200);
        expect.assertions(2);
        handler();
    });
    test(" /v1/emails gives list of emails", async () => {
        const response = await request(app).get("/v1/emails");
        expect(response.body.emails[0]).toMatch(/visualpartnership/);
        expect(response.statusCode).toBe(200);
        expect.assertions(2);
        handler();
    });
});