<script lang="ts">
    export let title:string;
    export let paragraph:string;
    export let buttonText:string;
    
</script>

<div class="valuesDropdown w-[600px] h-[110px] mx-[10px] hover:h-[335px] ease-out duration-300 overflow-hidden rounded-[20px] relative border-2 border-dark dark:border-light px-[30px] py-[22.5px] flex flex-col justify-start items-start">
    <div class="dropDownTop w-full flex items-center justify-between">
        <h3 class="text-[40px] uppercase font-display font-bold text-dark dark:text-light">{title}</h3>
        <div class="dropDownPlusWrapper relative w-[50px] h-[50px] bg-dark dark:bg-light flex items-center justify-center rounded-[10px]">
            <div class="dropDownCrossLine absolute w-[3px] h-[30px] bg-light dark:bg-dark rounded-full"></div>
            <div class="dropDownCrossLine absolute w-[30px] h-[3px] bg-light dark:bg-dark rounded-full"></div>
        </div>
    </div>
    <p class="font-mono text-dark dark:text-light tracking-[-0.5px] text-[19px] leading-[1.1] mt-[25px]">{paragraph}</p>
    <div class="introCtaButton overflow-hidden relative uppercase font-display font-medium text-[20px] w-[auto] px-[15px] h-[60px] border-2 border-dark dark:border-light flex justify-center items-center rounded-[10px] mt-[25px] text-dark dark:text-light hover:text-light dark:hover:text-dark">
        <h3 class="z-2">{buttonText}</h3>
        <div class="introButtonHover z-[-1] ease-out duration-[200ms] absolute w-full h-full bg-dark dark:bg-light top-[100%]"></div>
    </div>
</div>

<style lang="postcss">
    .introCtaButton:hover > .introButtonHover {
        top: 0%;
    }
</style>