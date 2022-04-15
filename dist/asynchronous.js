"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function promisify(f) {
    return (arg) => new Promise((resolve, reject) => {
        f(arg, (error, result) => {
            if (error) {
                return reject(error);
            }
            if (result === null) {
                return reject(null);
            }
            resolve(result);
        });
    });
}
let readFilePromise = promisify(fs_1.readFile);
readFilePromise(__dirname + '/functions.js').then((result) => console.log('done!', result.toString()));
//# sourceMappingURL=asynchronous.js.map