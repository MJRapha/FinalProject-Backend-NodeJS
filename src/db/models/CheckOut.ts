import { model } from "mongoose";
import { checkoutSchema } from "../schemas/CheckOut.js";
const CheckOut = model("CheckOut", checkoutSchema);

export { CheckOut };