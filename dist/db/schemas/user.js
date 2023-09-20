import { Schema } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        min: 2,
        max: 255,
        required: true
    },
    email: {
        type: String,
        min: 6,
        max: 255,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: 6,
        max: 255,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});
export { userSchema };
