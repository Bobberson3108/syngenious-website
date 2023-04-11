<script lang="ts">
<<<<<<< HEAD
    import CommunityDashboard from "$lib/components/CommunityDashboard.svelte";
</script>

<CommunityDashboard></CommunityDashboard>
=======
    import { onMount } from 'svelte';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    onMount(() => {
        AOS.init();
        AOS.refresh();
    });
</script>

<div class="overflow-hidden">
    <div class="container py-8 pl-12">
        <div class="mt-5 mb-40">
            <div class="col-span-2 p-5 w-full z-0">
                <div class="z-0" data-aos="fade-up">
                    <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold font-syne">
                        <span class="block">Creators need a <span>
                        <span class="block">collaborative, social </span>
                        <span class="block">and innovative </span>
                        <span class="block">digital space.</span>
                    </h1>
                    <h2 class="text-3xl sm:text-4xl md:text-5xl xl:text-5xl lg-text-6xl mt-3 font-quattrocento text-primary-700">Come build one with us.</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- <svg class="fill-primary-500" width="100%" viewBox="0 0 1528 1215" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-139 385.659L1557 0V829.341L-139 1215V385.659Z"/>
    </svg> -->
    <div class="w-screen py-32 pl-12 bg-primary-800 -skew-y-12">
        <div class="flex-row flex justify-between">
            <div class="ml-10 text-center flex items-center justify-center">
                <div data-aos="fade-up">
                    <h1 class="text-6xl font-bold font-syne text-secondary-400">Get your projects out there</h1>
                    <a href="https://discord.gg/Cz95wV44nA"><h2 class="text-5xl font-quattrocento text-primary-100 hover:text-primary-200">In our discord.</h2></a>
                </div>
            </div>
            
            <div data-aos="fade-up">
                <img class="z-10 skew-y-12 mr-20" src="img\external-brand-marketing-strategy-wanicon-lineal-wanicon.png">
            </div>
        </div>
    </div>
    <div class="w-screen py-8 pl-12">
        <div class="mt-48 flex flex-row justify-between items-center">
            <img class="col-start-1 row-start-1" src="img\external-trophy-award-and-success-wanicon-lineal-wanicon.png">
            <div class="text-center justify-center w-full"  data-aos="fade-up">
                <h1 class="text-6xl font-bold font-syne">Make your<br> mark in our<br> competitions.</h1>
                <h2 class="text-5xl font-quattrocento text-primary-700 hover:text-primary-500"><a href="/competitions">See what's on right now</a></h2>
            </div>
        </div>
    </div>
</div>
>>>>>>> master
