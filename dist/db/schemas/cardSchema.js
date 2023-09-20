import { Schema } from "mongoose";
const carouselSchema = new Schema({
    someValue: {
        type: String,
        min: 2,
        max: 20,
        required: true,
    },
    nameOfItem: String,
    launch: {
        announced: String,
        status: String,
    },
    body: {
        dimensions: String,
        weight: String,
    },
    display: {
        type: String,
        size: String,
        multitouch: String,
        resolution: String,
    },
    platform: {
        OS: String,
        chipset: String,
        CPU: String,
        GPU: String,
    },
    memory: {
        cardSlot: String,
        internal: String,
    },
    sound: {
        loudspeaker: String,
        threeAndHalfmmJack: String,
    },
    comms: {
        bluetooth: String,
        USB: String,
    },
    features: {
        sensors: String,
        messaging: String,
        browser: String,
        radio: String,
        colors: String,
    },
    battery: String,
    company: String,
    image: String,
    price: Number,
});
const androidSchema = new Schema({
    someValue: {
        type: String,
        min: 2,
        max: 20,
        required: true,
    },
    nameOfItem: String,
    network: {
        technology: String,
        twoGBands: String,
        threeGBands: String,
        speed: String,
        fourGBands: String,
        fiveG: String,
    },
    launch: {
        announced: String,
        status: String,
    },
    body: {
        dimensions: String,
        weight: String,
        build: String,
        SIM: String,
    },
    display: {
        type: String,
        size: String,
        protection: String,
        resolution: String,
    },
    platform: {
        OS: String,
        chipset: String,
        CPU: String,
        GPU: String,
    },
    memory: {
        cardSlot: String,
        internal: String,
    },
    sound: {
        loudspeaker: String,
        threeAndHalfmmJack: String,
    },
    company: String,
    image: String,
    price: Number,
});
const cardSchema = new Schema({
    someValue: {
        type: String,
        min: 2,
        max: 20,
        required: true,
    },
    nameOfItem: String,
    capacity: String,
    sizeAndWeight: String,
    splashWaterAndDustResistant: String,
    chip: String,
    camera: String,
    videoRecording: String,
    faceID: String,
    company: String,
    image: String,
    price: Number,
    cardCategory: {
        type: androidSchema,
    },
    secondCardCategory: {
        type: carouselSchema,
    }
});
export { cardSchema };
