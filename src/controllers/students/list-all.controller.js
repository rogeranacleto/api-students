import { readDb } from '../../database/db.js';
import httpResponse from '../../utils/http-response.js';
export default async function listAllStudents(req, res) {
    try {
        const { students } = await readDb();

        let studentsFiltered = [];

        if (!req.query) {
            studentsFiltered = [...students];
        } else {
            studentsFiltered = students.filter((student) => {
                const searchResult = [];

                for (const prop in req.query) {
                    if (student[prop] && req.query[prop]) {
                        const isMatch = student[prop].includes(req.query[prop]);
                        searchResult.push(isMatch);
                    }
                }

                if (!searchResult.length) return true;
                return searchResult.every((bool) => bool)
            })
        }


        return httpResponse(res, 200, studentsFiltered);
    } catch (error) {
        console.error(error);
        return httpResponse(res, 500);
    }
}