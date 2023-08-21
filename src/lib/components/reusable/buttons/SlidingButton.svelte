<script lang="ts">
    // Use onMount to access and modify the element's style after it's bound
    import { onMount } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';
    export let onClickFunction: MouseEventHandler<HTMLButtonElement> = (() => {});
    export let buttonType:string = "button";
    // store the requred values of the button in variables
    export let buttonText: string;
    export let hasFill:Boolean = false;
    // when using the component, the developer can set custom values for any of these, but these are the default values.
    export let textSize: number = 20;
    export let marginTop: number = 15;
    export let paddingX: number = 10;
    export let paddingY: number = 5;
    export let borderRadius: number = 10;
    export let marginRight: number = 15;
    export let href:string|null = null;
    // declare varaible storing the button element
    let buttonTextElement: HTMLButtonElement | HTMLAnchorElement;
    // define the styles using the variables
    const buttonStyles = {
        fontSize: `${textSize}px`,
        marginTop: `${marginTop}px`,
        paddingRight: `${paddingX}px`,
        paddingLeft: `${paddingX}px`,
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
        borderRadius: `${borderRadius}px`,
        marginRight: `${marginRight}px`
    }

    onMount(() => {
        // Make sure buttonTextElement is defined before accessing its style property
        if (buttonTextElement) {
            // assign the styles we defined earliers into the element.style
            Object.assign(buttonTextElement.style, buttonStyles);
            
        }
    });
</script>

{#if buttonType === "button"}
    <button on:click={onClickFunction} bind:this={buttonTextElement} class="{hasFill ? 'bg-dark dark:bg-light text-light hover:text-dark dark:text-dark dark:hover:text-light' : 'text-dark hover:text-light dark:text-light dark:hover:text-dark'} group overflow-hidden relative uppercase w-[auto] px-[15px] h-[auto] py-[10px] border-2 border-dark dark:border-light flex justify-center items-center rounded-[10px] ">
        <div id="buttonText" class="buttonText z-[2] font-display font-medium">{buttonText}</div>
        <div class="introButtonHover group-hover:top-0 z-[0] ease-out duration-[200ms] absolute w-full h-full {hasFill ? 'bg-light dark:bg-dark' : 'bg-dark dark:bg-light'}  top-[100%]"></div>
    </button>
{:else}
    <a href={href} bind:this={buttonTextElement} class="{hasFill ? 'bg-dark dark:bg-light text-light hover:text-dark dark:text-dark dark:hover:text-light' : 'text-dark hover:text-light dark:text-light dark:hover:text-dark'} group overflow-hidden relative uppercase w-[auto] px-[15px] h-[auto] py-[10px] border-2 border-dark dark:border-light flex justify-center items-center rounded-[10px] ">
        <div id="buttonText" class="buttonText z-[2] font-display font-medium">{buttonText}</div>
        <div class="introButtonHover group-hover:top-0 z-[0] ease-out duration-[200ms] absolute w-full h-full {hasFill ? 'bg-light dark:bg-dark' : 'bg-dark dark:bg-light'}  top-[100%]"></div>
    </a>
{/if}
    
