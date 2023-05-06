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

<p data-aos="fade-up">Syngenious is a <span>not-for-profit</span> and <span>democratic</span> digital platform created by <span>young people</span>, for <span>young people</span>, to <span>collaborate</span>, explore their interests, and work on <span>innovative projects</span>.</p>

<h2 id="our-values" class="centered-h2">Our Values</h2>
<div class="md:min-h-[700px] lg:min-h-[800px] xl:min-h-[1000px]">
    <Values/>
</div>



<!-- What we offer -->
<h2 data-aos="fade-up" class="font-bold text-2xl sm:text-3xl md:text-4xl pb-8 pl-4 dark:text-white mt-12">What we offer</h2>
<div class="space-y-4 mx-4 max-w-4xl" data-aos="fade-up">
  <details>
    <summary class="font-bold cursor-pointer outline-none">Community</summary>
    <p class="pl-6">Syngenious boasts a vibrant community of young creatives, academics and innovators, offering opportunities to connect with like-minded individuals, share ideas and engage in meaningful discussions.</p>
  </details>
  <details>
    <summary class="font-bold cursor-pointer outline-none">Projects</summary>
    <p class="pl-6">Syngenious serves as a hub where members can initiate, join, and collaborate on a range of projects that align with their interests and passions, combining their unique skills and perspectives to accomplish far more than they could individually.</p>
  </details>
  <details>
    <summary class="font-bold cursor-pointer outline-none">Competitions</summary>
    <p class="pl-6">We host various competitions and challenges, offering members a chance to showcase their skills, challenge themselves, and earn recognition for their outstanding work.</p>
  </details>
  <details>
    <summary class="font-bold cursor-pointer outline-none">Showcase</summary>
    <p class="pl-6">Syngenious provides a platform where members can display their work, gain visibility, and benefit from the constructive feedback of the community. This supportive environment helps members refine their skills, expand their horizons, and reach their full potential.</p>
  </details>
</div>

<!-- What we're working on -->
<h2 data-aos="fade-up" class="font-bold text-2xl sm:text-3xl md:text-4xl pb-8 pl-4 dark:text-white mt-12">What we're working on</h2>
<div class="grid md:grid-cols-2 gap-8 mx-4" data-aos="fade-up">
  <div>
    <h3 class="font-semibold text-lg">Portfolios</h3>
    <p>Developing personal portfolio pages for our members to showcase their unique skills, interests and accomplishments.</p>
  </div>
  <div>
    <h3 class="font-semibold text-lg">Integrated projects platform</h3>
    <p>Creating a unified platform for project collaboration.</p>
  </div>
  <div>
    <h3 class="font-semibold text-lg">Events/courses</h3>
    <p>Organising engaging events and courses covering a wide range of topics.</p>
  </div>
  <div>
    <h3 class="font-semibold text-lg">Forum</h3>
    <p>Creating a dynamic digital space allowing members to showcase their work, seek feedback, request help, and "fork" other people's work.</p>
  </div>
</div>

<h2 data-aos="fade-up">Get involved</h2>
<p class="mt-5"></p>


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
