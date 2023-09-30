import { Post } from "$lib/db/models";
import { json, error } from "@sveltejs/kit";

export const GET = async ({ params }) => {
    const id = params.post_id;
    
    const post = await Post.findById(id);

    if (!post) {
        throw error(404, `Post with ID ${id} not found.`)
    }

    return json(post);
}