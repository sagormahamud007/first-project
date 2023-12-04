import { NextFunction, Request, Response, } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utilis/sendResponce";
import httpStatus from "http-status";

const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentServices.getAllStudentsFormBD()
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student is retrieved successfully",
            data: result
        });

    } catch (err) {
        next(err)
    }
}

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.getSingleStudentFromBD(studentId);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student is retrieved successfully",
            data: result
        });

    } catch (err) {
        next(err)
    }
}
const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.deleteStudentFromDB(studentId)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student is deleted successfully",
            data: result
        });
    } catch (err) {
        next(err)
    }
}

export const StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteStudent
}