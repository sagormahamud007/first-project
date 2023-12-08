import { TAcademicSemseter } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./user.model";


const findLastStudentId = async () => {
    const lastStudent = await UserModel.findOne(
        {
            role: "student",
        },
        {
            id: 1,
            _id: 0
        }
    )
        .sort({ createdAt: -1 })
        .lean()
    return lastStudent?.id ? lastStudent.id : undefined
}

//generateStudentID 4 digit number
export const generateStudentId = async (payload: TAcademicSemseter) => {
    //first time 0000
    let currentId = (0).toString();

    const lastStudentId = await findLastStudentId()
    const lastStudentSemesterCode = lastStudentId?.substring(4, 6)
    const lastStudentYear = lastStudentId?.substring(0, 4)
    const currentSemesterCode = payload.code;
    const currentYear = payload.year;
    if (lastStudentId && lastStudentSemesterCode === currentSemesterCode &&
        lastStudentYear === currentYear) {
        currentId = lastStudentId.substring(6)
    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
    incrementId = `${payload.year} ${payload.code} ${incrementId}`
    return incrementId;
}