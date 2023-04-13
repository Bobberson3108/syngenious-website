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
        <!-- Added responsive padding and margin classes -->
        <div class="mt-5 sm:mt-10 mb-20 sm:mb-40">
            <div class="col-span-2 p-5 w-full z-0">
                <div class="z-0" data-aos="fade-up">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-syne dark:text-white">
                        <span class="block">Creators need a</span>
                        <span class="block">collaborative, social</span>
                        <span class="block">and innovative</span>
                        <span class="block">digital space.</span>
                    </h1>
                    <h2 class="text-2xl sm:text-3xl md:text-4xl xl:text-5xl lg:text-6xl mt-3 font-quattrocento text-primary-700 dark:text-secondary-500">Come build one with us.</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="w-screen py-16 sm:py-24 md:py-32 pl-4 sm:pl-6 md:pl-8 lg:pl-12 bg-primary-800 dark:bg-transparent dark:bg-gradient-to-r dark:from-primary-800 dark:to-primary-700 -skew-y-12">
        <div class="flex-row flex justify-between">
            <div class="ml-0 sm:ml-10 text-center flex items-center justify-center">
                <div data-aos="fade-up">
                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-syne text-secondary-400">Get your projects out there</h1>
                    <a href="https://discord.gg/Cz95wV44nA"><h2 class="text-3xl sm:text-4xl md:text-5xl font-quattrocento underline  text-white hover:text-primary-100 dark:text-primary-100 dark:hover:text-primary-200">In our discord.</h2></a>
                </div>
            </div>
            
            <div data-aos="fade-up">
                <img class="z-10 skew-y-12 mr-0 sm:mr-10 md:mr-20" src="img\external-brand-marketing-strategy-wanicon-lineal-wanicon.png">
            </div>
        </div>
    </div>
    <div class="w-screen py-8 pl-4 sm:pl-6 md:pl-8 lg:pl-12">
        <div class="mt-24 sm:mt-48 flex flex-col sm:flex-row justify-between" data-aos="fade-up">
            <img class="w-48 sm:w-64 md:w-72 lg:w-auto max-w-full mb-8 sm:mb-0 dark:invert" src="img\external-trophy-award-and-success-wanicon-lineal-wanicon.png">
            <div class="text-center justify-center w-full" data-aos="fade-up">
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-syne dark:text-white">Make your<br>mark in our<br> competitions.</h1>
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-quattrocento underline text-primary-700 hover:text-primary-500 dark:text-secondary-500 dark:hover:text-secondary-600">
                    <a href="/competitions">See what's on right now</a>
                </h2>
            </div>
        </div>
    </div>
</div>
