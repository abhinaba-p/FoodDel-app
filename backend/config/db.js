import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://fooddelapp:356578@cluster0.xsdov.mongodb.net/food-del').then(()=>console.log("DB connected"))
}