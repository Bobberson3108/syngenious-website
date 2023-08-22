import { getCollection } from '$lib/db';
import Joi from 'joi';
import { error } from '@sveltejs/kit'
import { ObjectId } from 'mongodb';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
    /* get posts according to specified filters:
    - author
    - before
    - after
    - subject
    - max_posts */

    const posts = await getCollection('posts')

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

    const postsArr = await posts.find(query).limit(max_posts ? max_posts : 0).toArray();    

    return new Response(JSON.stringify(postsArr));
}

const postSchema = Joi.object({
    title: Joi.string().trim().required(),
    content: Joi.string().trim().required(),
    tags: Joi.array().items(Joi.string().trim()).required()
});

export const POST: RequestHandler = async ({ request, locals }) => {
    /* parameters:
    - author
    - content
    - subject */

    const session = await locals.getSession();

    if (!session || !session.user?.id) {
        throw error(401, JSON.stringify({ error: 'Unauthorized' }));
    }

    const user_id = session.user.id;

    const posts = await getCollection('posts');

    const data = await request.json();

    const timestamp = new Date();

    //validate data
    const { error: validationError } = postSchema.validate(data);
    if (validationError) {
        throw error(400, JSON.stringify({ error: validationError.details }));
    }


    const result = await posts.insertOne(Object.assign(data, {'time' : timestamp, 'author' : new ObjectId(user_id)}))

    const response = {
        id : result.insertedId,
        author: data.author,
        title: data.title,
        content : data.content,
        time : timestamp
    }

    return new Response(JSON.stringify(response));
};