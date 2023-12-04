import { NextFunction, Request, Response, } from "express";
import { StudentServices } from "./student.service";

const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentServices.getAllStudentsFormBD()
        res.status(200).json({
            success: true,
            message: "Students are retrieved successfully",
            data: result
        })

    } catch (err) {
        next(err)
    }
}

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.getSingleStudentFromBD(studentId);

        res.status(200).json({
            success: true,
            message: "Students is retrive successfully",
            data: result
        })

    } catch (err) {
        next(err)
    }
}
const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.deleteStudentFromDB(studentId)
        res.status(200).json({
            status: true,
            message: "Student is deleted successfully",
            data: result
        })
    } catch (err) {
        next(err)
    }
}

export const StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteStudent
}