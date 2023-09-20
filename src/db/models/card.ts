import { cardSchema } from "../schemas/cardSchema.js";
import { model } from 'mongoose';

interface ICard {
    someValue: string;
    nameOfItem: string;
    capacity: string;
    sizeAndWeight: string;
    splashWaterAndDustResistant: string;
    chip: string;
    camera: string;
    videoRecording: string;
    faceID: string;
    company: string;
    image: string;
    price: number;
    cardCategory: any;
    secondCardCategory: any;
}

const Card = model<ICard>("Card", cardSchema);

export default Card