import httpResponse from "../../utils/http-response.js";
import { readDb, writeDb } from "../../database/db.js";
export default async function updateStudent(req, res){
    try {
      const { students } = await readDb();
      const { id } = req.params;
      const { name, email, birthDate } = req.body;

      const studentList = [...students];

      const studentIndex = studentList.findIndex((student) => `${student.id}` === id); 

      if (studentIndex === -1) return httpResponse(res, 404);

      const studentUpdated = {
        ...studentList[studentIndex],
        name: name || studentList[studentIndex].name,
        email: email || studentList[studentIndex].email,
        birthDate: birthDate || studentList[studentIndex].birthDate,
      };

      studentList.splice(studentIndex, 1, studentUpdated); 

      await writeDb({students: studentList});

      return httpResponse(res, 200, studentUpdated);
    } catch (error) {
      console.error(error);
      return httpResponse(res, 500);
    }
}