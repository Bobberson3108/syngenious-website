<script>
	import CopyRightBar from "./CopyRightBar.svelte";
import FooterButton from "./FooterButton.svelte";
    import NavBar from "./NavBar.svelte";
    let SignedIn = true;
</script>
<div class="footer overflow-hidden h-[75vh] w-full relative flex justify-between items-center border-t-2 border-dark dark:border-light mt-[150px]">
    <div class="companyDesWrapper ml-[80px] relative">
        <div class="footerLogo w-[500px] h-[100px] bg-logoLightMode dark:bg-logoDarkMode bg-contain bg-no-repeat bg-center"></div>
        <div class="footerComParagraph text-[25px] mt-[25px] font-bold font-display text-dark dark:text-light">A UK-based NGO focussed on creating <br> a unique digital platform to allow creators <br> to showcase their work and collaborate on <br> projects together.</div>
    </div>
    <div class="footerLinksWrapper relative flex mr-[80px]">
        <div class="footerLinksContainer mr-[50px] min-h-[10vh]">
            <div class="title text-dark dark:text-light uppercase font-display font-extrabold mb-[10px]">Platform</div>
            <FooterButton text={"Home"}/>
            <FooterButton text={"projetcs"}/>
            <FooterButton text={"articles"}/>
            <FooterButton text={"competitions"}/>
        </div>
        <div class="footerLinksContainer min-h-[10vh]">
            <div class="title text-dark dark:text-light uppercase font-display font-extrabold mb-[10px]">Account</div>
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