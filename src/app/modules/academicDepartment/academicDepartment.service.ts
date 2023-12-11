import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";


const createAcademicDepartment = async (payload: TAcademicDepartment) => {
    const result = await AcademicDepartment.create(payload)
    return result
}

const getAllAcademicDepartment = async () => {
    const result = await AcademicDepartment.find();
    return result
}

const getSingleAcademicDepartment = async (id: string) => {
    const result = await AcademicDepartment.findById({ _id: id })
    return result
}
const updateAcademicDepartment = async (payload: Partial<TAcademicDepartment>, id: string) => {
    const result = await AcademicDepartment.findOneAndUpdate({ _id: id }, payload, { new: true })
    return result
}

export const AcademicDepartmentServices = {
    createAcademicDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademicDepartment
}