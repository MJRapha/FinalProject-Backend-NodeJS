var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import cardsJson from "../json/cards.json" assert { type: 'json' };
import { connectDB } from "../db/connect.js";
import Card from "../db/models/card.js";
connectDB().catch((e) => {
    console.log(e);
});
export const insertMany = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Card.create(cardsJson.cards);
        console.log('Data successfully imported');
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('seeder insert on action');
    }
});
