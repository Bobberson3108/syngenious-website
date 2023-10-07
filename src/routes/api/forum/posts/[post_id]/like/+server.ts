import type { RequestHandler } from '@sveltejs/kit';
import { json, error } from '@sveltejs/kit';
import Post from '$lib/db/models/posts/post';

export const POST: RequestHandler = async ({ params, locals }) => {
     const session = await locals.getSession();

    let user_id;
    if (!session || !session.user?.id) {
        throw error(401, "Unauthorized");
    } else {
        user_id = session.user.id;
    }

    const postId = params.post_id;

    const post = await Post.findById(postId);
    if (!post) {
        throw error(404, `Post with ID ${postId} not found.`);
    }

    if (post.likedBy.includes(user_id)) {
        throw error(400, "Post already liked by user.");
    }

    post.likedBy.push(user_id);
    await post.save();

    return json({ message: "Post liked successfully!" });
}

export const DELETE: RequestHandler = async ({ params, locals }) => {
    const session = await locals.getSession();

    let user_id;
    if (!session || !session.user?.id) {
        throw error(401, "Unauthorized");
    } else {
        user_id = session.user.id;
    }

    const postId = params.post_id;

    const post = await Post.findById(postId);
    if (!post) {
        throw error(404, `Post with ID ${postId} not found.`);
    }

    if (!post.likedBy.includes(user_id)) {
        throw error(400, "Post not liked by user.");
    }

    post.likedBy = post.likedBy.filter(id => id !== user_id);
    await post.save();

    return json({ message: "Post unliked successfully!" });
}