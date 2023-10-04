import type { RequestHandler } from '@sveltejs/kit';
import { json, error } from '@sveltejs/kit';
import Comment from '$lib/db/models/comment';
import Post from '$lib/db/models/posts/post';

export const GET: RequestHandler = async ({ params }) => {
    const _id = params.post_id;
;
    const post = await Post.findById(_id).populate('comments').lean();
    if (!post) {
        throw error(404, `Post with ID ${_id} not found.`);
    }
    return json(post.comments);
}

export const POST = async ({ request, params, locals }) => {
    /* parameters:
    - content */
    const session = await locals.getSession();

    let user_id;
    if (!session || !session.user?.id) {
        // throw error(401, JSON.stringify({ error: 'Unauthorized' }));
        user_id = '64f39fb74cb5010a48827866';
    } else {
        user_id = session.user.id;
    }

    const id = params.post_id;

    const data = await request.json();

    const timestamp = new Date();

    const post = await Post.findById(id);
    if (!post) {
        throw error(404, `Post with ID ${id} not found.`);
    }

    const result = await Comment.create({ author: user_id, post: id, content:data.content, timestamp });

    post.comments.push(result._id);

    await post.save();

    return json(result);

};