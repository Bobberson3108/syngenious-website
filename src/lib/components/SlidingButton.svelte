<script lang="ts">
    // store the requred values of the button in variables
    export let buttonText: string;
    // when using the component, the developer can set custom values for any of these, but these are the default values.
    export let textSize: number = 20;
    export let marginTop: number = 15;
    export let paddingX: number = 10;
    export let paddingY: number = 5;
    export let borderRadius: number = 10;
    // declare varaible storing the button element
    let buttonTextElement: HTMLDivElement;
    // define the styles using the variables
    const buttonStyles = {
        fontSize: `${textSize}px`,
        marginTop: `${marginTop}px`,
        paddingRight: `${paddingX}px`,
        paddingLeft: `${paddingX}px`,
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`,
        borderRadius: `${borderRadius}px`
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

<div bind:this={buttonTextElement} class="introCtaButton overflow-hidden relative uppercase w-[auto] px-[15px] h-[auto] py-[10px] border-2 border-dark dark:border-light flex justify-center items-center rounded-[10px] text-dark dark:text-light hover:text-light dark:hover:text-dark">
    <div id="buttonText" class="buttonText z-2 font-display font-medium">{buttonText}</div>
    <div class="introButtonHover z-[-1] ease-out duration-[200ms] absolute w-full h-full bg-dark dark:bg-light top-[100%]"></div>
</div>

<style lang="postcss">
    /* Hover interaction */
    .introCtaButton:hover > .introButtonHover {
        top: 0%;
    }
</style>