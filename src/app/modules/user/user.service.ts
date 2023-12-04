import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import TUser from "./user.interface";
import { UserModel } from "./user.model"

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    //create a user object
    const userData: Partial<TUser> = {};

    //if password is not given, use default password
    userData.password = password || (config.default_pass as string)

    //set default role
    userData.role = "student"
    //setmanually generated it
    userData.id = "20301000001";

    //create a user
    const newUser = await UserModel.create(userData)
    //create a student
    if (Object.keys(newUser).length) {
        //set id, _id as user
        studentData.id = newUser.id; //embeded id
        studentData.user = newUser._id //reference _id
        const newStudent = await Student.create(studentData);
        return newStudent
    }
    return newUser;
}
export const UserService = {
    createStudentIntoDB,
}