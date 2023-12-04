import { z } from 'zod';

const userNameSchema = z.object({
    firstName: z.string()
        .min(1, { message: "First name is required" })
        .max(20, { message: "First name can not be more than 20 characters" })
        .refine(value => value.charAt(0).toUpperCase() + value.slice(1) === value, {
            message: "First name must be capitalized"
        }),

    middleName: z.string(),
    lastName: z.string().min(1)
});

const guardianSchema = z.object({
    fatherName: z.string()
        .min(1, { message: "Father's name is required" })
        .max(20, { message: "Father's name can not be more than 20 characters" }),

    fatherOccupation: z.string()
        .min(1, { message: "Father's occupation is required" }),

    fatherContactNo: z.string()
        .min(1, { message: "Father's contact number is required" }),

    motherName: z.string()
        .min(1, { message: "Mother's name is required" }),

    motherOccupation: z.string()
        .min(1, { message: "Mother's occupation is required" }),

    motherContactNo: z.string()
        .min(1, { message: "Mother's contact number is required" }),
});

const localGuardianSchema = z.object({
    name: z.string()
        .min(1, { message: "Local guardian's name is required" }),

    occupation: z.string()
        .min(1, { message: "Local guardian's occupation is required" }),

    contactNo: z.string()
        .min(1, { message: "Local guardian's contact number is required" }),

    address: z.string()
        .min(1, { message: "Local guardian's address is required" }),
});

const studentValidationSchema = z.object({
    body: z.object({
        password: z.string().max(20),

        student: z.object({
            name: userNameSchema
                .refine(value => !!value.firstName || !!value.lastName, {
                    message: "At least one of the first name or last name is required"
                }),
            gender: z.enum(['male', 'female', 'other']),
            dateOfBirth: z.string(),
            contactNo: z.string()
                .min(1, { message: "Contact number is required" }),
            emergencyContactNo: z.string()
                .min(1, { message: "Emergency contact number is required" }),
            email: z.string()
                .email({ message: "Email is required and must be a valid email type" }),
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            presentAddress: z.string()
                .min(1, { message: "Present address is required" }),
            permanentddress: z.string()
                .min(1, { message: "Permanent address is required" }),
            guardian: guardianSchema
                .refine(value => !!value.fatherName || !!value.motherName, {
                    message: "At least one of the father's name or mother's name is required"
                }),
            localGuardian: localGuardianSchema,
            profileImg: z.string(),
        })

    })
})

export const studentValidations = {
    studentValidationSchema
};
