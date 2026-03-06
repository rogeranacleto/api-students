import { readDb, writeDb } from "../../database/db.js";
import httpResponse from "../../utils/http-response.js";
export default async function deleteStudent(req, res){
    try {
      const { students } = await readDb();
      const { id } = req.params;
      const studentList = [...students];

      let studentIndex = studentList.findIndex((student) => `${student.id}` === id);

      if (studentIndex === -1) return httpResponse(res, 404);
      const [studentDeleted] = studentList.splice(studentIndex, 1);

      await writeDb({ students: studentList });
      return httpResponse(res, 200, studentDeleted);

    } catch (error) {
      console.error(error);
      return httpResponse(res, 500);
    }
}