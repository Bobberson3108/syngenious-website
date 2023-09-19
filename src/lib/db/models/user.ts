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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    permissions: {
        admin: {type: Boolean, default: false},
        teamMember: {type: Boolean, default: false}
    },
    branchLeaderOf: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Branch',
    }
});


const User = mongoose.model("User", userSchema);
export default User;