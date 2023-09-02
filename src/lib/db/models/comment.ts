import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    replies: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});