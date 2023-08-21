<script lang="ts">
	import SlidingButton from "./buttons/SlidingButton.svelte";
    import { onMount } from "svelte";
    export let title:string;
    export let paragraph:string;
    export let buttonText:string;
    // let svelte know if there is a button on this dropdown
    export let buttonsPresent:boolean = false;
    
    let windowWidth:number;
    onMount(() => {
        windowWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            windowWidth = window.innerWidth;
        })
    })
</script>

<div class="valuesDropdown deskBreak:mr-[10px] deskBreak:ml-[10px] w-[600px] regularDesk:w-[600px] deskBreak:w-[600px] mobile:w-[80vw] regularDesk:h-[110px] deskBreak:h-[110px] mobile:h-[16vw] regularDesk:mt-[0] deskBreak:mt-[20px] mobile:mt-[5vw] regularDesk:hover:h-[335px] deskBreak:hover:h-[335px] mobile:hover:h-auto transition-all ease-out duration-300 overflow-hidden deskBreak:rounded-[20px] mobile:rounded-[10px] relative deskBreak:border-2 mobile:border border-dark dark:border-light deskBreak:px-[30px] mobile:px-[4vw] regularDesk:py-[22.5px] deskBreak:py-[22.5px] mobile:py-[4vw] flex flex-col justify-start items-start">
    <div class="dropDownTop w-full flex items-center justify-between">
        <h3 class="regularDesk:text-[40px] deskBreak:text-[40px] mobile:text-[5vw] uppercase font-display font-bold text-dark dark:text-light">{title}</h3>
        <div class="dropDownPlusWrapper relative deskBreak:w-[50px] mobile:w-[25px] deskBreak:h-[50px] mobile:h-[25px] bg-dark dark:bg-light flex items-center justify-center deskBreak:rounded-[10px] mobile:rounded-[5px]">
            <div class="dropDownCrossLine absolute deskBreak:w-[3px] mobile:w-[1.5px] deskBreak:h-[30px] mobile:h-[15px] bg-light dark:bg-dark rounded-full"></div>
            <div class="dropDownCrossLine absolute deskBreak:w-[30px] mobile:w-[15px] deskBreak:h-[3px] mobile:h-[1.5px] bg-light dark:bg-dark rounded-full"></div>
        </div>
    </div>
    <p class="font-mono text-dark dark:text-light tracking-[0px] text-[19px] deskBreak:text-[19px] mobile:text-[3.5vw] leading-[1.1] deskBreak:mt-[25px] mobile:mt-[3.5vw]">{paragraph}</p>
    <!-- Basic logic statement that says that if buttonsPresent = true, the display SlidingButton -->
    {#if buttonsPresent}
        
        {#if windowWidth >= 650}
            <SlidingButton hasFill buttonText={buttonText} textSize={20} marginTop={20} paddingX={10} paddingY={5}/>
        {:else}
            <SlidingButton hasFill buttonText={buttonText} textSize={15} marginTop={20} paddingX={10} paddingY={5}/>
        {/if}
    {/if}
</div>

