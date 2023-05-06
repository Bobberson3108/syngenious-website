<script lang="ts">
    import { onMount } from 'svelte';

    let svg: SVGSVGElement;
    let selectedValueIndex: number = 0;
    let hexagons: { points: { x: number, y: number }[], textPosition: { x: number, y: number } }[] = [];
    let innerWidth: number = 9000;

    const h = Math.sqrt(3);

    function handleMouseEnter(index: number) {
      selectedValueIndex = index;
    }

    const hexagonOffsets = [
      { x: 1.5, y: Math.sqrt(3)},
      { x: 0, y: 0.5 * Math.sqrt(3)},
      { x: 3, y: 0.5 * Math.sqrt(3)},
      { x: -1.5, y: Math.sqrt(3)},
      { x: 4.5, y: Math.sqrt(3)},
    ];

    const mobileHexagonOffsets = [
      { x: 0, y: 0 },           // Hexagon 1: Center
      { x: -1.5, y: -h/2 },       // Hexagon 2: Top-left
      { x: -1.5, y: h/2 },        // Hexagon 3: Bottom-left
      { x: 1.5, y: -h/2 },        // Hexagon 4: Top-right
      { x: 1.5, y: h/2 },         // Hexagon 5: Bottom-right
    ];

    function createHexagonPoints(xOffset: number, yOffset: number) {
      return [
        { x: 1 + xOffset, y: 0 + yOffset },
        { x: 2 + xOffset, y: 0 + yOffset },
        { x: 2.5 + xOffset, y: 0.5 * h + yOffset },
        { x: 2 + xOffset, y: h + yOffset },
        { x: 1 + xOffset, y: h + yOffset },
        { x: 0.5 + xOffset, y: 0.5 * h + yOffset },
      ];
    }

    function createHexagonTextPosition(xOffset: number, yOffset: number) {
      return { x: 1.5 + xOffset, y: 0.5 * h + yOffset };
    }

    let bigHexagons = hexagonOffsets.map(offset => {
      const points = createHexagonPoints(offset.x, offset.y);
      const textPosition = createHexagonTextPosition(offset.x, offset.y);
      return { points, textPosition};
    });

    let mobileHexagons = mobileHexagonOffsets.map(offset => {
      const points = createHexagonPoints(offset.x, offset.y);
      const textPosition = createHexagonTextPosition(offset.x, offset.y);
      return { points, textPosition};
    });


    $: {
      if (innerWidth <= 768) {
        hexagons = mobileHexagons;
        svg && svg.setAttribute('viewBox', '-1 -0.966 5 3.664')
      } else {
        hexagons = bigHexagons;
        svg && console.log(svg.getBBox())
        svg && svg.setAttribute('viewBox', '-1.1 0.6 8.2 3.664')
      }
    }


    const values = [
      {
        name: "Collaboration",
        description: "In a world increasingly focused on individual achievements, Syngenious embraces the idea that we can accomplish more together than we can alone. We are dedicated to nurturing a culture of cooperation and mutual support."
      },
      {
        name: "Opportunity",
        description: "We recognize the potential in young people and strive to fill the gaps left by outdated education systems built on conformity and standardisation. By providing funding, guidance, and resources, we empower our members to take control of their future and make a difference in the world."
      },
      {
        name: "Community",
        description: "Syngenious provides a platform for young people to connect with like-minded individuals, forging relationships built on shared interests and values. We aim to harness the power of our community to create a meaningful, positive impact on the world through collaborative projects and initiatives."
      },
      {
        name:"Creativity",
        description: "Syngenious fosters an environment that nurtures creativity and promotes innovative thinking. By encouraging our members to explore new ideas, develop original solutions, and engage in the process of creation, we inspire them to challenge the status quo and develop groundbreaking ideas."
      },
      {
        name: "Openness",
        description: "Syngenious values transparency, democracy, and decentralisation, ensuring our organisation is driven by the collective input of its members, and our weekly meetings are open to everyone in the community."
      },
    ];

    onMount(() => {
      const bbox = svg.getBBox();
      svg.setAttribute('viewBox', `${bbox.x} ${bbox.y - 0.1} ${bbox.width} ${bbox.height + 0.2}`);
    });
</script>

<svelte:window bind:innerWidth={innerWidth} />

<div class="flex items-center px-10">
  <svg bind:this={svg} class="block mb-5 mx-auto max-w-[1500px] cursor-default" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    {#each hexagons as { points, textPosition }, index}
      <g
        on:mouseenter={() => handleMouseEnter(index)}
        on:click={() => handleMouseEnter(index)}
        on:keydown={(e) => {
          if (e.key === 'Enter') {
            handleMouseEnter(index);
          }
        }}
      >
        <polygon points="{points.map(p => `${p.x},${p.y}`).join(' ')}" class="hexagon" />
        <text class="fill-white font-syne" x="{textPosition.x}" y="{textPosition.y}" font-size="0.28" dy="0.1" text-anchor="middle">{values[index].name}</text>
      </g>
    {/each}
  </svg>
</div>

<div class="p-6 bg-white dark:bg-primary-800 shadow-md rounded-lg mx-auto text-center max-w-[80%] md:max-w-[800px]">
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