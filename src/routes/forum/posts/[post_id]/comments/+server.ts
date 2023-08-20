import { dbConnect } from "$lib/db";
import { ObjectId } from "mongodb";

export const GET = async ({ params }) => {
    const id = params.post_id;

    const posts = dbConnect("posts");
    const post = await posts.findOne({"_id" : new ObjectId(id)});
    if (!post) {
        return new Response(`Post with ID ${id} not found.`, {status: 404});
    }

    const comments = dbConnect("comments");

    const commentsArr = await comments.find({"post_id" : new ObjectId(id)}).toArray();

    return new Response(JSON.stringify(commentsArr));
}