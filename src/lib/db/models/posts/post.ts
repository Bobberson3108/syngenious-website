import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: function() {
            return !this.images
        }
    },
    images: {
        type: [String],
        required: function() {
            return !this.text
        }
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
        default: []
    },
    branches: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Branch",
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postSchema);
export default Post;