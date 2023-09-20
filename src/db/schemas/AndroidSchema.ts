import mongoose, { Schema } from "mongoose";

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

})

