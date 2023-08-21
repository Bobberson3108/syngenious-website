<script lang="ts">
    import { onMount } from "svelte";
	import SlidingButton from "$lib/components/reusable/buttons/SlidingButton.svelte";
	import WhatWeOffer from "$lib/components/reusable/WhatWeOffer.svelte";
	import OurValues from "$lib/components/reusable/OurValues.svelte";

    // declare variables for the percentage of mouse position and the viewport width
    let mouseXPercentage:number;
    let viewportWidth:number;

    // run the onMount function
    onMount(() => {
        // Attach the event listener to the 'resize' event to get the updated viewport width
        window.addEventListener('resize', handleViewportWidthChange);
        // Call the function initially to get the viewport width on page load
        handleViewportWidthChange();
        // Attach the event listener to the 'mousemove' event to run the headerRotateAnimation
        window.addEventListener('mousemove', headerRotateAnimation);
        // call the header fading function on load, in case the scroll position of the user is lower than the top, so the effect is still in place

        // run the header fading function on scroll
        window.addEventListener('scroll', () => handleScroll(headerContentWrapperElement, 0.5));
        asteriskTop.addEventListener('mouseenter', () => hoverTester(asteriskTop, false));
        asteriskBottomRight.addEventListener('mouseenter', () => hoverTester(asteriskBottomRight,true));
        asteriskBottomLeft.addEventListener('mouseenter', () => hoverTester(asteriskBottomLeft, false));
    })

    // function to handle viewport change, so you always get the updated viewport width in px
    function handleViewportWidthChange() {
        // store the viewport width in viewportWidth variable
        viewportWidth = window.innerWidth;
    }

    // -------------------------------------------------------- HEADER MOUSEMOVE ANIMATION -------------------------------------------------------- //

    // declare all the required HTML elements required for the header 'mousemove' animation
    let headerContentWrapperElement:HTMLDivElement;
    let headerLineTop:HTMLDivElement;
    let headerLineThird:HTMLDivElement;

    // declare all the required numerical values so they can be changed later with ease
    let desiredAngleRange:number = 2.5;
    let desiredMoveRange:number = 10;
    
    // variables to store the angle and translation values
    let angleHeader:number;
    let headerLineMove:number;

    // run the header animation function
    function headerRotateAnimation(event:MouseEvent) {
        // store the percentage of the mouse position out of the viewport width in mouseXPercentage variable
        mouseXPercentage = (event.clientX)/(viewportWidth);
        // store the angle to be applied in the transformation. It factors in the desiredAngleRange variable, which is the range at which we want the element to rotate
        angleHeader = mouseXPercentage*desiredAngleRange - (desiredAngleRange/2);
        // rotate the headerContentWrapperElement divElement in the y-axis by the value of the angleHeader variable
        headerContentWrapperElement.style.transform = `rotateY(${angleHeader}deg)`;
        // store the value to transform the first and third text line in header inside the headerLineMove variable 
        headerLineMove = mouseXPercentage*desiredMoveRange - (desiredMoveRange/2);
        //move both desired text lines in the header
        headerLineTop.style.transform = `translate(${headerLineMove}px)`
        headerLineThird.style.transform = `translate(${headerLineMove}px)`
    }

    // -------------------------------------------------------- ASTERISK ROTATE-ON-HOVER FUNCTION -------------------------------------------------------- //

    // declare the variables for the divElements used in the asterisk rotating interaction
    let asteriskTop:HTMLDivElement;
    let asteriskBottomLeft:HTMLDivElement;
    let asteriskBottomRight:HTMLDivElement;
    // store the respective rotation angles for each asterisk
    let angleTop:number = 0;
    let angleBottomLeft:number = 0;
    let angleBottomRight:number = 0;

    // declare variableS for the elements we need to fade out
    let headerElement:HTMLHeadElement;
    let introParagraphSection:HTMLElement;
    // store a desired offset in a variable. A higher offset means
    let hoverCount:number = 0;
    const hoverThreshold:number = 10;
    const hoverTimeFrame:number = 1000; // 1 second in milliseconds
    let hoverTimeout: NodeJS.Timeout;
    function hoverTester(hoverElement: HTMLElement, direction: boolean) {
        clearTimeout(hoverTimeout);

        hoverCount++;
        if (hoverCount === hoverThreshold && direction === true) {
            hoverElement.style.rotate = `${Math.random() * 360}deg`;
            hoverElement.style.translate = `${randomValue(200,100)}px`
            alert("Slow down you're gonna break the website!!");
            hoverElement.style.opacity = `0`;
            hoverCount = 0; // Reset the counter
        } else if (hoverCount === hoverThreshold && direction === false){
            hoverElement.style.rotate = `${Math.random() * 360}deg`;
            hoverElement.style.translate = `${randomValue(-200,-100)}px`
            alert("Slow down you're gonna break the website!!");
            hoverElement.style.opacity = `0`;
            hoverCount = 0; // Reset the counter
        }

        hoverTimeout = setTimeout(() => {
            hoverCount = 0; // Reset the counter if the time frame elapses
        }, hoverTimeFrame);
    }


    function randomValue(min:number, max:number) {
      return Math.random() * (max - min) + min;
    }

    // -------------------------------------------------------- HEADER (OR ANY OTHER ELEMENT) 'FADE WHEN SCROLLING OUT OF VIEW' FUNCTION -------------------------------------------------------- //

    // Add a new function to handle scroll event for fading out of any element
    function handleScroll(targetElement: HTMLElement, fadingStartPercentage: number) {
        const elementOffsetTop = targetElement.getBoundingClientRect().top;

        // Calculate the fading percentage based on the element's position and fadingStartPercentage
        const fadingPercentage = Math.max(0, Math.min(1, (elementOffsetTop + targetElement.offsetHeight) / (window.innerHeight * fadingStartPercentage)));

        // Set the opacity of the targetElement based on the calculated fading percentage
        targetElement.style.opacity = fadingPercentage.toString();
    }

    // paragraphs for dropdown. Change these as you want
    const communityParagraph:string = "At Syngenious, an exceptional community of like-minded creators thrives – bound by passion and purpose. Engage with diverse talents, share insights, and amplify creativity together. In this inspiring space, passion and hard work thrives.";
    const projectsParagraph:string = "Syngenious is home to ground-breaking projects, where collaboration fuels innovation. Engage with ambitious creators, join forces to tackle exciting challenges, and bring amazing ideas to life. Our platform ignites the spark of collective creativity.";
    const competitionsParagraph:string = "Syngenious thrives on spirited competitions, fueling the soul of our community. Unleash your talent, embrace friendly rivalry, and seize the chance to win enticing prizes. Join our community today and take part in our competitions.";
    const eventsParagraph:string = "Syngenious hosts a dynamic array of events, both virtual and real-life, spanning programming, mathematics, and science. Engage in insightful discussions, network with experts, be at the forefront of innovation, and gain more knowledge.";
    const opportunityParagraph:string = "Rooted in our core, the pursuit of growth is an unending journey. With a commitment to continuous learning and adaptability, we carve intricate pathways for personal and collective advancement. Challenges are not mere obstacles but rather crucial catalysts that propel individuals toward leadership roles within the evolving landscape of tomorrow's triumphs.";
    const collaborationParagraph:string = "The heartbeat of our accomplishments lies in the symphony of collaboration. We have woven unity into the very fabric of our culture. Embracing the rich tapestry of diverse viewpoints ignites the sparks of innovation, propelling us beyond the boundaries of convention to achieve shared victories that resonate in the corridors of time.";
    const opennessParagraph:string = "Transparency forms the bedrock of trust upon which we build. In the spirit of openness, we lay bare our insights, embracing differences with a foundation of mutual respect. This ecosystem of honest exchange and genuine discourse fosters an environment where authenticity and communication flourish, lighting an illuminating path to the summit of shared achievements.";
    const creativityParagraph:string = "The essence of our identity is intricately woven with threads of boundless creativity. We hold aloft the torch of ingenuity, recognizing it as the very essence that fuels transformation. Emerging from the crucible of bold minds, novel ideas breathe life into the tapestry of innovation, and our relentless pursuit of originality becomes the chisel that shapes the world with exceptional, paradigm-shifting solutions.";
</script>

<header bind:this={headerElement} class="header z-[5] relative flex justify-center items-center w-full bg-light dark:bg-dark">
    <div bind:this={headerContentWrapperElement} class="headerContentWrapper uppercase relative block items-center min-w-0">
        <div class="headerLine relative w-full flex regularDesk:justify-between deskBreak:justify-between mobile:justify-start items-center font-display font-medium text-dark dark:text-light text-header regularDesk:text-header firstDeskBreakpoint:text-[6rem] secondDeskBreakpoint:text-[6rem] deskBreak:text-[4rem] mobile:text-[10vw] max-w-[100%] min-w-[50px] mt-[-80px] regularDesk:mt-[-80px] firstDeskBreakpoint:mt-[-70px] secondDeskBreakpoint:mt-[-70px] deskBreak:mt-[-40px] mobile:mt-[-4vw]">
            <div bind:this={asteriskTop} on:mouseenter={() => {angleTop += 180; asteriskTop.style.transform = `rotateZ(${angleTop}deg)`;}} role="presentation" class="headerAsterix regularDesk:flex deskBreak:flex mobile:hidden select-none text-dark ease-out duration-1000 pt-[7.5px]">✹</div>
            <div  bind:this={headerLineTop} class="headerText select-none text-dark dark:text-light">Innovators</div>
            <div class="globeWrapper h-[80px] regularDesk:h-[80px] firstDeskBreakpoint:h-[65px] secondDeskBreakpoint:h-[65px] deskBreak:h-[45px] regularDesk:w-[250px] secondDeskBreakpoint:w-[250px] deskBreak:w-[130px] w-[250px] border-2 border-dark dark:border-light rounded-full regularDesk:flex deskBreak:flex mobile:hidden justify-start items-center overflow-hidden">
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
            </div>
        </div>
        <div class="headerLine relative w-full flex regularDesk:justify-between deskBreak:justify-between mobile:justify-center items-center font-display font-medium text-light text-header regularDesk:text-header firstDeskBreakpoint:text-[6rem] secondDeskBreakpoint:text-[6rem] deskBreak:text-[4rem] mobile:text-[10vw] max-w-[100%] mt-[-80px] regularDesk:mt-[-80px] firstDeskBreakpoint:mt-[-70px] secondDeskBreakpoint:mt-[-70px] deskBreak:mt-[-40px] mobile:mt-[-4vw]">
            <div class="diamondWrapper regularDesk:h-[80px] firstDeskBreakpoint:h-[65px] secondDeskBreakpoint:h-[65px] deskBreak:h-[45px] regularDesk:w-[200px] secondDeskBreakpoint:w-[170px] deskBreak:w-[100px] h-[80px]  w-[167px] border-[2px] mr-[10px] border-dark dark:border-light rounded-full regularDesk:flex deskBreak:flex mobile:hidden justify-end items-center overflow-hidden">
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
            </div>
            <div class="headerText select-none text-dark dark:text-light">need a social</div>
            <div role="presentation" class="headerAsterix select-none text-dark ease-out duration-500 pt-[7.5px] ml-[10px]">&</div>
        </div>
        <div class="headerLine relative w-full flex regularDesk:justify-between deskBreak:justify-between mobile:justify-start items-center font-display font-medium text-light text-header regularDesk:text-header firstDeskBreakpoint:text-[6rem] secondDeskBreakpoint:text-[6rem] deskBreak:text-[4rem] mobile:text-[10vw] max-w-[100%] min-w-[50px] mt-[-80px] regularDesk:mt-[-80px] firstDeskBreakpoint:mt-[-70px] secondDeskBreakpoint:mt-[-70px] deskBreak:mt-[-40px] mobile:mt-[-4vw]">
            <div bind:this={asteriskBottomLeft} on:mouseenter={() => {angleBottomLeft += 180; asteriskBottomLeft.style.transform = `rotateZ(${angleBottomLeft}deg)`;}} role="presentation" class="select-none text-dark dark:text-light transition-all ease-out duration-1000 pt-[7.5px] ml-[-10px] mr-[5px] regularDesk:flex deskBreak:flex mobile:hidden">✺</div>
            <div bind:this={headerLineThird} class="headerText select-none text-dark dark:text-light">collaborative</div>
            <div bind:this={asteriskBottomRight} on:mouseenter={() => {angleBottomRight += 180; asteriskBottomRight.style.transform = `rotateZ(${angleBottomRight}deg)`;}} role="presentation" class="select-none text-dark dark:text-light ease-out duration-1000 pt-[7.5px] mr-[0px] regularDesk:flex deskBreak:flex mobile:hidden">✲</div>
        </div>
        <div class="headerLine relative w-full flex regularDesk:justify-center deskBreak:justify-center mobile:justify-start items-center font-display font-medium text-dark dark:text-light text-header regularDesk:text-header firstDeskBreakpoint:text-[6rem] secondDeskBreakpoint:text-[6rem] deskBreak:text-[4rem] mobile:text-[10vw]  max-w-[100%] min-w-[50px] mt-[-80px] regularDesk:mt-[-80px] firstDeskBreakpoint:mt-[-70px] secondDeskBreakpoint:mt-[-70px] deskBreak:mt-[-40px] mobile:mt-[-4vw]">
            <div role="presentation" class="select-none text-light ease-out duration-500 pt-[7.5px] regularDesk:ml-[-10px] deskBreak:ml-[-10px] mobile:ml-0 mr-[20px] regularDesk:mr-[20px] firstDeskBreakpoint:mr-[15px] secondDeskBreakpoint:mr-[15px] deskBreak:mr-[7.5px] mobile:mr-[3vw] w-[80px] regularDesk:w-[80px] firstDeskBreakpoint:w-[60px] secondDeskBreakpoint:w-[60px] deskBreak:w-[50px] mobile:w-[7.5vw] h-[80px] regularDesk:h-[80px] secondDeskBreakpoint:h-[80px] deskBreak:h-[50px] mobile:h-[7.5vw] bg-starLight dark:bg-star bg-center bg-contain bg-no-repeat"></div>
            <div class="headerText select-none text-dark dark:text-light regularDesk:mr-[0] deskBreak:mr-[0] mobile:mr-[2vw]">space</div>
            <div class="smallHeaderText duration-300 ease-out font-mono text-[20px] ml-[0px] mr-[0px] regularDesk:ml-[10px] deskBreak:ml-[10px] mobile:ml-[0px] regularDesk:text-[20px] firstDeskBreakpoint:text-[15px] secondDeskBreakpoint:text-[15px] deskBreak:text-[10px] mobile:text-[2vw]">Come Build One<br>With Us</div>
        </div>
    </div>
    <div on:click={() => window.scrollTo({top: window.scrollY + 0.8 * window.innerHeight, behavior: 'smooth'})} role="presentation" class="headerScrollPrompt ease-out duration-300 w-[80px] regularDesk:w-[80px] firstDeskBreakpoint:w-[60px] secondDeskBreakpoint:w-[60px] deskBreak:w-[50px] mobile:w-[10vw] h-[120px] absolute regularDesk:bottom-[25px] deskBreak:botom-[25px] mobile:bottom-[-1vh] bg-scrollArrowLight dark:bg-scrollArrow bg-center bg-contain bg-no-repeat animate-bounce"></div>
</header>


<section bind:this={introParagraphSection} role="presentation" class="introParagraphSection overflow-hidden z-[5] py-[150px] bg-light dark:bg-dark relative flex justify-start items-center w-[100%] min-h-[50vh]">
    <div class="introParWrapper relative px-[50px] w-full max-w-[750px] regularDesk:max-w-[1116px] firstDeskBreakpoint:max-w-[850px] secondDeskBreakpoint:max-w-[850px] deskBreak:max-w-[750px] mobile:max-w-full h-auto flex flex-col justify-center items-start font-display regularDesk:text-[58px] firstDeskBreakpoint:text-[45px] secondDeskBreakpoint:text-[45px] deskBreak:text-[40px] mobile:text-[6vw] text-[40px] leading-[1] font-medium text-dark dark:text-light">
        <h1 class="ease-out duration-300">Syngenious is an online space for young innovators to explore their passions, collaborate on ground-breaking projects, and connect with like-minded peers.</h1>
        <SlidingButton buttonText={"Join Us Today"} textSize={22.5} marginTop={25} paddingX={25} paddingY={10} borderRadius={15} hasFill/>
        <div class="bigStarIntro bg-bigStarLight dark:bg-bigStar bg-center bg-contain bg-no-repeat absolute regularDesk:h-[500px] firstDeskBreakpoint:h-[400px] secondDeskBreakpoint:h-[350px] deskBreak:h-[350px] h-[350px] regularDesk:w-[500px] firstDeskBreakpoint:w-[400px] secondDeskBreakpoint:w-[350px] deskBreak:w-[350px] w-[350px] right-[-175px] mt-[-50px]"></div>
    </div>
</section>

<WhatWeOffer sectionTitle="What we offer" marginTop={100} titleOne={"Community"} paragraphOne={communityParagraph} titleTwo={"Projects"} paragraphTwo={projectsParagraph} titleThree={"Competitions"} paragraphThree={competitionsParagraph} titleFour={"Events"} paragraphFour={eventsParagraph} buttonsArePresent/>
<OurValues sectionTitle="Our values" marginTop={200} marginBottom={200} titleOne={"opportunity"} paragraphOne={opportunityParagraph} titleTwo={"collaboration"} paragraphTwo={collaborationParagraph} titleThree={"openness"} paragraphThree={opennessParagraph} titleFour={"creativity"} paragraphFour={creativityParagraph}/>

<style lang="postcss">
    /* styling for the header */
    .header{
        height: 100vh;
        perspective: 650px;
    }
    .headerContentWrapper{
        min-width: 0em;
        min-height: 100px;
        transition: 0.25s ease-out;
    }
    .headerText{
        transition: 0.25s ease-out;
    }
    .headerAsterix{
        text-shadow: 1px 0px 0px #D9DCC9, -1px 0px 0px #D9DCC9, 0px -1px 0px #D9DCC9, 0px 1px 0px #D9DCC9, 1px 1px 0px #D9DCC9, -1px 1px 0px #D9DCC9, 1px -1px 0px #D9DCC9, -1px -1px 0px #D9DCC9;
    }
    .globe{
        flex: 0 0 auto; /* this stops the globes from shrinking when there are too many in the parent div */
        position: relative;
        animation: globeMove 3.5s linear infinite;
    }
    .diamond{
        flex: 0 0 auto; /* this stops the diamonds from shrinking when there are too many in the parent div */
        position: relative;
        animation: diamondMove 3.5s linear infinite;
    }
    @keyframes globeMove{
        0%{
            transform: translateX(0px);
        }

        100%{
            transform: translateX(-73.85px);
        }
    }
    @keyframes diamondMove{
        0%{
            transform: translateX(0px);
        }

        100%{
            transform: translateX(73.85px);
        }
    }
    /* styling for the header */



    /* styling for values section */
</style>