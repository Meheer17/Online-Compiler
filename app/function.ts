"use server"
import { exec } from 'child_process'; // Use exec for asynchronous execution
import fs from 'fs/promises'; // Use promises for cleaner async operations


export async function runCode(value: string) {
    return new Promise<string>((resolve, reject) => {
        fs.writeFile('codes/temp.py', value, "utf8");
        exec('python3 codes/temp.py', (error, stdout, stderr) => {
            if (error) {
                fs.writeFile('codes/output.txt', error.message, 'utf8');
                resolve(error.message);
            } else {
                fs.writeFile('codes/output.txt', stdout, 'utf8');
                resolve(stdout);
            }
        });
    });
}