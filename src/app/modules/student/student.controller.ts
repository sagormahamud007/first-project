import { Request, Response, } from "express";
import { StudentServices } from "./student.service";


export const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        const result = await StudentServices.createStudentIntoDB(studentData)
        res.status(200).json({
            success: true,
            message: "Student is Created Successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

export const StudentControllers = {
    createStudent
}