<script>
	import CopyRightBar from "./CopyRightBar.svelte";
    import FooterButton from "./FooterButton.svelte";
    import NavBar from "./NavBar.svelte";
    let SignedIn = true;
</script>
<div class="footerDummy relative w-full h-[75vh] z-[2] pointer-events-none"></div>
<div class="footer overflow-hidden h-[75vh] w-full fixed z-[1] bottom-0 flex justify-between items-center  mt-[150px] bg-dark dark:bg-light">
    <div class="companyDesWrapper ml-[80px] relative">
        <div class="footerLogo w-[500px] h-[100px] bg-logoDarkMode dark:bg-footerLogoLightMode bg-contain bg-no-repeat bg-center"></div>
        <div class="footerComParagraph text-[25px] mt-[25px] font-bold font-display text-light dark:text-dark">A UK-based NGO focussed on creating <br> a unique digital platform to allow creators <br> to showcase their work and collaborate on <br> projects together.</div>
    </div>
    <div class="footerLinksWrapper relative flex mr-[80px]">
        <div class="footerLinksContainer mr-[50px] min-h-[10vh]">
            <div class="title text-light dark:text-dark uppercase font-display font-extrabold mb-[10px]">Platform</div>
            <FooterButton text={"Home"}/>
            <FooterButton text={"projetcs"}/>
            <FooterButton text={"articles"}/>
            <FooterButton text={"competitions"}/>
        </div>
        <div class="footerLinksContainer min-h-[10vh]">
            <div class="title text-light dark:text-dark uppercase font-display font-extrabold mb-[10px]">Account</div>
            {#if SignedIn}
                <FooterButton text={"dashboard"}/>
                <FooterButton text={"Posts"}/>
                <FooterButton text={"settings"}/>
            {:else}
                <FooterButton text={"Sign Up/ Log In"}/>
            {/if}
        </div>
    </div>
    <CopyRightBar />
</div>