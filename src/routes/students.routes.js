import { Router } from 'express';
import { listAllStudents, getStudentsById } from '../controllers/students/index.js';

const studentsRoutes = Router();

studentsRoutes.get("/students", listAllStudents);
studentsRoutes.get("/students/:id", getStudentsById);

export default studentsRoutes;



