<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { theme } from "$lib/themeStore";
    import { onMount } from "svelte";

    import AOS from "aos";
    import "aos/dist/aos.css";

    let cursor;

    onMount(() => {
        AOS.init();
        AOS.refresh();

        document.documentElement.classList.add($theme);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        });
    });
</script>

<div class="min-h-screen min-w-screen">
    <div id="cursor" class="red-dot" bind:this={cursor}></div>
    <Nav/>
    <slot />
    <Footer/>
</div>