import express from "express"
import { StudentControllers } from "./student.controller"
const router = express.Router()

//will call controller func
router.get('/', StudentControllers.getAllStudents)
router.get('/:studentId', StudentControllers.getSingleStudent)

export const StudentsRoutes = router;