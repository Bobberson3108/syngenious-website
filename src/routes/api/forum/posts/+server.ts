import { json, error } from '@sveltejs/kit'
import Post from "$lib/db/models/posts/post";
import type { RequestHandler } from './$types';

export const GET = async ({ url }) => {
    /* get posts according to specified filters:
    - author
    - before
    - after
    - subject
    - max_posts */

    const author = url.searchParams.get('author');
    const subject = url.searchParams.get('subject');
    const before = url.searchParams.get('before');
    const after = url.searchParams.get('after');
    const max_posts = Number(url.searchParams.get('max_posts'));

    //apply filters
    let query = {};

    if (author) {
        Object.assign(query, {'author' : author})
    }
    if (subject) {
        Object.assign(query, {'subject' : subject})
    }
    if (before) {
        Object.assign(query, {'time' : {$lte : new Date(before).toISOString()}})
    }
    if (after) {
        Object.assign(query, {'time' : {$gte : new Date(after).toISOString()}})
    }


    const posts = await Post.find(query).sort({'time' : -1}).limit(max_posts).populate('author', 'username');  

    //return new Response(JSON.stringify(postsArr));
    return json(posts);
}


export const POST: RequestHandler = async ({ request, locals }) => {
    /* parameters:
    - author
    - content
    - subject */

    const session = await locals.getSession();

    let author;
    if (!session || !session.user?.id) {
        // throw error(401, JSON.stringify({ error: 'Unauthorized' }));
        author = '64f39fb74cb5010a4882786';
    } else {
        author = session.user.id;
    }

    const data = await request.json();

    const timestamp = new Date();

    const post = new Post({author, ...data, timestamp});

    const response = await post.save();

    return new Response(JSON.stringify(response));
};