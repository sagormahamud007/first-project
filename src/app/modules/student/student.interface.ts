import { Model, Types } from "mongoose";

//interface
export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
}

export type UserName =
    {
        firstName: string;
        middleName?: string;
        lastName: string
    }

export type LocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}

export type TStudent = {
    id: string;
    user: Types.ObjectId;
    name: UserName;
    gender: "male" | "female" | "other";
    dateOfBirth?: Date;
    contactNo: string;
    emergencyContactNo: string;
    email: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImg?: string;
    admissionSemester: Types.ObjectId;
    isDeleted: boolean
}

//for creating static instance

export interface StudentModel extends Model<TStudent> {
    isUserExists(id: string): Promise<TStudent | null>
}

//for creating custom instance
// export type StudentMethods = {
//     isUserExists(id: string): Promise<TStudent | null>
// }


// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>;