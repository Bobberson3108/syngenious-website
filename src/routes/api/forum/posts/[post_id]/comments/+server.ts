import { getCollection } from "$lib/db";
import { ObjectId } from "mongodb";

export const GET = async ({ params }) => {
    const id = params.post_id;

    const posts = await getCollection("posts");
    const post = await posts.findOne({"_id" : new ObjectId(id)});
    if (!post) {
        return new Response(`Post with ID ${id} not found.`, {status: 404});
    }

    const comments = await getCollection("comments");

    const commentsArr = await comments.find({"post_id" : new ObjectId(id)}).toArray();

    return new Response(JSON.stringify(commentsArr));
}

export const POST = async ({ request, params, locals }) => {
    /* parameters:
    - content */
    const session = await locals.getSession();

    if (!session || !session.user?.id) {
        throw error(401, JSON.stringify({ error: 'Unauthorized' }));
    }

    const user_id = session.user.id;

    const id = params.post_id;
    const comments = await getCollection("comments");

    const data = await request.json();

    const timestamp = new Date();

    const result = await comments.insertOne(Object.assign(data, {"time" : timestamp, "post_id" : new ObjectId(id), 'author' : new ObjectId(user_id)}))

    const response = {
        id : result.insertedId,
        post_id : id,
        author: data.author,
        content : data.content,
        time : timestamp
    }

    return new Response(JSON.stringify(response));
};