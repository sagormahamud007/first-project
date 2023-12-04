import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";
import sendResponse from "../../utilis/sendResponce";
import httpStatus from "http-status";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;
        // const zodParsedData = UserValidation.userSchemaValidation.parse(user);
        const result = await UserService.createStudentIntoDB(password, studentData)
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


export const UserControllers = {
    createStudent
}