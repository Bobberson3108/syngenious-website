<script lang="ts">
    export let buttonText: string;
    export let textSize: number;
    let buttonTextElement: HTMLDivElement;

    // Use onMount to access and modify the element's style after it's bound
    import { onMount } from 'svelte';

    onMount(() => {
        // Make sure buttonTextElement is defined before accessing its style property
        if (buttonTextElement) {
            buttonTextElement.style.fontSize = textSize + "px";
        }
    });
</script>

<div class="introCtaButton overflow-hidden relative uppercase w-[auto] px-[15px] h-[auto] py-[10px] border-2 border-dark dark:border-light flex justify-center items-center rounded-[10px] mt-[35px] text-dark dark:text-light hover:text-light dark:hover:text-dark">
    <div bind:this={buttonTextElement} id="buttonText" class="buttonText z-2 font-display font-medium">{buttonText}</div>
    <div class="introButtonHover z-[-1] ease-out duration-[200ms] absolute w-full h-full bg-dark dark:bg-light top-[100%]"></div>
</div>

<style lang="postcss">
    .introCtaButton:hover > .introButtonHover {
        top: 0%;
    }
</style>