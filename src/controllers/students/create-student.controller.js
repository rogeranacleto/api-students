import { readDb, writeDb } from "../../database/db.js"
import httpResponse from "../../utils/http-response.js";
export default async function createStudent(req, res){
    try{    
        const { students } = readDb();
        const { name, email, birthDate } = req.body;

        if (students.some((student) => student.email === email)) {
          return httpResponse(res, 409);
        }
        
        const newStudent = {
            id: new Date().getTime(),
            name: name,
            email,
            birthDate,
        };
        const studentsList = [...students, newStudent];
        await writeDb({ students: studentsList });
        return httpResponse(res, 201, newStudent);

    }catch(error){
        console.error(error);
        return httpResponse(res, 500);
    }
}