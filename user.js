import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/firstdb")
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String
});

export default mongoose.model("User", userSchema);
