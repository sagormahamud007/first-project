import { UserService } from "./user.service";
import sendResponse from "../../utilis/sendResponce";
import httpStatus from "http-status";
import catchAsync from "../../utilis/catchAsync";

const createStudent = catchAsync(
    async (req, res) => {
        const { password, student: studentData } = req.body;
        const result = await UserService.createStudentIntoDB(password, studentData)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Student is retrieved successfully",
            data: result
        })
    }
)

export const UserControllers = {
    createStudent
}