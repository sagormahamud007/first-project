import config from "../../config";

import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import TUser from "./user.interface";
import { UserModel } from "./user.model"
import { generateStudentId } from "./user.utilis";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
    //create a user object
    const userData: Partial<TUser> = {};

    //if password is not given, use default password
    userData.password = password || (config.default_pass as string)

    //set default role
    userData.role = "student"


    //find academic semester info
    const admissionSemeter = await AcademicSemester.findById(payload.admissionSemester)

    //setmanually generated id
    userData.id = await generateStudentId(admissionSemeter);

    //create a user
    const newUser = await UserModel.create(userData)
    //create a student
    if (Object.keys(newUser).length) {
        //set id, _id as user
        payload.id = newUser.id; //embeded id
        payload.user = newUser._id //reference _id
        const newStudent = await Student.create(payload);
        return newStudent
    }
    return newUser;
}
export const UserService = {
    createStudentIntoDB,
}