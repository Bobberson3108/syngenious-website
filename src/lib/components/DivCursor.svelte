<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', () => {
            cursorElement.style.transform = `scale(${mouseDownCursorScaler})`;
        })

        window.addEventListener('mouseup', () => {
            cursorElement.style.transform = `scale(1)`;
        })
    })
    
    let cursorX:number;
    let cursorY:number;
    let cursorElement:HTMLDivElement;
    let mouseDownCursorScaler:number = 0.75;
    
    function moveCursor() {
        const cursorElementWidth = cursorElement.offsetWidth;
        const cursorElementHeight = cursorElement.offsetHeight;
        cursorX = event.clientX - (cursorElementWidth/2);
        cursorY = event.clientY - (cursorElementHeight/2);
        cursorElement.style.top = `${cursorY}px`;
        cursorElement.style.left = `${cursorX}px`;
    }

</script>

<div class="divCursorWrapper pointer-events-none w-full h-[100vh] flex justify-center items-center fixed z-[9]">
    <div bind:this={cursorElement} class="divCursor absolute w-[10px] h-[10px] rounded-full  backdrop-invert"></div>
</div>

<style lang="postcss">

</style>