import mongoose from "mongoose";
import dbConfig from "./config/db.config.js";

const { HOST, DB, PORT } = dbConfig;

const connectDB = async () => {
    mongoose.set("strictQuery", false);
    await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`);
    console.log(`Succesfully connected to the database ${DB}`);

};


export { connectDB };


