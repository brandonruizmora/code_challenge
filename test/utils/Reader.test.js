const Reader = require("../../lib/utils/Reader");

describe("Reader class unit test", () => {
    test("Se esta leyendo el archivo correctamente", () => {
        const students = Reader.readJSONFile("students.json");
        expect(students).toBe(undefined);
    });
    test("Me trae 1 estudiante", () => {
        const students = Reader.readJSONFile("students.json");
        expect(students[0].email).toMatch(/visualpartnership/);
    });
});