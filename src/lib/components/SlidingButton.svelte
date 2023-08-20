<script lang="ts">
    export let onClickFunction: MouseEventHandler<HTMLButtonElement>;

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
    // declare varaible storing the button element
    let buttonTextElement: HTMLButtonElement;
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

    // Use onMount to access and modify the element's style after it's bound
    import { onMount } from 'svelte';

    onMount(() => {
        // Make sure buttonTextElement is defined before accessing its style property
        if (buttonTextElement) {
            // assign the styles we defined earliers into the element.style
            Object.assign(buttonTextElement.style, buttonStyles);
            
        }
    });
</script>


{#if hasFill}
    <button on:click={onClickFunction} bind:this={buttonTextElement} class="group overflow-hidden relative uppercase w-[auto] px-[15px] h-[auto] bg-dark dark:bg-light py-[10px] border-2 border-dark dark:border-light flex justify-center items-center rounded-[10px] text-light dark:text-dark hover:text-dark dark:hover:text-light">
        <div id="buttonText" class="buttonText z-[2] font-display font-medium">{buttonText}</div>
        <div class="introButtonHover group-hover:top-0 z-[0] ease-out duration-[200ms] absolute w-full h-full bg-light dark:bg-dark top-[100%]"></div>
    </button>
{:else}
    <button bind:this={buttonTextElement} class="group overflow-hidden relative uppercase w-[auto] px-[15px] h-[auto] py-[10px] border-2 border-dark dark:border-light flex justify-center items-center rounded-[10px] text-dark dark:text-light hover:text-light dark:hover:text-dark">
        <div id="buttonText" class="buttonText z-2 font-display font-medium">{buttonText}</div>
        <div class="introButtonHover group-hover:top-0 z-[-1] ease-out duration-[200ms] absolute w-full h-full bg-dark dark:bg-light top-[100%]"></div>
    </button>
{/if}