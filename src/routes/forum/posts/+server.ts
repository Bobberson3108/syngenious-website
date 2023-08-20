import { getCollection } from "$lib/db";

export const GET = async ({ url }) => {
    /* get posts according to specified filters:
    - author
    - before
    - after
    - subject
    - max_posts */

    const posts = await getCollection("posts")

    const author = url.searchParams.get("author");
    const subject = url.searchParams.get("subject");
    const before = url.searchParams.get("before");
    const after = url.searchParams.get("after");
    const max_posts = Number(url.searchParams.get("max_posts"));

    //apply filters
    let query = {};

    if (author) {
        Object.assign(query, {"author" : author})
    }
    if (subject) {
        Object.assign(query, {"subject" : subject})
    }
    if (before) {
        Object.assign(query, {"time" : {$lte : new Date(before).toISOString()}})
    }
    if (after) {
        Object.assign(query, {"time" : {$gte : new Date(after).toISOString()}})
    }

    const postsArr = await posts.find(query).limit(max_posts ? max_posts : 0).toArray();    

    return new Response(JSON.stringify(postsArr));
}

export const POST = async ({ request, locals }) => {
    console.log(request, locals)
    /* parameters:
    - author
    - content
    - subject */
    const posts = await getCollection("posts");

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