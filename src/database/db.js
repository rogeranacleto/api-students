import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const dbFilePath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'data.json');

export async function readDb() {
    const data = await fs.readFile(dbFilePath, { encoding: 'utf8' });
    return JSON.parse(data);
}

export async function writeDb(newData) {
    await fs.writeFile(dbFilePath, JSON.stringify(newData, null, 2), { encoding: 'utf8' });
}