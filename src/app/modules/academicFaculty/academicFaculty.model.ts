
import { Schema, model } from "mongoose";
import TAcademicFaculty from "./academicFaculty.interface";

const academicFacultySchema = new Schema<TAcademicFaculty>({
    name: {
        type: String,
        requird: true,
        unique: true
    },
},
    {
        timestamps: true
    });
academicFacultySchema.pre("save", async function (naxt) {
    const isDepartmentExist = await AcademicFaculty.findOne({
        name: this.name
    })
    if (isDepartmentExist) {
        throw new Error("academic is already exist")
    }
    naxt()
})


export const AcademicFaculty = model<TAcademicFaculty>('AcademicFaculty', academicFacultySchema)