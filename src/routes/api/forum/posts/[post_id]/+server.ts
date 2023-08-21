import { getCollection } from "$lib/db";
import { ObjectId } from "mongodb";

export const GET = async ({ params }) => {
    const id = params.post_id;
    
    const posts = await getCollection("posts");

    const post = await posts.findOne({"_id" : new ObjectId(id)});

    if (!post) {
        return new Response(`Post with ID ${id} not found.`, {status: 404});
    }

    return new Response(JSON.stringify(post));
}