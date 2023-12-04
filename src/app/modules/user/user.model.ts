import { Schema, model } from "mongoose";
import TUser from "./user.interface";
import config from "../../config";
import bcrypt from "bcrypt"


const userSchema = new Schema<TUser>({
    id: {
        type: String,
        requird: true
    },
    password: {
        type: String,
        requird: true
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: ['student', 'faculty', 'admin']
    },
    status: {
        type: String,
        enum: ['in-progress', 'blocked'],
        default: "in-progress"
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

},
    {
        timestamps: true
    });

userSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
    )
    next()
})
// set '' after saving password
userSchema.post('save', function (doc, next) {
    doc.password = "";
    next()
})
export const UserModel = model<TUser>('User', userSchema)