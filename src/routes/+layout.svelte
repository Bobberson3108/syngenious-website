<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";

    import { theme } from "$lib/themeStore";
    import { onMount } from "svelte";

    import AOS from "aos";
    import "aos/dist/aos.css";

    onMount(() => {
        AOS.init();
        AOS.refresh();

        document.documentElement.classList.add($theme);
        console.log($theme)
    });
</script>

<Nav/>
<slot />