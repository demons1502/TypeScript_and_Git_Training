// 1
import { readFile } from 'fs';

function promisify<T, A>(
    f: (arg: A, f: (error: unknown, result: T | null) => void) => void
): (arg: A) => Promise<T> {
    return (arg: A) =>
        new Promise<T>((resolve, reject) => {
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

let readFilePromise = promisify(readFile);
readFilePromise(__dirname + '/functions.js').then((result) =>
    console.log('done!', result.toString())
);
