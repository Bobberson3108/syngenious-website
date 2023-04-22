<script lang="ts">
    export let name:string;
    export let description:string;
    import { onMount } from 'svelte';

    let svg: SVGSVGElement;

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
      return { points, textPosition, index: i + 1 };
    });

    const minX = Math.min(...hexagons.map(hex => Math.min(...hex.points.map(p => p.x))));
    const maxX = Math.max(...hexagons.map(hex => Math.max(...hex.points.map(p => p.x))));
    const minY = Math.min(...hexagons.map(hex => Math.min(...hex.points.map(p => p.y))));
    const maxY = Math.max(...hexagons.map(hex => Math.max(...hex.points.map(p => p.y))));

    const viewBoxWidth = maxX - minX + 2 * s;
    const viewBoxHeight = maxY - minY + 2 * s;

    const values = [
      {
        name: "Collaboration",
        description: "In a world increasingly focused on individual achievements, Syngenious embraces the idea that we can accomplish more together than we can alone. We are dedicated to nurturing a culture of cooperation and mutual support."
      },
      {
        name: "Community",
        description: "Syngenious provides a platform for young people to connect with like-minded individuals, forging relationships built on shared interests and values."
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
      {
        name: "Positive Impact",
        description: "Our organisation is dedicated to making a meaningful, positive impact on the world through collaborative projects and initiatives. We encourage our members to pursue socially responsible goals and contribute to the greater good of society."
      },
    ];

    onMount(() => {
      svg.setAttribute('viewBox', `${minX - s} ${minY - s} ${viewBoxWidth} ${viewBoxHeight}`);
    });
</script>

<svg bind:this={svg} class="hexagon-container w-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  {#each hexagons as { points, textPosition, index }}
    <g>
      <polygon points="{points.map(p => `${p.x},${p.y}`).join(' ')}" class="hexagon" />
      {#if index === 5}
        <text class="fill-white font-syne" x="{textPosition.x}" font-size="0.3" text-anchor="middle">
          <tspan x="{textPosition.x}" y="{textPosition.y - 0.15}" dy="0.1">{values[index].name.split(' ')[0]}</tspan>
          <tspan x="{textPosition.x}" y="{textPosition.y + 0.15}" dy="0.1">{values[index].name.split(' ')[1]}</tspan>
        </text>
      {:else}
        <text class="fill-white font-syne" x="{textPosition.x}" y="{textPosition.y}" font-size="0.3" dy="0.1" text-anchor="middle">{values[index].name}</text>
      {/if}
    </g>
  {/each}
</svg>

<style lang="postcss">
  .hexagon-container {
    display: block;
    margin: 0 auto;
  }

  .hexagon {
    @apply stroke-white fill-[#EBB90C];
    stroke-width: 0.08;
    transition: fill 0.3s;
  }

  .hexagon:hover {
    fill: #ccc;
  }
</style>