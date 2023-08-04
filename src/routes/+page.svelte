<script lang="ts">
    import { onMount } from "svelte";

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
        handleScroll();
        // run the header fading function on scroll
        window.addEventListener('scroll', handleScroll);
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

    // declare variable for the headElement we need to fade out
    let headerElement:HTMLHeadElement;
    // store a desired offset in a variable. A higher offset means
    let animationOffsetScroll:number = 2;

    // -------------------------------------------------------- HEADER 'FADE WHEN SCROLLING OUT OF VIEW' FUNCTION -------------------------------------------------------- //

    // Add a new function to handle scroll event for fading out the header
    function handleScroll() {
        // Get the distance of the header from the top of the viewport
        const headerOffsetTop = headerElement.getBoundingClientRect().top;
        // Calculate the percentage of the header's position relative to the viewport height and add offset to make animation quicker/slower
        const headerPositionPercentage = 1 - (Math.abs(headerOffsetTop * animationOffsetScroll) / window.innerHeight);
        // Set the opacity of the header based on the calculated percentage
        headerElement.style.opacity = headerPositionPercentage.toString();
    }

</script>

<header bind:this={headerElement} class="header relative flex justify-center items-center w-full bg-light dark:bg-dark">
    <div bind:this={headerContentWrapperElement} class="headerContentWrapper uppercase relative block items-center">
        <div class="headerLine relative w-full flex justify-between items-center font-display font-medium text-dark dark:text-light text-header regularDesk:text-header firstDeskBreakpoint:text-[6rem] secondBreak:text-[6rem] max-w-[100%] min-w-[450px] mt-[-80px] regularDesk:mt-[-80px] firstDeskBreakpoint:mt-[-70px] secondBreak:mt-[-70px]">
            <div bind:this={asteriskTop} on:mouseenter={() => {angleTop += 180; asteriskTop.style.transform = `rotateZ(${angleTop}deg)`;}} role="presentation" class="headerAsterix select-none text-dark ease-out duration-1000 pt-[7.5px]">✹</div>
            <div  bind:this={headerLineTop} class="headerText select-none text-dark dark:text-light">Innovators</div>
            <div class="globeWrapper h-[80px] regularDesk:h-[80px] firstDeskBreakpoint:h-[65px] secondBreak:h-[65px] w-[250px] border-2 border-dark dark:border-light rounded-full flex justify-start items-center overflow-hidden">
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondBreak:h-[55px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondBreak:w-[55px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondBreak:h-[55px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondBreak:w-[55px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondBreak:h-[55px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondBreak:w-[55px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondBreak:h-[55px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondBreak:w-[55px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globeLight dark:bg-globe h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[55px] secondBreak:h-[55px] regularDesk:w-[65px] firstDeskBreakpoint:w-[55px] secondBreak:w-[55px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
            </div>
        </div>
        <div class="headerLine relative w-full flex justify-between items-center font-display font-medium text-light text-header regularDesk:text-header firstDeskBreakpoint:text-[6rem] secondBreak:text-[6rem] max-w-[100%] min-w-[450px] mt-[-80px] regularDesk:mt-[-80px] firstDeskBreakpoint:mt-[-70px] secondBreak:mt-[-70px]">
            <div class="diamondWrapper h-[80px] w-[167px] border-[2px] mr-[10px] border-dark dark:border-light rounded-full flex justify-end items-center overflow-hidden">
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[40px] secondBreak:h-[40px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[40px] secondBreak:w-[40px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[40px] secondBreak:h-[40px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[40px] secondBreak:w-[40px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[40px] secondBreak:h-[40px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[40px] secondBreak:w-[40px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[40px] secondBreak:h-[40px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[40px] secondBreak:w-[40px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamondLight dark:bg-diamond h-[65px] regularDesk:h-[65px] firstDeskBreakpoint:h-[40px] secondBreak:h-[40px] w-[65px] regularDesk:w-[65px] firstDeskBreakpoint:w-[40px] secondBreak:w-[40px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
            </div>
            <div class="headerText select-none text-dark dark:text-light">need a social</div>
            <div role="presentation" class="headerAsterix select-none text-dark ease-out duration-500 pt-[7.5px] ml-[10px]">&</div>
        </div>
        <div class="headerLine relative w-full flex justify-between items-center font-display font-medium text-light text-header regularDesk:text-header firstDeskBreakpoint:text-[6rem] secondBreak:text-[6rem] max-w-[100%] min-w-[450px] mt-[-80px] regularDesk:mt-[-80px] firstDeskBreakpoint:mt-[-70px] secondBreak:mt-[-70px]">
            <div bind:this={asteriskBottomLeft} on:mouseenter={() => {angleBottomLeft += 180; asteriskBottomLeft.style.transform = `rotateZ(${angleBottomLeft}deg)`;}} role="presentation" class="select-none text-dark dark:text-light ease-out duration-1000 pt-[7.5px] ml-[-10px] mr-[5px]">✺</div>
            <div bind:this={headerLineThird} class="headerText select-none text-dark dark:text-light">collaborative</div>
            <div bind:this={asteriskBottomRight} on:mouseenter={() => {angleBottomRight += 180; asteriskBottomRight.style.transform = `rotateZ(${angleBottomRight}deg)`;}} role="presentation" class="select-none text-dark dark:text-light ease-out duration-1000 pt-[7.5px] mr-[0px]">✲</div>
        </div>
        <div class="headerLine relative w-full flex justify-center items-center font-display font-medium text-dark dark:text-light text-header regularDesk:text-header firstDeskBreakpoint:text-[6rem] secondBreak:text-[6rem]  max-w-[100%] min-w-[450px] mt-[-80px] regularDesk:mt-[-80px] firstDeskBreakpoint:mt-[-70px] secondBreak:mt-[-70px]">
            <div role="presentation" class="select-none text-light ease-out duration-500 pt-[7.5px] ml-[-10px] mr-[20px] w-[80px] h-[80px] bg-starLight dark:bg-star bg-center bg-contain bg-no-repeat"></div>
            <div class="headerText select-none text-dark dark:text-light">space</div>
            <div class="smallHeaderText font-mono text-[20px] ml-[10px]">Come Build One<br>With Us</div>
        </div>
    </div>
    <div class="headerScrollPrompt w-[80px] h-[120px] absolute bottom-[25px] bg-scrollArrowLight dark:bg-scrollArrow bg-center bg-contain bg-no-repeat animate-bounce"></div>
</header>
<section role="presentation" class="introParagraphSection py-[150px] relative flex justify-start items-center w-[100%] min-h-[50vh]">
    <div class="introParWrapper relative ml-[50px] w-full max-w-[1116px] h-auto flex flex-col justify-center items-start font-display text-[58px] leading-[58px] font-medium text-dark dark:text-light">
        <h1>Syngenious is an online space for young innovators to explore their passions, collaborate on ground-breaking projects, and connect with like-minded peers.</h1>
        <div class="introCtaButton overflow-hidden relative uppercase text-[25px] w-[200px] h-[60px] border-2 border-dark dark:border-light flex justify-center items-center rounded-[20px] mt-[35px] text-dark dark:text-light hover:text-light dark:hover:text-dark">
            <h3 class="z-2">Join Us Now</h3>
            <div class="introButtonHover z-[-1] ease-out duration-[200ms] absolute w-full h-full bg-dark dark:bg-light top-[100%]"></div>
        </div>
        <div class="bigStarIntro bg-bigStarLight dark:bg-bigStar bg-center bg-contain bg-no-repeat absolute h-[500px] w-[500px] right-[-175px] mt-[-50px]"></div>
    </div>
</section>
<style lang="postcss">
    /* styling for the header */
    .header{
        height: 100vh;
        perspective: 650px;
    }
    .headerContentWrapper{
        min-width: 65em;
        min-height: 100px;
        transition: 0.25s ease-out;
    }
    .headerText{
        transition: 0.25s ease-out;
    }
    .headerAsterix{
        text-shadow: 2px 0px 0px #D9DCC9, -2px 0px 0px #D9DCC9, 0px -2px 0px #D9DCC9, 0px 2px 0px #D9DCC9, 1px 1px 0px #D9DCC9, -1px 1px 0px #D9DCC9, 1px -1px 0px #D9DCC9, -1px -1px 0px #D9DCC9;
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


    /* styling for intro paragraph section */
    .introCtaButton:hover > .introButtonHover {
        top: 0%;
    }
</style>