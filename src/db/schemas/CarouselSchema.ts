import mongoose, { Schema } from "mongoose";

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

})

