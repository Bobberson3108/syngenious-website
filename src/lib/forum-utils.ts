async function getPosts(): Promise<any[]> {
    const response = await fetch('/api/forum/posts');
    const posts = await response.json();
    return posts;
}

export { getPosts };