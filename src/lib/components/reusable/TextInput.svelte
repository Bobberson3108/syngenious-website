<script lang="ts">
	import { onMount } from "svelte";
    import { cursorState } from "$lib/stores/cursorStore";

    let input:HTMLInputElement;

</script>

<input on:mouseenter={() => {cursorState.set("inputText")}} on:mouseleave={() => {cursorState.set("normal")}} bind:this={input} class="shadow appearance-none cursor-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username or Email"/>