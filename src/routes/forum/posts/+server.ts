import { dbConnect } from "$lib/db";

export const GET = async ({ url }) => {
    /* get posts according to specified filters:
    - author
    - before
    - after
    - subject
    - max_posts */

    const posts = dbConnect("posts")

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