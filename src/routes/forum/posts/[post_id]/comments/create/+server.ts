import { dbConnect } from "$lib/db";
import { ObjectId } from "mongodb";

export const POST = async ({ request, params }) => {
    /* parameters:
    - author
    - content
    - subject */
    const comments = dbConnect("comments");

    const data = await request.json();

    const timestamp = new Date();

    const result = await comments.insertOne(Object.assign(data, {"time" : timestamp, "post_id" : new ObjectId(id)}))

    const response = {
        "id" : result.insertedId,
        "post_id" : id,
        "content" : data.content,
        "time" : timestamp
    }

    return new Response(JSON.stringify(response));
};