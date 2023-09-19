import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    branches: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Branch',
        required: true,
    },
    bio: String,
    location: String,
    birthdate: Date,
    settings: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserSettings',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);
export default User;