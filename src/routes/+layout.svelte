<script lang="ts">
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { theme } from "$lib/themeStore";
    import { onMount } from "svelte";

    import AOS from "aos";
    import "aos/dist/aos.css";

    let cursor;

    onMount(() => {
        AOS.init();
        AOS.refresh();

        document.documentElement.classList.add($theme);
        
        console.log('ontouchstart' in window)
        if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.pageX + 'px';
                cursor.style.top = e.pageY + 'px';
            });

            document.body.addEventListener("mouseover", (e) => {
                if (e.target.classList.contains("clickable") || (e.target.tagName.toLowerCase() === "a") || (e.target.tagName.toLowerCase() === "button")) {
                    cursor.classList.add("halo");
                }
            });

            document.body.addEventListener("mouseout", (e) => {
                if (e.target.classList.contains("clickable") || (e.target.tagName.toLowerCase() === "a") || (e.target.tagName.toLowerCase() === "button")) {
                    cursor.classList.remove("halo");
                }
            });
        } else {
            cursor.style.display = "none";
        }


        document.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            ripple.style.left = e.pageX + 'px';
            ripple.style.top = e.pageY + 'px';

            document.body.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
</script>

<div class="min-h-screen min-w-screen">
    <div id="cursor" class="red-dot" bind:this={cursor}></div>
    <Nav/>
    <slot />
    <Footer/>
</div>