<script lang="ts">
	import { onMount } from 'svelte';
	let trackElement: HTMLDivElement;
	let thumbElement: HTMLDivElement;
	// Variable to store the last scroll position
	let lastScrollPos;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		thumbElement.addEventListener('mousedown', handleThumbMouseDown);
		// Update the thumb position initially
		updateThumbPosition();
	});

	// Variables to store the initial thumb position and mouse position
	let initialThumbPosition = 0;
	let initialMousePosition = 0;

	// Function to handle thumb position update
	function updateThumbPosition() {
		const trackHeight = trackElement.offsetHeight;
		const thumbHeight = thumbElement.offsetHeight;
		const maxThumbPosition = trackHeight - thumbHeight;

		// Calculate the thumb position based on the scroll position
		const scrollPosition = window.scrollY;
		const thumbPosition =
			(scrollPosition / (document.body.clientHeight - window.innerHeight)) * maxThumbPosition;

		// Update the thumb position
		thumbElement.style.top = `${thumbPosition}px`;
	}

	// Function to handle scroll event
	function handleScroll() {
		updateThumbPosition();
	}

	// Function to handle mouse down event on the thumb
	function handleThumbMouseDown(event: MouseEvent) {
		event.preventDefault();

		// Store the initial thumb position and mouse position
		initialThumbPosition = thumbElement.offsetTop;
		initialMousePosition = event.clientY;

		// Attach the mousemove and mouseup event listeners to the document
		document.addEventListener('mousemove', handleThumbMouseMove);
		document.addEventListener('mouseup', handleThumbMouseUp);
	}

	// Function to handle mouse move event while dragging the thumb
	function handleThumbMouseMove(event: MouseEvent) {
		event.preventDefault();

		// Calculate the new thumb position based on the mouse movement
		const mouseOffset = event.clientY - initialMousePosition;
		const newThumbPosition = initialThumbPosition + mouseOffset;

		// Limit the thumb position to stay within the bounds of the track
		const minThumbPosition = 0;
		const maxThumbPosition = trackElement.offsetHeight - thumbElement.offsetHeight;
		const clampedThumbPosition = Math.max(
			minThumbPosition,
			Math.min(newThumbPosition, maxThumbPosition)
		);

		// Update the thumb position
		thumbElement.style.top = `${clampedThumbPosition}px`;

		// Calculate the scroll position based on the thumb position
		const trackHeight = trackElement.offsetHeight;
		const thumbHeight = thumbElement.offsetHeight;
		const scrollPosition =
			(clampedThumbPosition / maxThumbPosition) * (document.body.clientHeight - window.innerHeight);

		// Scroll the page to the new position
		window.scrollTo({
			top: scrollPosition,
			behavior: 'auto'
		});
	}

	// Function to handle mouse up event after dragging the thumb
	function handleThumbMouseUp(event: MouseEvent) {
		event.preventDefault();

		// Remove the mousemove and mouseup event listeners from the document
		document.removeEventListener('mousemove', handleThumbMouseMove);
		document.removeEventListener('mouseup', handleThumbMouseUp);
	}
</script>

<div bind:this={trackElement} class="track fixed top-[25px] right-[0px] w-[15px] mr-[0px] z-[10] flex justify-center">
	<div bind:this={thumbElement} class="thumb absolute ease-out duration-100 top-0 w-[7.5px] hover:w-[15px] h-[75px] bg-light hover:bg-[transparent] dark:bg-dark dark:hover:bg-[transparent] rounded-[100px] border-2 border-light dark:border-dark" />
</div>

<style lang="postcss">
	.track {
		height: calc(100vh - 50px);
	}
</style>
