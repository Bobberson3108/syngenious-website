import type { RequestHandler } from '@sveltejs/kit';
import { json, error } from '@sveltejs/kit';
import { Comment, Post } from '$lib/db/models';

export const GET: RequestHandler = async ({ params }) => {
    const _id = params.post_id;
;
    const post = Post.findById(_id);
    if (!post) {
        throw error(404, `Post with ID ${_id} not found.`);
    }

    const comments = await getCollection("comments");

    const commentsArr = await Comment.find({ post: _id }).populate('author').populate('replies').exec();

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