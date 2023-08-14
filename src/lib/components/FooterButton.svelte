<script lang="ts">
    export let href:string = "#";
    export let text:string = "button";
</script>

<a href={href} class="group rounded-[10px] overflow-hidden cursor-none text-dark dark:text-light hover:text-light dark:hover:text-dark w-auto relative flex justify-between items-center">
    <div class="footerLink group-hover:translate-x-[10px]  cursor-none duration-200 ease-out relative uppercase font-display text-[20px] font-medium w-auto h-full py-[10px] flex justify-start items-center z-[2]">{text}</div>
    <div class="linkHover w-full ease-out duration-200 rounded-[50px] group-hover:rounded-[10px] absolute h-[0%] group-hover:h-[100%] bg-dark dark:bg-light "></div>
    <div class="linkArrow group-hover:translate-x-[-10px] relative right-0 text-[35px] leading-0 mt-[-10px] z-[1] opacity-0 group-hover:opacity-100 duration-200 ease-out ml-[30px]">→</div>
</a>

