import mongoose, { Schema } from "mongoose";
const checkoutSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    cart: Array,
});
export { checkoutSchema };
