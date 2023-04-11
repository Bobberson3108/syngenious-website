<script lang="ts">
  let menuOpen = false;
  import { theme, toggleTheme } from '$lib/themeStore';
</script>


<nav class="pt-2 flex flex-row sticky top-0 z-50 drop-shadow-sm bg-white dark:bg-primary-900 bg-opacity-95 dark:bg-opacity-90">
    <a href="/" class="flex ml-7">
        {#if $theme === 'dark'}
            <img src="img\logo\Syngenious_dark.png" class="h-12 w-12 text-primary-"/>
        {:else}
            <img src="img\logo\Syngenious.png" class="h-8 w-8 md:h-12 md:w-12"/>
        {/if}
    </a>
    <!-- Hamburger menu button -->
    <button class="ml-auto mr-4 md:hidden focus:outline-none" on:click={() => menuOpen = !menuOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-6 h-6 stroke-grey-600" stroke-width=2>
            {#if menuOpen}
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            {:else}
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            {/if}
        </svg>
    </button>
    <!-- Main navigation links -->
    <ul class="hidden ml-auto md:flex flex-row p-3 md:mr-5 font-syne text-grey-500 dark:text-grey-400" class:grid={menuOpen}>
        <li><a href="/about" class="block py-2 pr-4 pl-3 hover:text-grey-700 dark:hover:text-grey-500">About</a></li>
        <li><a href="/projects" class="block py-2 pr-4 pl-3 hover:text-grey-700 dark:hover:text-grey-500">Projects</a></li>
        <li><a href="/competitions" class="block py-2 pr-4 pl-3 hover:text-grey-700 dark:hover:text-grey-500">Competitions</a></li>
        <li><a href="/login" class="block my-2 mr-2 ml-1 px-2 hover:text-grey-700 rounded-md md:border bg-primary-800 bg-opacity-0 hover:bg-opacity-5 dark:text-primary-200 dark:hover:text-primary-300">Sign in</a></li>
    </ul>
    <button class="bg-gray-200 hover:bg-gray-300 px-3 py-2 mr-5" on:click=   {toggleTheme}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-grey-600">
            {#if $theme === 'light'}
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            {:else}
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            {/if}
        </svg>
    </button>
</nav>

<style lang="postcss">
    .grid {
        display: grid;
        gap: 0.5rem;
        padding: 1rem;
        background-color: white;
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    }
</style>



