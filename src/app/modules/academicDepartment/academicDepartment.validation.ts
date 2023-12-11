import { z } from "zod";

const createAcademicValidationSchema = z.object({
    body: z.object(
        {
            name: z.string({
                invalid_type_error: "Academic department must be string"
            }).optional(),
            academicDepartment: z.string({
                invalid_type_error: "Academic department must be string",
                required_error: "Academic faculty is required"
            }).optional()
        }
    )
})

export const AcademicDepartmentValidation = {
    createAcademicValidationSchema
}