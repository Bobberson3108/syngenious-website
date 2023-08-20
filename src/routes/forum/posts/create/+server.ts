import { dbConnect } from "$lib/db";

export const POST = async ({ request }) => {
    /* parameters:
    - author
    - content
    - subject */
    const posts = dbConnect("posts");

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