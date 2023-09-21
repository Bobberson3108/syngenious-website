import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
    name: String,
    leader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    description: String,
    logo: String
});