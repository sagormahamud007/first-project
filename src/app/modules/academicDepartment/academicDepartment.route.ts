import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";
import { AcademicDepartmentController } from "./academicDepartment.controller";



const router = Router()

router.post("/create-department", validateRequest(
    AcademicDepartmentValidation.createAcademicValidationSchema),
    AcademicDepartmentController.createAcademicDepartmentIntoDB
)
router.get("/:departmentId", validateRequest(
    AcademicDepartmentValidation.createAcademicValidationSchema),
    AcademicDepartmentController.getSingleAcademicDepartmentFromDB
)
router.patch("/:departmentId/academic-update", validateRequest(
    AcademicDepartmentValidation.createAcademicValidationSchema),
    AcademicDepartmentController.updatedAcademicDepartmentIntoDB
)
router.get("/", validateRequest(
    AcademicDepartmentValidation.createAcademicValidationSchema),
    AcademicDepartmentController.getAllAcademicDepartmentFromDB
)
export const AcademicDepartmentRoutes = router