<script lang="ts">
    import { onMount } from 'svelte';

    let svg: SVGSVGElement;
    let selectedValueIndex: number = 1;

    function handleMouseEnter(index: number) {
      selectedValueIndex = index;
    }

    const s = 1;
    const hexagonOffsets = [
      { x: 1.5 * s, y: 0 },
      { x: 0 * s, y: 0.5 * Math.sqrt(3) * s },
      { x: 3 * s, y: 0.5 * Math.sqrt(3) * s },
      { x: -1.5 * s, y: Math.sqrt(3) * s },
      { x: 4.5 * s, y: Math.sqrt(3) * s },
    ];


    function createHexagonPoints(s: number, xOffset: number, yOffset: number) {
      const h = Math.sqrt(3) * s;
      return [
        { x: s + xOffset, y: 0 + yOffset },
        { x: 2 * s + xOffset, y: 0 + yOffset },
        { x: 2.5 * s + xOffset, y: 0.5 * h + yOffset },
        { x: 2 * s + xOffset, y: h + yOffset },
        { x: s + xOffset, y: h + yOffset },
        { x: 0.5 * s + xOffset, y: 0.5 * h + yOffset },
      ];
    }

    function createHexagonTextPosition(s: number, xOffset: number, yOffset: number) {
      const h = Math.sqrt(3) * s;
      return { x: 1.5 * s + xOffset, y: 0.5 * h + yOffset };
    }

    let hexagons = hexagonOffsets.map((offset, i) => {
      const points = createHexagonPoints(s, offset.x, offset.y);
      const textPosition = createHexagonTextPosition(s, offset.x, offset.y);
      return { points, textPosition, index: i};
    });

    const values = [
      {
        name: "Collaboration",
        description: "In a world increasingly focused on individual achievements, Syngenious embraces the idea that we can accomplish more together than we can alone. We are dedicated to nurturing a culture of cooperation and mutual support."
      },
      {
        name: "Community",
        description: "Syngenious provides a platform for young people to connect with like-minded individuals, forging relationships built on shared interests and values. We aim to harness the power of our community to create a meaningful, positive impact on the world through collaborative projects and initiatives."
      },
      {
        name: "Opportunity",
        description: "We recognize the potential in young people and strive to fill the gaps left by traditional education systems. By providing funding, guidance, and resources, we empower our members to take control of their future and make a difference in the world."
      },
      {
        name:"Creativity",
        description: "Syngenious fosters an environment that nurtures creativity and promotes innovative thinking. By encouraging our members to explore new ideas, develop original solutions, and engage in the process of creation, we inspire them to challenge the status quo and develop groundbreaking ideas."
      },
      {
        name: "Openness",
        description: "Syngenious believes in promoting transparency, democracy, and decentralisation, ensuring that our community remains accessible, equitable, and driven by the collective input of its members."
      },
    ];

    onMount(() => {
      const bbox = svg.getBBox();
      svg.setAttribute('viewBox', `${bbox.x} ${bbox.y - 0.1} ${bbox.width} ${bbox.height + 0.2}`);
    });
</script>

<div class="flex items-center mx-10">
  <svg bind:this={svg} class="block my-5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    {#each hexagons as { points, textPosition, index }}
      <g
        on:mouseenter={() => handleMouseEnter(index)}
      >
        <polygon points="{points.map(p => `${p.x},${p.y}`).join(' ')}" class="hexagon" />
        <text class="fill-white font-syne" x="{textPosition.x}" y="{textPosition.y}" font-size="0.28" dy="0.1" text-anchor="middle">{values[index].name}</text>
      </g>
    {/each}
  </svg>
</div>

<div class="p-6 bg-white dark:bg-primary-800 shadow-md rounded-lg mx-auto text-center mt-8 max-w-[800px]">
  <h3 class=" font-syne font-bold text-2xl sm:text-3xl mb-4 dark:text-white">{values[selectedValueIndex].name}</h3>
  <p class="font-quattrocento text-lg dark:text-white">{values[selectedValueIndex].description}</p>
</div>

<style lang="postcss">

  .hexagon {
    @apply stroke-white fill-[#EBB90C];
    stroke-width: 0.08;
    transition: fill 0.15s;
  }

  .hexagon:hover {
    fill: #e6c75b;
  }
</style>