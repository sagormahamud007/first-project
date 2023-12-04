import { Student } from "./student.model";


const getAllStudentsFormBD = async () => {
    const result = await Student.find();
    return result;
}

const getSingleStudentFromBD = async (id: string) => {
    const result = await Student.findOne({ id });
    return result;
}
const deleteStudentFromDB = async (id: string) => {
    const result = await Student.updateOne({ user: id }, { $set: { isDeleted: true } })
    return result;
}

export const StudentServices = {
    getAllStudentsFormBD,
    getSingleStudentFromBD,
    deleteStudentFromDB
}