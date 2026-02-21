import { readDb } from '../../database/db.js';
import httpResponse from '../../utils/http-response.js';

export default async function getStudentsById(req, res) {
    try {
        const { students } = await readDb();
        const { id } = req.params;
        const studentFound = students.find((student) => student.id == id);

        if (!studentFound) return httpResponse(res, 404);

        return httpResponse(res, 200, studentFound);
    } catch (error) {
        console.error(error);
        return httpResponse(res, 500);
    }
}