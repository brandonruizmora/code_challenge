const fs = require("fs");

class Reader {
    static readJSONFile(path) {
        const rawData = fs.readFileSync(path);
        return JSON.parse(rawData);
    }
}

module.exports = Reader;