<script lang="ts">
  import "../app.css";
  import NavBar from "$lib/components/NavBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
	import ScrollBar from "$lib/components/ScrollBar.svelte";
	import DivCursor from "$lib/components/DivCursor.svelte";
</script>

<NavBar />
<ScrollBar />
<DivCursor />
<slot />
<Footer />