<script lang="ts">
    import { getPosts } from '$lib/forum-utils';
    import { onMount } from 'svelte';

    let posts = [];

    onMount(async () => {
        posts = await getPosts();
    });
    
</script>


<div class="h-full flex flex-col justify-center items-center">
    <h1 class="text-header regularDesk:text-header deskBreak:text-[4rem] mobile:text-[10vw] font-display font-medium text-dark dark:text-light">Forum</h1>
    <div class="flex flex-col justify-center items-center w-full">
        {#each posts as post, id}
            <a href='/idk' class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">{post.text}</p>
            </a>
        {/each}
    </div>
</div>

