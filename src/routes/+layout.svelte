<script lang="ts">
  import "../app.css";
  import NavBar from "$lib/components/layout/NavBar.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
	import ScrollBar from "$lib/components/layout/ScrollBar.svelte";
	import DivCursor from "$lib/components/layout/DivCursor.svelte";

  
</script>

<NavBar />
<ScrollBar />
<DivCursor />
<slot />
<Footer />