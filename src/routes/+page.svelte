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
    })

    // function to handle viewport change, so you always get the updated viewport width in px
    function handleViewportWidthChange() {
        // store the viewport width in viewportWidth variable
        viewportWidth = window.innerWidth;
    }

    // declare all the required HTML elements required for the header 'mousemove' animation
    let headerContentWrapperElement:HTMLDivElement;
    let headerLineTop:HTMLDivElement;
    let headerLineThird:HTMLDivElement;

    // declare all the required numerical values so they can be changed later with ease
    let desiredAngleRange:number = 2.5;
    let angleHeader:number;
    let desiredMoveRange:number = 10;
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

    // declare the variables for the divElements used in the asterisk rotating interaction
    let asteriskTop:HTMLDivElement;
    let asteriskBottomLeft:HTMLDivElement;
    let asteriskBottomRight:HTMLDivElement;
    // store the respective rotation angles for each asterisk
    let angleTop:number = 0;
    let angleBottomLeft:number = 0;
    let angleBottomRight:number = 0;
</script>

<header class="header relative flex justify-center items-center w-full">
    <div bind:this={headerContentWrapperElement} class="headerContentWrapper uppercase relative block items-center">
        <div class="headerLine relative w-full flex justify-between items-center font-display font-medium text-light text-header max-w-[100%] min-w-[450px] mt-[-60px]">
            <div bind:this={asteriskTop} on:mouseenter={() => {angleTop += 30; asteriskTop.style.transform = `rotateZ(${angleTop}deg)`;}} role="presentation" class="headerAsterix select-none text-dark ease-out duration-500 pt-[7.5px]">✹</div>
            <div  bind:this={headerLineTop} class="headerText select-none text-light">Innovators</div>
            <div class="globeWrapper h-[80px] w-[200px] border-[2px] border-light rounded-full flex justify-start items-center overflow-hidden">
                <div class="globe relative bg-globe h-[65px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globe h-[65px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globe h-[65px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globe h-[65px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
                <div class="globe relative bg-globe h-[65px] w-[65px] bg-contain bg-center bg-no-repeat rounded-full ml-[5.5px] mr-[3.5px]"></div>
            </div>
        </div>
        <div class="headerLine relative w-full flex justify-between items-center font-display font-medium text-light text-header max-w-[100%] min-w-[450px] mt-[-60px]">
            <div class="diamondWrapper h-[80px] w-[167px] border-[2px] mr-[10px] border-light rounded-full flex justify-end items-center overflow-hidden">
                <div class="diamond relative bg-diamond h-[65px] w-[65px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamond h-[65px] w-[65px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamond h-[65px] w-[65px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamond h-[65px] w-[65px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
                <div class="diamond relative bg-diamond h-[65px] w-[65px] bg-contain bg-center bg-no-repeat ml-[5.5px] mr-[3.5px]"></div>
            </div>
            <div class="headerText select-none text-light">need a social</div>
            <div role="presentation" class="headerAsterix select-none text-dark ease-out duration-500 pt-[7.5px] ml-[10px]">&</div>
        </div>
        <div class="headerLine relative w-full flex justify-between items-center font-display font-medium text-light text-header max-w-[100%] min-w-[450px] mt-[-60px]">
            <div bind:this={asteriskBottomLeft} on:mouseenter={() => {angleBottomLeft += 30; asteriskBottomLeft.style.transform = `rotateZ(${angleBottomLeft}deg)`;}} role="presentation" class="select-none text-light ease-out duration-500 pt-[7.5px] ml-[-10px] mr-[5px]">✺</div>
            <div bind:this={headerLineThird} class="headerText select-none text-light">collaborative</div>
            <div bind:this={asteriskBottomRight} on:mouseenter={() => {angleBottomRight += 30; asteriskBottomRight.style.transform = `rotateZ(${angleBottomRight}deg)`;}} role="presentation" class="select-none text-light ease-out duration-500 pt-[7.5px] mr-[-10px]">✲</div>
        </div>
        <div class="headerLine relative w-full flex justify-center items-center font-display font-medium text-light text-header max-w-[100%] min-w-[450px] mt-[-60px]">
            <div role="presentation" class="select-none text-light ease-out duration-500 pt-[7.5px] ml-[-10px] mr-[20px] w-[80px] h-[80px] bg-star bg-center bg-contain bg-no-repeat"></div>
            <div class="headerText select-none text-light">space</div>
            <div class="smallHeaderText font-mono text-[15px] ml-[10px]">Come Build One<br>With Us</div>
        </div>
    </div>
</header>

<style lang="postcss">
    .header{
        height: 100vh;
        perspective: 650px;
    }

    .headerContentWrapper{
        min-width: 65em;
        min-height: 100px;
    }
    
    .headerAsterix{
        text-shadow: 2px 0px 0px #D9DCC9, -2px 0px 0px #D9DCC9, 0px -2px 0px #D9DCC9, 0px 2px 0px #D9DCC9, 1px 1px 0px #D9DCC9, -1px 1px 0px #D9DCC9, 1px -1px 0px #D9DCC9, -1px -1px 0px #D9DCC9;
    }

    .globe{
        flex: 0 0 auto; // this stops the globes from shrinking when there are too many in the parent div
        position: relative;
        animation: globeMove 1s linear infinite;
    }

    .diamond{
        flex: 0 0 auto; // this stops the diamonds from shrinking when there are too many in the parent div
        position: relative;
        animation: diamondMove 1s linear infinite;
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
</style>