<script lang="ts">

    // dropdown import and variables
    import DropDown from "./DropDown.svelte";

    // variables to store titles, etc.
    export let sectionTitle:string = "Section Title";
    // let svelte knwo whether this section has buttons
    export let buttonsArePresent:boolean = false;
    export let titleOne: string = "Title One HERE";
    export let titleTwo: string = "Title Two HERE";
    export let titleThree: string = "Title Three HERE";
    export let titleFour: string = "Title Four HERE";
    export let paragraphOne: string = "Write your paragraph here";
    export let paragraphTwo: string = "Write your paragraph here";
    export let paragraphThree: string = "Write your paragraph here";
    export let paragraphFour: string = "Write your paragraph here";
    // variables for styling
    export let marginTop:number = 20;
    export let marginBottom:number = 20;
    let sectionElement:HTMLElement;
    const sectionStyles = {
        paddingTop: `${marginTop}px`,
        paddingBottom: `${marginBottom}px`
    }

    import { onMount } from "svelte";

    onMount(() => {
        Object.assign(sectionElement.style, sectionStyles);
    })
</script>

<section bind:this={sectionElement} class="valueOffer bg-light dark:bg-dark z-[5] w-full relative">
    <div class="ourValuesWrapper relative flex flex-col justify-start items-center">
        <h1 class="regularDesk:text-header firstDeskBreakpoint:text-header secondDeskBreakpoint:text-[75px] deskBreak:text-[75px] mobile:text-[10vw] uppercase font-display font-normal select-none text-dark dark:text-light">{sectionTitle}</h1>
        <!--||||||||||||||||||||||||||||||||||||||||||||||| DropDowns |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
        <div class="valueTabsWrapper max-w-[80em] flex flex-col justify-center items-center">
            <!--|||||||||||||||||||||||||||||||||||||||||||||||  DropDown Rows  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
            <div class="valueDropDownWrapperContainer regularDesk:mb-[20px] secondDeskBreakpoint:mb-[20px] deskBreak:mb-[0px] mobile:mb-[0] flex regularDesk:flex-row secondDeskBreakpoint:flex-row deskBreak:flex-col mobile:flex-col justify-between items-start w-[auto] h-[auto]">
                <!--DropDowns------------------------------------------------------------------------------------------------->
                <DropDown title={titleOne} buttonText={"Join the community"} paragraph={paragraphOne} buttonsPresent={buttonsArePresent}/>
                <DropDown title={titleTwo} buttonText={"Create A Project"} paragraph={paragraphTwo} buttonsPresent={buttonsArePresent}/>
            </div>
            <div class="valueDropDownWrapperContainer regularDesk:mb-[20px] secondDeskBreakpoint:mb-[20px] deskBreak:mb-[0px] mobile:mb-[0] flex regularDesk:flex-row secondDeskBreakpoint:flex-row deskBreak:flex-col mobile:flex-col justify-between items-start w-[auto] h-[auto]">
                <!--DropDowns------------------------------------------------------------------------------------------------->
                <DropDown title={titleThree} buttonText={"see competitions"} paragraph={paragraphThree} buttonsPresent={buttonsArePresent}/>
                <DropDown title={titleFour} buttonText={"see latest events"} paragraph={paragraphFour} buttonsPresent={buttonsArePresent}/>
                
            </div>
        </div>
        
    </div>
</section>