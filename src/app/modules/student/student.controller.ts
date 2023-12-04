import { StudentServices } from "./student.service";
import sendResponse from "../../utilis/sendResponce";
import httpStatus from "http-status";
import catchAsync from "../../utilis/catchAsync";



const getAllStudents = catchAsync(
    async (req, res) => {
        const result = await StudentServices.getAllStudentsFormBD()
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student is retrieved successfully",
            data: result
        });

    }
)
const getSingleStudent = catchAsync(
    async (req, res) => {
        const { studentId } = req.params;
        const result = await StudentServices.getSingleStudentFromBD(studentId);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student is retrieved successfully",
            data: result
        });
    }
)
const deleteStudent = catchAsync(
    async (req, res) => {
        const { studentId } = req.params;
        const result = await StudentServices.deleteStudentFromDB(studentId)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student is deleted successfully",
            data: result
        });
    }
)

export const StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteStudent
}