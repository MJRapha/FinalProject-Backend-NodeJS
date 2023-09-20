import { cardSchema } from "../schemas/cardSchema.js";
import { model } from 'mongoose';
const Card = model("Card", cardSchema);
export default Card;
