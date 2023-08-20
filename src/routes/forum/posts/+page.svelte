<script lang="ts">
    async function test() {
        await fetch('http://localhost:3000/api/forum/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'test',
                content: 'test',
            }),
        });
    };
</script>

<button on:click={test}>test</button>
```