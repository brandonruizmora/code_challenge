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
});