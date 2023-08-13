<script>
	import CopyRightBar from "./CopyRightBar.svelte";
    import FooterButton from "./FooterButton.svelte";
    let SignedIn = true;
</script>
<div class="footerDummy relative w-[full] h-[50vh] rounded-[75px] z-[2] pointer-events-none outline outline-2 outline-dark dark:outline-light -outline-offset-[50px] ring-[50px] ring-light dark:ring-dark ring-inset">
    
</div>
<div class="footer overflow-hidden h-[50vh] w-full fixed z-[1] bottom-0 flex justify-between items-center  mt-[150px] bg-light dark:bg-dark">
    <div class="companyDesWrapper ml-[120px] relative">
        <div class="footerLogo w-[500px] h-[100px] bg-footerLogoLightMode dark:bg-logoDarkMode bg-contain bg-no-repeat bg-center"></div>
        <div class="footerComParagraph text-[25px] mt-[25px] font-bold font-display text-dark dark:text-light">Creators need a collaborative, social,<br>and innovative digital platform.<br><a href="." class="underline opacity-[0.75] font-bold cursor-none">Come build one with us</a></div>
    </div>
    <div class="footerLinksWrapper relative flex mr-[80px]">
        <div class="footerLinksContainer mr-[50px] min-h-[10vh]">
            <div class="title text-dark dark:text-light uppercase font-display font-extrabold mb-[10px]">Navigation</div>
            <FooterButton text={"Home"}/>
            <FooterButton text={"projetcs"}/>
            <FooterButton text={"Events"}/>
            <FooterButton text={"competitions"}/>
        </div>
        <div class="footerLinksContainer mr-[50px] min-h-[10vh]">
            <div class="title text-dark dark:text-light uppercase font-display font-extrabold mb-[10px]">Account</div>
            {#if SignedIn}
                <FooterButton text={"dashboard"}/>
                <FooterButton text={"Posts"}/>
                <FooterButton text={"profile"}/>
                <FooterButton text={"settings"}/>
            {:else}
                <FooterButton text={"Sign Up/ Log In"}/>
            {/if}
        </div>
        <div class="footerLinksContainer mr-[50px] min-h-[10vh]">
            <div class="title text-dark dark:text-light uppercase font-display font-extrabold mb-[10px]">Platform</div>
            <FooterButton text={"Terms"}/>
            <FooterButton text={"Privacy"}/>
            <FooterButton text={"Account Info"}/>
            <FooterButton text={"Our Rules"}/>
        </div>
    </div>
</div>


<style lang="postcss">

</style>