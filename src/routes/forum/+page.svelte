<script lang="ts">
    async function test() {
        await fetch('http://localhost:5173/api/forum/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": "hi",
                "content": "hi",
                tags: ["philosophy", "cs", "competition"]
            }),
        });
    };
</script>


<div class="h-full flex-col items-center align-middle">
    <button class="text-light text-[200px] pt-[10vh]" on:click={test}>FJDSFDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDFDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</button>
</div>