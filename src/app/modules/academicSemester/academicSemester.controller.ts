
import sendResponse from "../../utilis/sendResponce";
import httpStatus from "http-status";
import catchAsync from "../../utilis/catchAsync";
import { AcademicSemesterService } from "./academicSemester.service";

const createAcademicSemester = catchAsync(
    async (req, res) => {
        const result = await AcademicSemesterService.createAcademicSemesterIntoDB(req.body)
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Academic semester is created successfully",
            data: result
        })
    }
)

export const AcademicSemesterControllers = {
    createAcademicSemester
}
