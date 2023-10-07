import Post from "$lib/db/models/posts/post";
import { json, error } from "@sveltejs/kit";

export const GET = async ({ params }) => {
    const id = params.post_id;
    
    const post = await Post.findById(id);

    if (!post) {
        throw error(404, `Post with ID ${id} not found.`)
    }

    return json(post);
}

export const PATCH = async ({ request, params }) => {
    const postId = params.post_id;
    const data = await request.json();
    
    const post = await Post.findById(postId);
    
    if (!post) {
        throw error(404, `Post with ID ${postId} not found.`);
    }

    Object.keys(data).forEach(key => post[key] = data[key]);

    await post.save();

    return json(post);
};

export const DELETE = async ({ params }) => {
    const postId = params.post_id;
    
    const result = await Post.findByIdAndRemove(postId);
    
    if (!result) {
        throw error(404, `Post with ID ${postId} not found.`);
    }

    return json({ success: true });
};