<script lang="ts">
  import "../app.css";
  import NavBar from "$lib/components/NavBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
	import ScrollBar from "$lib/components/ScrollBar.svelte";
</script>

<NavBar />
<ScrollBar />
<slot />
<Footer />