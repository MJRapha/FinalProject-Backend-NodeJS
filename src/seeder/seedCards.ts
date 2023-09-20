import cardsJson from "../json/cards.json" assert { type: 'json' };
import { connectDB } from "../db/connect.js"
import Card from "../db/models/card.js";

connectDB().catch((e) => {
    console.log(e);
});

export const insertMany = async () => {
    try {
        await Card.create(cardsJson.cards);
        console.log('Data successfully imported');

    } catch (error) {
        console.log(error);
    } finally {
        console.log('seeder insert on action');

    }
}