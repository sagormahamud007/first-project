import express from "express"
import { UserControllers } from "./user.controller";
import { studentValidations } from "../student/student.validation";
import validateRequest from "../../middlewares/validateRequest";
const router = express.Router()

//will call controller func
router.post("/create-student",
    validateRequest(studentValidations.createStudentValidationSchema),
    UserControllers.createStudent)

export const UsersRoutes = router; 