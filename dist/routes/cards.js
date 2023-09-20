var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
const router = express.Router();
import Joi from 'joi';
const validateCardCredentials = (body) => {
    const schema = Joi.object({
        someValue: {
            type: Joi.string().min(2).max(30).required(),
            min: Joi.number().required(),
            max: Joi.number().required(),
            required: Joi.boolean().required(),
        },
        nameOfItem: Joi.string().min(2).max(9999).required(),
        capacity: Joi.string().min(2).max(9999).required(),
        sizeAndWeight: Joi.string().min(2).max(9999).required(),
        splashWaterAndDustResistant: Joi.string().min(2).max(9999).required(),
        chip: Joi.string().min(2).max(9999).required(),
        camera: Joi.string().min(2).max(9999).required(),
        videoRecording: Joi.string().min(2).max(9999).required(),
        faceID: Joi.string().min(2).max(9999).required(),
        company: Joi.string().min(2).max(9999).required(),
        image: Joi.string().min(2).max(9999).required(),
        price: Joi.number().required(),
        cardCategory: {
            someValue: {
                type: Joi.string().min(2).max(30).required(),
                min: Joi.number().required(),
                max: Joi.number().required(),
                required: Joi.boolean().required(),
            },
            nameOfItem: Joi.string().min(2).max(9999).required(),
            network: {
                technology: Joi.string().min(2).max(9999).required(),
                twoGBands: Joi.string().min(2).max(9999).required(),
                threeGBands: Joi.string().min(2).max(9999).required(),
                speed: Joi.string().min(2).max(9999).required(),
                fourGBands: Joi.string().min(2).max(9999).required(),
                fiveG: Joi.string().min(2).max(9999).required(),
            },
            launch: {
                announced: Joi.string().min(2).max(9999).required(),
                status: Joi.string().min(2).max(9999).required(),
            },
            body: {
                dimensions: Joi.string().min(2).max(9999).required(),
                weight: Joi.string().min(2).max(9999).required(),
                build: Joi.string().min(2).max(9999).required(),
                SIM: Joi.string().min(2).max(9999).required(),
            },
            display: {
                type: Joi.string().min(2).max(9999).required(),
                size: Joi.string().min(2).max(9999).required(),
                protection: Joi.string().min(2).max(9999).required(),
                resolution: Joi.string().min(2).max(9999).required(),
            },
            platform: {
                OS: Joi.string().min(2).max(9999).required(),
                chipset: Joi.string().min(2).max(9999).required(),
                CPU: Joi.string().min(2).max(9999).required(),
                GPU: Joi.string().min(2).max(9999).required(),
            },
            memory: {
                cardSlot: Joi.string().min(2).max(9999).required(),
                internal: Joi.string().min(2).max(9999).required(),
            },
            sound: {
                loudspeaker: Joi.string().min(2).max(9999).required(),
                threeAndHalfmmJack: Joi.string().min(2).max(9999).required(),
            },
            company: Joi.string().min(2).max(9999).required(),
            image: Joi.string().min(2).max(9999).required(),
            price: Joi.number().required(),
        },
        secondCardCategory: {
            someValue: {
                type: Joi.string().min(2).max(30).required(),
                min: Joi.number().required(),
                max: Joi.number().required(),
                required: Joi.boolean().required(),
            },
            nameOfItem: Joi.string().min(2).max(9999).required(),
            launch: {
                announced: Joi.string().min(2).max(9999).required(),
                status: Joi.string().min(2).max(9999).required(),
            },
            body: {
                dimensions: Joi.string().min(2).max(9999).required(),
                weight: Joi.string().min(2).max(9999).required(),
            },
            display: {
                type: Joi.string().min(2).max(9999).required(),
                size: Joi.string().min(2).max(9999).required(),
                multitouch: Joi.string().min(2).max(9999).required(),
                resolution: Joi.string().min(2).max(9999).required(),
            },
            platform: {
                OS: Joi.string().min(2).max(9999).required(),
                chipset: Joi.string().min(2).max(9999).required(),
                CPU: Joi.string().min(2).max(9999).required(),
                GPU: Joi.string().min(2).max(9999).required(),
            },
            memory: {
                cardSlot: Joi.string().min(2).max(9999).required(),
                internal: Joi.string().min(2).max(9999).required(),
            },
            sound: {
                loudspeaker: Joi.string().min(2).max(9999).required(),
                threeAndHalfmmJack: Joi.string().min(2).max(9999).required(),
            },
            comms: {
                bluetooth: Joi.string().min(2).max(9999).required(),
                USB: Joi.string().min(2).max(9999).required(),
            },
            features: {
                sensors: Joi.string().min(2).max(9999).required(),
                messaging: Joi.string().min(2).max(9999).required(),
                browser: Joi.string().min(2).max(9999).required(),
                radio: Joi.string().min(2).max(9999).required(),
                colors: Joi.string().min(2).max(9999).required(),
            },
            battery: Joi.string().min(2).max(9999).required(),
            company: Joi.string().min(2).max(9999).required(),
            image: Joi.string().min(2).max(9999).required(),
            price: Joi.number().required(),
        }
    });
    return schema.validate(body);
};
//Display cards
//router.post('/display-cards' , async(req,res));
//Create Card
router.post('/create-card', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //validate body with joi
    const { error } = validateCardCredentials(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }
    //validate role admin 
    try {
        /*  const newCard = await Card.create(req.body);
         await newCard.save() */
        res.status(201).send(req.body);
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
export default router;
