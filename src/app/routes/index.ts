import { Router } from "express";
import { UsersRoutes } from "../modules/user/user.route";
import { StudentsRoutes } from "../modules/student/student.route";
import { academicSemesterRoute } from "../modules/academicSemester/academicSemester.route";


const router = Router()

const moduleRoutes = [
    {
        path: "/users",
        route: UsersRoutes
    },
    {
        path: "/students",
        route: StudentsRoutes
    },
    {
        path: "/academic-semesters",
        route: academicSemesterRoute
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;