<script lang="ts">
    import { onMount } from 'svelte';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    onMount(() => {
        AOS.init();
        AOS.refresh();
    });
</script>

<h1 class="font-syne font-bold w-full text-center text-3xl sm:text-4xl md:text-5xl mb-10 mt-3 text-primary-500 dark:text-white" data-aos="fade-up">Competitions</h1>

<div class="px-10 py-5">
    <h2 class="font-syne font-bold w-full text-2xl sm:text-3xl md:text-4xl mb-10 mt-3 text-primary-400 dark:text-white" data-aos="fade-up" data-aos-delay=50>Past Competitions</h2>
    <div class="flex flex-col sm:flex-row w-full dark:text-grey-300 rounded-sm p-3 border-[3px]" data-aos="fade-up" data-aos-delay=100>
        <div class="w-full sm:w-1/2 h-full mb-4 sm:mb-0 sm:flex sm:justify-center">
            <img src="img\external-magic-fairytale-wanicon-lineal-wanicon.png" class="w-2/3 sm:w-full mx-auto sm:mx-0 max-w-lg dark:invert"/>
        </div>
        <div class="flex flex-col w-full sm:w-1/2 h-full px-4 sm:px-0">
            <h2 class="font-syne text-center h-full font-semibold text-2xl sm:text-3xl md:text-4xl mb-4">DREAMS</h2>

            <div class="p-4">
                <p class="mb-2">
                    The theme for the art and music competitions is dreams.
                </p>

                <p class="mb-2">The winners of these will be decided by a community vote, based upon: </p>
                <ul class="list-none list-inside font-quattrocento mb-2 text-primary-500 dark:text-primary-200 font-semibold">
                    <li>- Creativity</li>
                    <li>- Quality</li>
                    <li>- Originality</li>
                </ul>

                <p class="mb-3">Both submissions should be accompanied by a brief description. Composition up to 5 minutes long submitted as an audio file. £5 Amazon Voucher prize for each competition if 5 or more people enter.</p>

                <p class="font-bold text-primary-600 dark:text-primary-400">Entries to be submitted by Friday 14th April. <br>Winners announched on Friday 21st April.</p>

<div class="w-auto flex flex-col items-center my-4 space-y-4">
    <a href="/competitions/enter?competition=art"
    class="w-full text-center text-primary-600 dark:text-primary-100 hover:text-primary-100 text-2xl font-syne p-3 hover:bg-primary-800 h-full drop-shadow-sm">
        Enter Art Competition
    </a>

    <a href="/competitions/enter?competition=music"
        class="w-full text-center text-primary-600 dark:text-primary-100 hover:text-primary-100 text-2xl font-syne p-3 hover:bg-primary-800 h-full drop-shadow-sm">
        Enter Music Competition
    </a>
</div>




            </div>
        </div>
    </div>
    <div class="dark:text-grey-300 p-3 border-[3px] border-t-0" data-aos="fade-up" data-aos-delay=150>
        <h2 class="font-syne text-center font-semibold text-2xl sm:text-3xl md:text-4xl mb-4">CODING COMPETITION</h2>
        <div class="flex flex-col space-y-3 sm:flex-row sm:space-x-3 font-semibold text-lg">
            <div>
                <img src="/img/external-coding-back-to-school-wanicon-lineal-wanicon.png" class="w-2/3 sm:w-full mx-auto sm:mx-0 max-w-lg dark:invert mb-2"/>
                <p class="text-center">A new coding challenge is released daily</p>
            </div>
            <div>
                <img src="img\external-schedule-online-learning-wanicon-solid-wanicon.png" class="w-2/3 sm:w-full mx-auto sm:mx-0 max-w-lg dark:invert mb-2"/>
                <p class="text-center">Problems get more challenging each day</p>
            </div>
            <div>
                <img src="img\external-celebration-award-and-success-wanicon-lineal-wanicon.png" class="w-2/3 sm:w-full mx-auto sm:mx-0 max-w-lg dark:invert mb-2"/>
                <p class="text-center">Leaderboards show who finished the fastest</p>
            </div>
        </div>
    </div>

</div>