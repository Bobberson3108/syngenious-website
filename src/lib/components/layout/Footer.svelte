<script>
    import FooterButton from "../reusable/buttons/FooterButton.svelte";
    let SignedIn = true;
</script>
<div class="footerDummy relative w-[full] dark:border-footerDarkLine border-t-[0.5px] deskBreak:h-[50vh] mobile:h-[70vh] z-[2] pointer-events-none">
    
</div>
<div class="footer overflow-hidden secondDeskBreakpoint:pt-[0] mobile:pt-[10vw] deskBreak:h-[50vh] mobile:h-[70vh] w-full fixed z-[1] bottom-0 flex secondDeskBreakpoint:flex-row mobile:flex-col secondDeskBreakpoint:justify-between mobile:justify-start items-center  mt-[150px] bg-footerlight dark:bg-footerDark">
    <div class="companyDesWrapper secondDeskBreakpoint:ml-[50px] mobile:ml-[0vw] firstDeskBreakpoint:block secondDeskBreak:block deskBreak:block mobile:hidden relative">
        <div class="footerLogo secondDeskBreakpoint:block mobile:hidden secondDeskBreakpoint:w-[500px] h-[100px] mobile:w-[80vw] bg-logoLightMode dark:bg-logoDarkMode bg-contain bg-no-repeat bg-center"></div>
        <div class="footerComParagraph secondDeskBreakpoint:block mobile:hidden text-[25px] mt-[25px] font-bold font-display text-dark dark:text-light">Creators need a collaborative, social,<br>and innovative digital platform.<br><a href="." class="underline opacity-[0.75] font-bold cursor-none">Come build one with us</a></div>
    </div>
    <div class="footerLinksWrapper relative flex secondDeskBreakpoint:flex-row deskBreak:flex-row mobile:flex-col deskBreak:mr-[0px] deskBreak:ml-[0] mobile:ml-[-100px]">
        <div class="footerLinksContainer mr-[50px] min-h-[10vh]">
            <div class="title text-dark dark:text-light uppercase font-display font-extrabold deskBreak:mb-[10px] mobile:mb-[5px]">Navigation</div>
            <FooterButton text={"Home"}/>
            <FooterButton text={"projetcs"}/>
            <FooterButton text={"Events"}/>
            <FooterButton text={"competitions"}/>
        </div>
        <div class="footerLinksContainer deskBreak:block mobile:hidden mr-[50px] min-h-[10vh]">
            <div class="title text-dark dark:text-light  uppercase font-display deskBreak:mt-[0px] mobile:mt-[10px] font-extrabold deskBreak:mb-[10px] mobile:mb-[5px]">Account</div>
            {#if SignedIn}
                <FooterButton text={"dashboard"}/>
                <FooterButton text={"Posts"}/>
                <FooterButton text={"profile"}/>
                <FooterButton text={"settings"}/>
            {:else}
                <FooterButton text={"Sign Up/ Log In"}/>
            {/if}
        </div>
        <div class="footerLinksContainer deskBreak:mr-[50px] mobile:mr-[20px] min-h-[10vh]">
            <div class="title text-dark dark:text-light uppercase font-display deskBreak:mt-[0px] mobile:mt-[20px] font-extrabold deskBreak:mb-[10px] mobile:mb-[5px]">Platform</div>
            <FooterButton text={"Terms"}/>
            <FooterButton text={"Privacy"}/>
            <FooterButton text={"Account Info"}/>
            <FooterButton text={"Our Rules"}/>
        </div>
    </div>
</div>


<style lang="postcss">

</style>