<script lang="ts">
    import { onMount } from 'svelte';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    import InteractiveName from '$lib/components/InteractiveName.svelte';
    import Values from '$lib/components/Values.svelte';

    onMount(() => {
        AOS.init();
        AOS.refresh();
    });
</script>

<h1 class="font-syne font-bold w-full text-center text-3xl sm:text-4xl md:text-5xl mt-3 mb-16 dark:text-white" data-aos="fade-up">About</h1>

<h2 data-aos="fade-up">What is Syngenious?</h2>

<p data-aos="fade-up">At its core, Syngenious a digital space where young people can come together to explore their passions, create cool stuff and make a positive impact on the world.</p>

<h2>The Name</h2>
<InteractiveName />

<h2 class="centered-h2">Our Values</h2>
<Values/>


<style lang="postcss">
    h2 {
        @apply font-syne font-bold text-2xl sm:text-3xl md:text-4xl mb-8 ml-4 dark:text-white;
    }

    .centered-h2 {
        @apply px-0 mx-0 text-center;
    }

    p {
        @apply font-quattrocento text-lg mb-8 ml-4 dark:text-white;
    }
</style>
