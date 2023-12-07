import { Schema, model } from "mongoose";
import { TAcademicSemseter } from "./academicSemester.interface";
import { AcademicSemesterCode, AcademicSemesterName, Months } from "./academicSemester.constant";

const AcademicSemseterSchema = new Schema<TAcademicSemseter>({
    name: {
        type: String,
        required: true,
        enum: AcademicSemesterName
    },
    code: {
        type: String,
        required: true,
        enum: AcademicSemesterCode
    },
    year: {
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        required: true,
        enum: Months
    },
    endMonth: {
        type: String,
        required: true,
        enum: Months
    },
},
    {
        timestamps: true,
    })

AcademicSemseterSchema.pre('save', async function (next) {
    const isSemesterExist = await AcademicSemester.findOne({
        name: this.name,
        year: this.year
    })
    if (isSemesterExist) {
        throw new Error('Semester is already exists!')
    }
    next()
})


export const AcademicSemester = model<TAcademicSemseter>("AcademicSemester", AcademicSemseterSchema)