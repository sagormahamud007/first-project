import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemseter } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";


const createAcademicSemesterIntoDB = async (payload: TAcademicSemseter) => {
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid Semester code")
    }
    const result = await AcademicSemester.create(payload)
    return result
}

export const AcademicSemesterService = {
    createAcademicSemesterIntoDB
}