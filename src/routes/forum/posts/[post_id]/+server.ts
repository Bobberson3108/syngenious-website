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

export const POST = async ({ request }) => {
    /* parameters:
    - author
    - content
    - subject */
    const posts = await getCollection("posts");

    const data = await request.json();

    const timestamp = new Date();

    const result = await posts.insertOne(Object.assign(data, {"time" : timestamp}))

    const response = {
        "id" : result.insertedId,
        "content" : data.content,
        "time" : timestamp
    }

    return new Response(JSON.stringify(response));
};