//Schema create
import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, StudentModel, TStudent, UserName } from './student.interface';
import validator from "validator";

const userNameSchema = new Schema<UserName>(
    {
        firstName: {
            type: String,
            required: [true, "First Name is required"],
            trim: true,
            maxlength: [20, "FirstName can not be more than 20 characters"],
            validate: {
                validator: function (value: string) {
                    const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1)
                    return firstNameStr === value
                },
                message: `{VALUE} is not in capitalize formet`
            }
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            trim: true,
        }
    }
)
const gardianSchema = new Schema<Guardian>({
    fatherName: {
        type: String,
        required: [true, "First Name is required"],
        maxlength: [20, "FirstName can not be more than 20 characters"],
        trim: true,
    },
    fatherOccupation: {
        type: String,
        required: true,
        trim: true,
    },
    fatherContactNo: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true,
        trim: true,
    },
    motherOccupation: {
        type: String,
        required: true,
        trim: true,
    },
    motherContactNo: {
        type: String,
        required: true
    }
})

const localGuardianSchema = new Schema<LocalGuardian>({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true,
        trim: true,
    },
    contactNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
})

const studentSchema = new Schema<TStudent, StudentModel>({
    id: { type: String, required: true, unique: true },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, "User ID is required"],
        unique: true,
        ref: 'User',
    },
    name: {
        type: userNameSchema,
        required: [true, "Name is required"],
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'famale', 'other'],
            message: `{VALUE} is not valid`,
        },
        required: [true, "Gender is required"]
    },
    dateOfBirth: { type: Date },
    contactNo: {
        type: String,
        required: [true, "Contact number is required"]
    },
    emergencyContactNo: {
        type: String,
        required: [true, "Emergency contact number is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: `{VALUE} is not a valid email type`
        }
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: `{VALUE} is not a valid group`
        },
        trim: true,

    },
    presentAddress: { type: String, required: true, trim: true, },
    permanentAddress: { type: String, required: true, trim: true, },
    guardian: {
        type: gardianSchema,
        required: true
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true
    },
    profileImg: { type: String },
    admissionSemester: {
        type: Schema.Types.ObjectId,
        ref: "AcademicSemester"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
    //creating a custom static method
    // studentSchema.statics.isUserExists = async function () {
    //     const existingUser = await Student.findOne({ id })
    //     return existingUser
    // }

    //creating a custom instance method
    // studentSchema.methods.isUserExists = async function (id: string) {
    //     const existingUser = await Student.findOne({ id });
    //     return existingUser;
    // }
})
export const Student = model<TStudent, StudentModel>("Student", studentSchema);
