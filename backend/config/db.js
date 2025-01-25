import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    const DB_URL = process.env.DB_URL; 
    if (!DB_URL) {
        console.error("MongoDB URL is not set in the environment variables");
        process.exit(1); 
    }
    
    await mongoose
        .connect(DB_URL)
        .then(() => console.log("DB connected"))
        .catch((err) => {
            console.error("Failed to connect to DB", err);
            process.exit(1); 
        });
};
