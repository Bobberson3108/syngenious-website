<script lang="ts">
  let selected = "syn";

  let syn_part = "Syn";
  let ingenious_part = "genious";

  function select(part:string) {
    selected = part;
  }

  $: if (selected === "syn") {
      syn_part = "Syn";
      ingenious_part = "genious";
    } else {
      syn_part = "S";
      ingenious_part = "ingenious";
    }
</script>

<div>
  <div class="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 flex justify-center items-center text-secondary-500">
    <div
      class="cursor-pointer py-1 bg-primary-800 pl-2 {selected === "syn" ? "selected" : "unselected"}"
      on:mouseenter={() => select("syn")}
      on:keydown={() => select("syn")}
      on:click={() => select("syn")}
    >
      <span>
        {syn_part}
      </span>
    </div>
    <div
      class="cursor-pointer py-1 bg-primary-800 pr-2 {selected === "ingenious" ? "selected" : "unselected"}"
      on:mouseenter={() => select("ingenious")}
      on:keydown={() => select("ingenious")}
      on:click={() => select("ingenious")}
    >
      <span>
        {ingenious_part}
      </span>
    </div>
  </div>

  {#if selected === "syn"}
    <div class="px-4 py-8">
      <p class="font-quattrocento md:text-lg text-grey-700 dark:text-white">
        This prefix, derived from the Greek word for "together," embodies the collaborative nature of our community. The term "syn" is found in words such as "synergy" and "synthesis," which represent the powerful interactions and unifications that occur when ideas and individuals come together. 
      </p>
    </div>
  {/if}
  {#if selected === "ingenious"}
    <div class="px-4 py-8">
      <p class="font-quattrocento text-grey-700 md:text-lg dark:text-white">
        This term, originating from both the Latin "ingeniosus" and the French "ingénieur," captures the essence of our community's creativity and resourcefulness. 
      </p>
    </div>
  {/if}
</div>

<style lang="postcss">
    .selected {
        @apply opacity-100;
    }

    .unselected {
        @apply opacity-30;
    }

</style>