import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;
        // const zodParsedData = UserValidation.userSchemaValidation.parse(user);
        const result = await UserService.createStudentIntoDB(password, studentData)
        res.status(200).json({
            status: true,
            message: "Student is retrieved successfully",
            data: result
        })
    } catch (err) {
        next(err)
    }
}


export const UserControllers = {
    createStudent
}