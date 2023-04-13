<script lang="ts">
    import { onMount } from 'svelte';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    onMount(() => {
        AOS.init();
        AOS.refresh();
    });
</script>

<div class="overflow-hidden">
    <div class="container px-4 sm:px-6 md:px-8 lg:pl-12 py-8">
        <!-- Introduction -->
        <div class="mt-5 sm:mt-10 mb-20 sm:mb-40">
            <div class="col-span-2 p-5 w-full z-0">
                <div class="z-0" data-aos="fade-up">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-syne dark:text-white">
                        <span class="block">Welcome to</span>
                        <span class="block">Syngenious</span>
                    </h1>
                    <h2 class="text-2xl sm:text-3xl md:text-4xl xl:text-5xl lg:text-6xl mt-3 font-quattrocento text-primary-700 dark:text-secondary-500">
                        A collaborative, social, and innovative digital space for young people to explore their passions and create cool stuff.
                    </h2>
                </div>
            </div>
        </div>
    </div>

    <!-- The Name: Syngenious -->
    <div class="w-screen py-16 sm:py-24 md:py-32 pl-4 sm:pl-6 md:pl-8 lg:pl-12 bg-primary-800 dark:bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:-from-40% dark:to-primary-800 -skew-y-12">
        <div class="flex-row flex justify-between">
            <div class="ml-0 sm:ml-10 text-center flex items-center justify-center">
                <div data-aos="fade-up">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-syne text-secondary-400">The Name: Syngenious</h1>
                    <p class="text-xl sm:text-2xl md:text-3xl font-quattrocento text-white">A fusion of "ingenious" and "synergy," our name embodies the spirit of creativity, teamwork, and innovation that defines our community.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Our Values -->
    <div class="w-screen py-8 pl-4 sm:pl-6 md:pl-8 lg:pl-12">
        <div class="mt-24 sm:mt-48 flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
            <img class="w-48 sm:w-64 md:w-72 lg:w-auto max-w-full mb-8 sm:mb-0 dark:invert" src="img\external-trophy-award-and-success-wanicon-lineal-wanicon.png">
            <div class="text-center justify-center w-full" data-aos="fade-up">
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-syne dark:text-white">Our Values</h1>
                <ul class="list-disc list-inside text-xl sm:text-2xl md:text-3xl font-quattrocento text-primary-700 dark:text-secondary-500">
                    <li>Collaboration: Embracing the idea that we can accomplish more together than we can alone, nurturing a culture of cooperation and mutual support.</li>
                    <li>Community: Connecting like-minded individuals to forge relationships built on shared interests and values.</li>
                    <li>Opportunity: Recognizing the potential in young people, providing funding, guidance, and resources to empower them to take control of their future and make a difference in the world.</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- What We Offer -->
    <div class="w-screen py-16 sm:py-24 md:py-32 pl-4 sm:pl-6 md:pl-8 lg:pl-12 bg-primary-800 dark:bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:-from-40% dark:to-primary-800 -skew-y-12">
        <div class="flex-row flex justify-between">
            <div class="ml-0 sm:ml-10 text-center flex items-center justify-center">
                <div data-aos="fade-up">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-syne text-secondary-400">What We Offer</h1>
                    <ul class="list-disc list-inside text-xl sm:text-2xl md:text-3xl font-quattrocento text-white">
                        <li>Projects: Collaborate on initiatives that span various disciplines and aim to create positive change in the world.</li>
                        <li>Transparency and Openness: Fostering a culture of transparency and free sharing of ideas and resources through open-source principles.</li>
                        <li>Education and Empowerment: Challenging conventional education models by offering alternative learning opportunities and supporting young people to realize their full potential.</li>
                        <li>Showcasing Talent and Competitions: Providing a platform to showcase work, receive feedback, and participate in competitions for growth and recognition.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Our Focus Areas -->
    <div class="w-screen py-8 pl-4 sm:pl-6 md:pl-8 lg:pl-12">
        <div class="mt-24 sm:mt-48 flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
            <img class="w-48 sm:w-64 md:w-72 lg:w-auto max-w-full mb-8 sm:mb-0 dark:invert" src="img\external-focus-areas-icon.png">
            <div class="text-center justify-center w-full" data-aos="fade-up">
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-syne dark:text-white">Our Focus Areas</h1>
                <p class="text-xl sm:text-2xl md:text-3xl font-quattrocento text-primary-700 dark:text-secondary-500">Syngenious is dedicated to nurturing talent across diverse fields, including art, STEM, and humanities. Our community-driven approach encourages interdisciplinary collaboration, promoting a holistic understanding of the world and cultivating well-rounded individuals.</p>
            </div>
        </div>
    </div>

    <!-- Our Impact -->
    <div class="w-screen py-16 sm:py-24 md:py-32 pl-4 sm:pl-6 md:pl-8 lg:pl-12 bg-primary-800 dark:bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:-from-40% dark:to-primary-800 -skew-y-12">
        <div class="flex-row flex justify-between">
            <div class="ml-0 sm:ml-10 text-center flex items-center justify-center">
                <div data-aos="fade-up">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-syne text-secondary-400">Our Impact</h1>
                    <p class="text-xl sm:text-2xl md:text-3xl font-quattrocento text-white">By empowering young people to explore their passions, Syngenious is creating a positive impact on the world. Our focus on social good, collaboration, and innovation inspires members to be part of something bigger than themselves and to drive lasting change.</p>
                </div>
            </div>
        </div>
    </div>
</div>

