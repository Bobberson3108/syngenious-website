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

<h2 id="what-is-syngenious" data-aos="fade-up">What is Syngenious?</h2>

<p data-aos="fade-up">Syngenious is a not-for-profit and democratic digital platform created by young people, for young people, to collaborate, explore their interests, and work on innovative projects.</p>

<h2>The Name</h2>
<InteractiveName />

<h2 id="our-values" class="centered-h2">Our Values</h2>
<div class="md:min-h-[700px] lg:min-h-[800px] xl:min-h-[1000px]">
    <Values/>
</div>

<h2 id="our-values" class="mt-12">What we offer</h2>

<ul class="list-disc ml-4">
    <li>Community: Syngenious boasts a vibrant community of young creatives, academics and innovators, offering opportunities to connect with like-minded individuals, share ideas and engage in meaningful discussions.</li>
    <li>Projects: Syngenious serves as a hub where members can initiate, join, and collaborate on a range of projects that align with their interests and passions, combining their unique skills and perspectives to accomplish far more than they could individually.</li>
    <li>Competitions: We host various competitions and challenges, offering members a chance to showcase their skills, challenge themselves, and earn recognition for their outstanding work.</li>
    <li>Showcase: Syngenious provides a platform where members can display their work, gain visibility, and benefit from the constructive feedback of the community. This supportive environment helps members refine their skills, expand their horizons, and reach their full potential.</li>
</ul>

<h2>What we're working on</h2>
<ul class="list-disc ml-4">
    <li>Portfolios: Developing personal portfolio pages for our members to showcase their unique skills, interests and accomplishments.</li>
    <li>Integrated projects platform: Creating a unified platform for project collaboration.</li>
    <li>Events/courses: Organising engaging events and courses covering a wide range of topics.</li>
    <li>Social network: Creating a dynamic digital space allowing members to showcase their work, seek feedback, request help, and "fork" other people's work.</li>
</ul>

<h2>Get involved</h2>


<style lang="postcss">
    h2 {
        @apply font-syne font-bold text-2xl sm:text-3xl md:text-4xl pb-8 pl-4 dark:text-white;
    }

    .centered-h2 {
        @apply px-0 mx-0 text-center;
    }

    p, ul {
        @apply font-quattrocento text-lg pb-8 pl-4 dark:text-white;
    }
</style>
