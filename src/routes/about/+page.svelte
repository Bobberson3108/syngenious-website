<script lang="ts">
    import { onMount } from 'svelte';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    onMount(() => {
        AOS.init();
        AOS.refresh();
    });

    import InteractiveName from '$lib/components/InteractiveName.svelte';
</script>

<h1 class="font-syne font-bold w-full text-center text-3xl sm:text-4xl md:text-5xl mb-10 mt-3 text-primary-500 dark:text-white" data-aos="fade-up">About</h1>

<InteractiveName />