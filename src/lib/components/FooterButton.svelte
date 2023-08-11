<script lang="ts">
    export let href:string = "#";
    export let text:string = "button";
</script>

<a href={href} class="footerLinkButton cursor-none text-light dark:text-dark hover:text-dark dark:hover:text-light w-auto relative flex justify-between items-center">
    <div class="footerLink  cursor-none duration-200 ease-out relative uppercase font-display text-[20px] font-medium w-auto h-full py-[10px] flex justify-start items-center z-[2]">{text}</div>
    <div class="linkHover w-full ease-out duration-200 absolute bottom-0 h-[2.5%] bg-light dark:bg-dark "></div>
    <div class="linkArrow relative right-0 text-[35px] leading-0 mt-[-10px] z-[1] opacity-0 duration-200 ease-out ml-[30px]">→</div>
</a>

<style lang="postcss">
    :root{
        --light: #D9DCC9;
    }

    .footerLinkButton:hover > .linkHover{
        height: 100%;
    }

    .footerLinkButton:hover > .footerLink{
        transform: translateX(10px);
    }

    .footerLinkButton:hover > .linkArrow{
        opacity: 100%;
        transform: translateX(-10px);
    }
</style>