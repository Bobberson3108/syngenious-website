<script lang="ts">
	import SlidingButton from "./SlidingButton.svelte";

    export let title:string;
    export let paragraph:string;
    export let buttonText:string;
    // let svelte know if there is a button on this dropdown
    export let buttonsPresent:boolean = false;
    
</script>

<div class="valuesDropdown w-[600px] h-[110px] mx-[10px] hover:h-[335px] transition-all ease-out duration-300 overflow-hidden rounded-[20px] relative border-2 border-dark dark:border-light px-[30px] py-[22.5px] flex flex-col justify-start items-start">
    <div class="dropDownTop w-full flex items-center justify-between">
        <h3 class="text-[40px] uppercase font-display font-bold text-dark dark:text-light">{title}</h3>
        <div class="dropDownPlusWrapper relative w-[50px] h-[50px] bg-dark dark:bg-light flex items-center justify-center rounded-[10px]">
            <div class="dropDownCrossLine absolute w-[3px] h-[30px] bg-light dark:bg-dark rounded-full"></div>
            <div class="dropDownCrossLine absolute w-[30px] h-[3px] bg-light dark:bg-dark rounded-full"></div>
        </div>
    </div>
    <p class="font-mono text-dark dark:text-light tracking-[0px] text-[19px] leading-[1.1] mt-[25px]">{paragraph}</p>
    <!-- Basic logic statement that says that if buttonsPresent = true, the display SlidingButton -->
    {#if buttonsPresent}
        <SlidingButton hasFill buttonText={buttonText} textSize={20} marginTop={20} paddingX={10} paddingY={5}/>
    {/if}
</div>

