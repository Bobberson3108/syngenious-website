<script lang="ts">
    export let href:string = "#";
    export let text:string = "button";
</script>

<a href={href} class="group rounded-[5px] overflow-hidden cursor-none text-dark dark:text-light hover:text-light dark:hover:text-dark w-auto relative flex justify-between items-center">
    <div class="footerLink group-hover:translate-x-[10px]  cursor-none duration-200 ease-out relative uppercase font-display deskBreak:text-[20px] mobile:text-[15px] font-medium w-auto h-full deskBreak:py-[10px] mobile:py-[5px] flex justify-start items-center z-[2]">{text}</div>
    <div class="linkHover w-full ease-out duration-200 rounded-[50px] group-hover:rounded-[5px] opacity-0 group-hover:opacity-100 absolute h-[0%] group-hover:h-[100%] bg-dark dark:bg-light "></div>
    <div class="linkArrow group-hover:translate-x-[-10px] relative right-0 deskBreak:text-[35px] mobile:text-[20px] leading-0 deskBreak:mt-[-10px] mobile:mt-[-5px] z-[1] opacity-0 group-hover:opacity-100 duration-200 ease-out ml-[30px]">→</div>
</a>

