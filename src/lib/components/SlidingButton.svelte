<script lang="ts">
    export let buttonText:string;
    export let textSize:number;
</script>

<div class="introCtaButton overflow-hidden relative uppercase w-[auto] px-[15px] h-[auto] py-[10px] border-2 border-dark dark:border-light flex justify-center items-center rounded-[10px] mt-[35px] text-dark dark:text-light hover:text-light dark:hover:text-dark">
    <h3 id="buttonText" class="buttonText z-2 font-display">{buttonText}</h3>
    <div class="introButtonHover z-[-1] ease-out duration-[200ms] absolute w-full h-full bg-dark dark:bg-light top-[100%]"></div>
</div>

<style lang="postcss">
    .introCtaButton:hover > .introButtonHover {
        top: 0%;
    }
</style>