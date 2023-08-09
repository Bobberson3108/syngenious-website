<script lang="ts">

    // dropdown import and variables
    import DropDown from "./DropDown.svelte";
    // paragraphs for dropdown. Change these as you want
    const communityParagraph:string = "At Syngenious, an exceptional community of like-minded creators thrives – bound by passion and purpose. Engage with diverse talents, share insights, and amplify creativity together. In this inspiring space, passion and hard work thrives.";
    const projectsParagraph:string = "Syngenious is home to ground-breaking projects, where collaboration fuels innovation. Engage with ambitious creators, join forces to tackle exciting challenges, and bring amazing ideas to life. Our platform ignites the spark of collective creativity.";
    const competitionsParagraph:string = "Syngenious thrives on spirited competitions, fueling the soul of our community. Unleash your talent, embrace friendly rivalry, and seize the chance to win enticing prizes. Join our community today and take part in our competitions.";
    const eventsParagraph:string = "Syngenious hosts a dynamic array of events, both virtual and real-life, spanning programming, mathematics, and science. Engage in insightful discussions, network with experts, be at the forefront of innovation, and gain more knowledge.";

    // variables to store titles, etc.
    export let sectionTitle:string = "Section Title";
    // let svelte knwo whether this section has buttons
    export let buttonsArePresent:boolean = false;

    // variables for styling
    export let marginTop:number = 20;
    let sectionElement:HTMLElement;
    const sectionStyles = {
        marginTop: `${marginTop}px`
    }

    import { onMount } from "svelte";

    onMount(() => {
        Object.assign(sectionElement.style, sectionStyles);
    })
</script>

<section bind:this={sectionElement} class="valueOffer w-full relative">
    <div class="ourValuesWrapper relative flex flex-col justify-start items-center">
        <h1 class="text-header uppercase font-display font-normal select-none text-dark dark:text-light">{sectionTitle}</h1>
        <!--||||||||||||||||||||||||||||||||||||||||||||||| DropDowns |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
        <div class="valueTabsWrapper max-w-[80em] flex flex-col justify-center items-center">
            <!--|||||||||||||||||||||||||||||||||||||||||||||||  DropDown Rows  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
            <div class="valueDropDownWrapperContainer mb-[20px] flex justify-between items-start w-[auto] h-[auto]">
                <!--DropDowns------------------------------------------------------------------------------------------------->
                <DropDown title={"Community"} buttonText={"Join the community"} paragraph={communityParagraph} buttonsPresent={buttonsArePresent}/>
                <DropDown title={"Projects"} buttonText={"Create A Project"} paragraph={projectsParagraph} buttonsPresent={buttonsArePresent}/>
            </div>
            <div class="valueDropDownWrapperContainer flex justify-between items-start w-[auto] h-[auto]">
                <!--DropDowns------------------------------------------------------------------------------------------------->
                <DropDown title={"competitions"} buttonText={"see competitions"} paragraph={competitionsParagraph} buttonsPresent={buttonsArePresent}/>
                <DropDown title={"events"} buttonText={"see latest events"} paragraph={eventsParagraph} buttonsPresent={buttonsArePresent}/>
            </div>
        </div>
        
    </div>
</section>