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
    let comeBuildInnerHTML: string = 'Come Build One<br>With Us';

    let hoverUpdateCount = 0;
    function updateComeBuildInnerHTML() {
        switch (hoverUpdateCount) {
            case 0:
                comeBuildInnerHTML = "Slow down you're<br>gonna break the<br>website";
                break;
            case 1:
                comeBuildInnerHTML = "Seriously, stop<br>hovering over<br>the asterisks";
                break;
            case 2:
                comeBuildInnerHTML = "Now look what<br>you've done";
                break;
        }
        hoverUpdateCount++;
    }

    function hoverTester(hoverElement: HTMLElement, direction: boolean) {
        clearTimeout(hoverTimeout);

        hoverCount++;
        if (hoverCount === hoverThreshold && direction === true) {
            hoverElement.style.rotate = `${Math.random() * 360}deg`;
            hoverElement.style.translate = `${randomValue(200,100)}px`
            updateComeBuildInnerHTML();
            hoverElement.style.opacity = `0`;
            hoverCount = 0; // Reset the counter
        } else if (hoverCount === hoverThreshold && direction === false){
            hoverElement.style.rotate = `${Math.random() * 360}deg`;
            hoverElement.style.translate = `${randomValue(-200,-100)}px`
            updateComeBuildInnerHTML();
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
                {#each Array(5) as _}
                    <svg class="globe relative fill-dark dark:fill-light h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5605 3.41998C13.598 3.41998 3.90046 13.1175 3.90046 25.08C3.90046 37.0423 13.598 46.7399 25.5605 46.7399C37.523 46.7399 47.2206 37.0423 47.2206 25.08C47.2206 13.1175 37.523 3.41998 25.5605 3.41998ZM0.480469 25.08C0.480469 11.2287 11.7092 0 25.5605 0C39.4116 0 50.6406 11.2287 50.6406 25.08C50.6406 38.9313 39.4116 50.1599 25.5605 50.1599C11.7092 50.1599 0.480469 38.9313 0.480469 25.08Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.3603 26.5998H2.7605V23.5598H48.3603V26.5998Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0404 47.8799V2.27988H27.0804V47.8799H24.0404ZM36.4857 25.0798C36.4857 16.8234 33.5165 8.65545 27.6957 3.25481L29.5048 1.30484C35.9712 7.30417 39.1457 16.2363 39.1457 25.0798C39.1457 33.9234 35.9712 42.8555 29.5048 48.855L27.6957 46.9048C33.5165 41.5042 36.4857 33.3363 36.4857 25.0798ZM12.2595 25.0799C12.2595 16.2491 15.3306 7.32165 21.5999 1.3192L23.4394 3.24056C17.8019 8.63816 14.9195 16.8107 14.9195 25.0799C14.9196 33.3491 17.8019 41.5217 23.4395 46.9192L21.5999 48.8405C15.3306 42.838 12.2596 33.9107 12.2595 25.0799Z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5606 11.6203C33.804 11.6203 42.1869 13.1447 47.869 16.3189C48.5104 16.6771 48.74 17.4874 48.3816 18.1287C48.0237 18.7699 47.2131 18.9994 46.5721 18.6412C41.4424 15.7758 33.5711 14.2803 25.5606 14.2803C17.55 14.2803 9.67871 15.7758 4.54916 18.6412C3.90787 18.9994 3.09764 18.7699 2.73941 18.1287C2.38122 17.4874 2.61067 16.6771 3.25196 16.3189C8.93444 13.1447 17.3171 11.6203 25.5606 11.6203ZM25.5606 37.8099C33.804 37.8099 42.1869 36.2853 47.869 33.1112C48.5104 32.753 48.74 31.9427 48.3816 31.3015C48.0237 30.6602 47.2131 30.4308 46.5721 30.7889C41.4424 33.6543 33.5711 35.1499 25.5606 35.1499C17.55 35.1499 9.67871 33.6543 4.54916 30.789C3.90787 30.4307 3.09764 30.6602 2.73941 31.3015C2.38122 31.9427 2.61067 32.753 3.25196 33.1112C8.93444 36.2853 17.3171 37.8099 25.5606 37.8099Z"/>
                    </svg>
                {/each}
                <!-- <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div> -->
            </div>
        </div>
        <div class="headerLine relative w-full flex regularDesk:justify-between deskBreak:justify-between mobile:justify-center items-center font-display font-medium text-light text-header regularDesk:text-header firstDeskBreakpoint:text-[6rem] secondDeskBreakpoint:text-[6rem] deskBreak:text-[4rem] mobile:text-[10vw] max-w-[100%] mt-[-80px] regularDesk:mt-[-80px] firstDeskBreakpoint:mt-[-70px] secondDeskBreakpoint:mt-[-70px] deskBreak:mt-[-40px] mobile:mt-[-4vw]">
            <div class="diamondWrapper regularDesk:h-[80px] firstDeskBreakpoint:h-[65px] secondDeskBreakpoint:h-[65px] deskBreak:h-[45px] regularDesk:w-[200px] secondDeskBreakpoint:w-[170px] deskBreak:w-[100px] h-[80px]  w-[167px] border-[2px] mr-[10px] border-dark dark:border-light rounded-full regularDesk:flex deskBreak:flex mobile:hidden justify-end items-center overflow-hidden">
                {#each Array(5) as _}
                    <svg class="diamond fill-dark dark:fill-light relative h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] ml-[5.5px] mr-[3.5px]" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2161 0.00712483C25.1256 -0.00237494 25.0344 -0.00237494 24.9439 0.00712483L12.1759 1.34727C11.7893 1.38785 11.4374 1.59902 11.208 1.92813L0.272765 17.6145C0.10596 17.848 0.00536249 18.1366 0.00020787 18.4497C6.92465e-05 18.4581 0 18.4665 0 18.475L1.08719e-05 18.4808C0.00132415 18.8286 0.120461 19.1473 0.317693 19.395L24.0236 49.6366C24.2835 49.9682 24.671 50.16 25.08 50.16C25.489 50.16 25.8765 49.9682 26.1364 49.6366L49.8423 19.3951C50.0396 19.1473 50.1585 18.8286 50.16 18.4808V18.475V18.4575C50.1596 18.4352 50.1589 18.413 50.1578 18.3907C50.1418 18.1004 50.0436 17.8333 49.8871 17.6144L38.9519 1.92813C38.7224 1.59902 38.3708 1.38785 37.9841 1.34727L25.2161 0.00712483ZM37.5744 17.0391V16.9524L37.5646 17.0391H37.5744ZM37.608 16.6561H45.8287L38.7582 6.51348L37.608 16.6561ZM36.2819 4.05468L27.0657 3.08732L34.8373 16.7915L36.2819 4.05468ZM23.0943 3.08732L13.8781 4.05468L15.3227 16.7915L23.0943 3.08732ZM11.4017 6.51348L4.33112 16.6561H12.552L11.4017 6.51348ZM4.2651 19.9109L22.3754 43.0139L13.1281 20.0712C13.1068 20.0184 13.0895 19.9648 13.0762 19.9109H4.2651ZM16.5092 19.9109L25.08 43.2046L33.6507 19.9109H33.4223H16.7377H16.5092ZM37.0837 19.9109C37.0706 19.9648 37.0531 20.0184 37.0319 20.0712L27.7846 43.0139L45.8948 19.9109H37.0837ZM25.08 5.2004L31.7937 17.0391H18.3663L25.08 5.2004Z"/>
                    </svg>
                {/each}
                    
                <!-- <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondDeskBreakpoint:h-[55px] deskBreak:h-[35px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondDeskBreakpoint:w-[55px] deskBreak:w-[35px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div> -->
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
            <svg role="presentation" class="select-none ease-out duration-500 stroke-dark dark:stroke-light pt-[7.5px] regularDesk:ml-[-10px] deskBreak:ml-[-10px] mobile:ml-0 mr-[20px] regularDesk:mr-[20px] firstDeskBreakpoint:mr-[15px] secondDeskBreakpoint:mr-[15px] deskBreak:mr-[7.5px] mobile:mr-[3vw] w-[80px] regularDesk:w-[80px] firstDeskBreakpoint:w-[60px] secondDeskBreakpoint:w-[60px] deskBreak:w-[50px] mobile:w-[7.5vw] h-[80px] regularDesk:h-[80px] secondDeskBreakpoint:h-[80px] deskBreak:h-[50px] mobile:h-[7.5vw]" width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75264 38.2481C1.75264 37.9493 1.83675 37.7987 1.97694 37.6672C2.16314 37.4926 2.50703 37.3054 3.12079 37.1158C3.72373 36.9295 4.47819 36.7717 5.41003 36.5904C5.57348 36.5586 5.74182 36.5262 5.91471 36.4929C6.71059 36.3396 7.60311 36.1678 8.56121 35.9521C13.2725 34.8919 19.6495 32.758 26.1943 26.2131C32.7392 19.6683 34.8731 13.2913 35.9334 8.57999C36.149 7.62189 36.3209 6.72936 36.4742 5.93347C36.5075 5.76059 36.5399 5.59226 36.5717 5.42882C36.7529 4.49697 36.9107 3.74251 37.097 3.13957C37.2867 2.52581 37.4739 2.18192 37.6485 1.99571C37.78 1.85553 37.9305 1.77142 38.2293 1.77142C38.5281 1.77142 38.6786 1.85553 38.8101 1.99572C38.9847 2.18193 39.1719 2.52583 39.3616 3.13959C39.5479 3.74253 39.7057 4.49699 39.8869 5.42884C39.9187 5.59231 39.9511 5.76066 39.9844 5.93357C40.1377 6.72944 40.3096 7.62194 40.5252 8.58001C41.5855 13.2913 43.7194 19.6683 50.2643 26.2131C56.8091 32.758 63.1861 34.8919 67.8974 35.9522C68.8554 36.1678 69.7478 36.3396 70.5436 36.4929C70.7166 36.5262 70.885 36.5586 71.0486 36.5904C71.9804 36.7717 72.7349 36.9295 73.3378 37.1158C73.9516 37.3055 74.2954 37.4926 74.4817 37.6673C74.6218 37.7988 74.706 37.9493 74.706 38.2481C74.706 38.5321 74.626 38.6628 74.4898 38.7807C74.2988 38.946 73.9411 39.1213 73.2995 39.2909C72.6713 39.4569 71.8884 39.5894 70.9254 39.7415C70.7948 39.7621 70.6613 39.783 70.525 39.8044C69.6727 39.938 68.7123 40.0886 67.678 40.2878C62.8363 41.2203 56.3203 43.2276 49.7646 49.7833C43.2088 56.3391 41.2015 62.8551 40.269 67.6967C40.0698 68.7311 39.9192 69.6915 39.7856 70.5438C39.7642 70.6801 39.7433 70.8136 39.7227 70.9442C39.5706 71.9072 39.4381 72.6901 39.2721 73.3182C39.1026 73.9599 38.9273 74.3176 38.762 74.5086C38.6441 74.6448 38.5134 74.7247 38.2293 74.7247C37.9575 74.7247 37.8134 74.6459 37.6744 74.4861C37.4907 74.275 37.2994 73.8909 37.1112 73.2297C36.9267 72.5816 36.7735 71.776 36.6013 70.7955C36.5684 70.6081 36.5349 70.4149 36.5005 70.2163C36.3575 69.3922 36.1986 68.4758 36.0002 67.4994C35.0075 62.6126 33.0043 56.0936 26.694 49.7833C20.3838 43.4731 13.8648 41.4699 8.97798 40.4772C8.00161 40.2788 7.08519 40.1199 6.26113 39.9769C6.06255 39.9425 5.86933 39.909 5.68193 39.8761C4.70136 39.7039 3.89575 39.5507 3.24768 39.3662C2.58646 39.178 2.20243 38.9867 1.99125 38.8029C1.83151 38.6639 1.75264 38.5199 1.75264 38.2481Z" stroke-width="2"/>
            </svg>
                
                
            <!-- <div role="presentation" class="select-none text-light ease-out duration-500 pt-[7.5px] regularDesk:ml-[-10px] deskBreak:ml-[-10px] mobile:ml-0 mr-[20px] regularDesk:mr-[20px] firstDeskBreakpoint:mr-[15px] secondDeskBreakpoint:mr-[15px] deskBreak:mr-[7.5px] mobile:mr-[3vw] w-[80px] regularDesk:w-[80px] firstDeskBreakpoint:w-[60px] secondDeskBreakpoint:w-[60px] deskBreak:w-[50px] mobile:w-[7.5vw] h-[80px] regularDesk:h-[80px] secondDeskBreakpoint:h-[80px] deskBreak:h-[50px] mobile:h-[7.5vw] bg-starLight dark:bg-star bg-center bg-contain bg-no-repeat"></div> -->
            <div class="headerText select-none text-dark dark:text-light regularDesk:mr-[0] deskBreak:mr-[0] mobile:mr-[2vw]">space</div>
            <div class="smallHeaderText duration-300 ease-out font-mono text-[20px] ml-[0px] mr-[0px] regularDesk:ml-[10px] deskBreak:ml-[10px] mobile:ml-[0px] regularDesk:text-[20px] firstDeskBreakpoint:text-[15px] secondDeskBreakpoint:text-[15px] deskBreak:text-[10px] mobile:text-[2vw]">
                <!-- Come Build One With Us -->
                {@html comeBuildInnerHTML}
            </div>
        </div>
    </div>
    <!-- <div on:click={() => window.scrollTo({top: window.scrollY + 0.8 * window.innerHeight, behavior: 'smooth'})} role="presentation" class="headerScrollPrompt ease-out duration-300 w-[80px] regularDesk:w-[80px] firstDeskBreakpoint:w-[60px] secondDeskBreakpoint:w-[60px] deskBreak:w-[50px] mobile:w-[10vw] h-[120px] absolute regularDesk:bottom-[25px] deskBreak:botom-[25px] mobile:bottom-[-1vh] bg-scrollArrowLight dark:bg-scrollArrow bg-center bg-contain bg-no-repeat animate-bounce"></div> -->
    <svg on:click={() => window.scrollTo({top: window.scrollY + 0.8 * window.innerHeight, behavior: 'smooth'})} role="presentation" class="headerScrollPrompt stroke-dark dark:stroke-light ease-out duration-4   00 w-[80px] regularDesk:w-[80px] firstDeskBreakpoint:w-[60px] secondDeskBreakpoint:w-[60px] deskBreak:w-[50px] mobile:w-[10vw] h-[120px] absolute regularDesk:bottom-[25px] deskBreak:botom-[25px] mobile:bottom-[-1vh] animate-bounce" width="88" height="134" viewBox="0 0 88 134" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 134C44 128.222 42.8619 122.5 40.6507 117.162C38.4395 111.824 35.1985 106.973 31.1127 102.887C27.0269 98.8015 22.1764 95.5605 16.8381 93.3493C11.4997 91.1381 5.77816 90 0 90" stroke-width="10"/>
        <path d="M44 134C44 128.222 45.1381 122.5 47.3493 117.162C49.5605 111.824 52.8015 106.973 56.8873 102.887C60.9731 98.8015 65.8236 95.5605 71.1619 93.3493C76.5003 91.1381 82.2218 90 88 90" stroke-width="10"/>
        <rect x="41" y="3" width="6" height="106" stroke-width="6"/>
    </svg>
        
</header>


<section bind:this={introParagraphSection} role="presentation" class="introParagraphSection overflow-hidden z-[5] py-[150px] bg-light dark:bg-dark relative flex justify-start items-center w-[100%] min-h-[50vh]">
    <div class="introParWrapper relative px-[50px] w-full max-w-[750px] regularDesk:max-w-[1116px] firstDeskBreakpoint:max-w-[850px] secondDeskBreakpoint:max-w-[850px] deskBreak:max-w-[750px] mobile:max-w-full h-auto flex flex-col justify-center items-start font-display regularDesk:text-[58px] firstDeskBreakpoint:text-[45px] secondDeskBreakpoint:text-[45px] deskBreak:text-[40px] mobile:text-[6vw] text-[40px] leading-[1] font-medium text-dark dark:text-light">
        <h1 class="ease-out duration-300">Syngenious is an online space for young innovators to explore their passions, collaborate on ground-breaking projects, and connect with like-minded peers.</h1>
        <SlidingButton buttonText={"Join Us Today"} textSize={22.5} marginTop={25} paddingX={25} paddingY={10} borderRadius={15} hasFill/>
        <svg class="bigStarIntro stroke-dark dark:stroke-light absolute regularDesk:h-[500px] firstDeskBreakpoint:h-[400px] secondDeskBreakpoint:h-[350px] deskBreak:h-[350px] h-[350px] regularDesk:w-[500px] firstDeskBreakpoint:w-[400px] secondDeskBreakpoint:w-[350px] deskBreak:w-[350px] w-[350px] right-[-175px] mt-[-50px]" width="487" height="487" viewBox="0 0 487 487" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" d="M250.933 435.187C246.166 450.5 243.974 463.244 242.975 472.187C242.958 472.058 242.941 471.93 242.923 471.8C241.675 462.605 239.181 449.528 234.196 433.963C224.226 402.831 204.292 361.751 164.444 321.903C124.596 282.056 83.5168 262.121 52.3847 252.151C36.82 247.166 23.7423 244.672 14.5476 243.424C13.6702 243.305 12.8281 243.197 12.0226 243.1C12.5334 243.028 13.0591 242.952 13.5993 242.871C22.2412 241.571 34.6124 238.973 49.5705 233.784C79.4906 223.403 119.747 202.657 161.202 161.202C202.656 119.747 223.403 79.4906 233.784 49.5705C238.973 34.6124 241.571 22.2412 242.871 13.5993C242.981 12.868 243.082 12.1633 243.174 11.4861C243.266 12.1633 243.367 12.868 243.477 13.5993C244.777 22.2412 247.374 34.6124 252.564 49.5705C262.944 79.4906 283.691 119.747 325.146 161.202C366.6 202.656 406.857 223.403 436.777 233.784C451.735 238.973 464.106 241.571 472.748 242.871C472.804 242.879 472.86 242.887 472.915 242.896C472.706 242.918 472.494 242.941 472.28 242.965C463.333 243.959 450.554 246.15 435.186 250.933C404.448 260.5 363.368 280.439 321.903 321.903C280.439 363.368 260.5 404.448 250.933 435.187Z" stroke-width="2"/>
        </svg>
            
        <!-- <div class="bigStarIntro bg-bigStarLight dark:bg-bigStar bg-center bg-contain bg-no-repeat absolute regularDesk:h-[500px] firstDeskBreakpoint:h-[400px] secondDeskBreakpoint:h-[350px] deskBreak:h-[350px] h-[350px] regularDesk:w-[500px] firstDeskBreakpoint:w-[400px] secondDeskBreakpoint:w-[350px] deskBreak:w-[350px] w-[350px] right-[-175px] mt-[-50px]"></div> -->
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
        text-shadow: 1px 0px 0px #B5C1EB, -1px 0px 0px #B5C1EB, 0px -1px 0px #B5C1EB, 0px 1px 0px #B5C1EB, 1px 1px 0px #B5C1EB, -1px 1px 0px #B5C1EB, 1px -1px 0px #B5C1EB, -1px -1px 0px #B5C1EB;
    }
    .globe{
        flex: 0 0 auto; /* this stops the globes from shrinking when there are too many in the parent div */
        position: relative;
        animation: globeMove 3.5s linear infinite;
    }
    .diamond{
        flex: 0 0 auto; /* this stops the diamonds from shrinking when there are too many in the parent div */
        position: relative;
        animation: diamondMove 4s linear infinite;
    }
    @keyframes globeMove{
        0%{
            transform: translateX(0px);
        }

        100%{
            transform: translateX(-73.5px);
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