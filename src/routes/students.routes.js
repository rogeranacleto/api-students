import { Router } from 'express';
import { listAllStudents, getStudentsById, createStudent, updateStudent } from '../controllers/students/index.js';


const studentsRoutes = Router();

studentsRoutes.get("/students", listAllStudents);
studentsRoutes.get("/students/:id", getStudentsById);
studentsRoutes.post("/students", createStudent);
studentsRoutes.put("/students/:id", updateStudent);

export default studentsRoutes;