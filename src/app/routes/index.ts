import { Router } from "express";
import { UsersRoutes } from "../modules/user/user.route";
import { StudentsRoutes } from "../modules/student/student.route";


const router = Router()

const moduleRoutes = [
    {
        path: "/users",
        route: UsersRoutes
    },
    {
        path: "/students",
        route: StudentsRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;