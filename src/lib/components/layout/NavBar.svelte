<script lang="ts">
    import { page } from '$app/stores';
    import { toggleTheme } from '$lib/stores/themeStore';
    import { signOut } from '@auth/sveltekit/client';
    import SlidingButton from '../reusable/buttons/SlidingButton.svelte';
    import { signIn } from "@auth/sveltekit/client";

    console.log($page.data.session);

    let profileMenuOpen = false;

    const toggleProfileMenu = () => {
        profileMenuOpen = !profileMenuOpen;
    };
    const closeProfileMenu = () => {
        profileMenuOpen = false;
    };
	
</script>

<nav class="z-[8] fixed h-[10vh] top-0 bg-light dark:bg-dark bg-opacity-90 w-full px-6 flex justify-between items-center">
    <div id="logo" class="logo cursor-pointer h-[50px] w-[200px] bg-logoLightMode dark:bg-logoDarkMode bg-contain bg-center bg-no-repeat"></div>
    <div class="flex justify-center items-center">
        {#if Object.keys($page.data.session || {}).length > 0}
            <a href="/forum" id="dashboardLink" class="menuButton h-9 w-auto bg-dark hover:bg-light px-4 font-display font-medium text-light hover:text-dark ease-out duration-200 uppercase rounded-xl border-2 border-dark">Forum</a>
            <a id="dashboardLink" class="menuButton h-9 w-auto bg-dark hover:bg-light px-4 font-display font-medium text-light hover:text-dark ease-out duration-200 uppercase rounded-xl border-2 border-dark">Dashboard</a>
             {#if $page.data?.session?.user?.image}
                <div class="relative" on:blur={closeProfileMenu} >
                    <button on:click={toggleProfileMenu} class="focus:outline-none flex items-center space-x-1 stroke-dark dark:stroke-light hover:stroke-footerlight dark:hover:text-stroke-500">
                        <img src="{$page.data.session.user.image}" alt="Profile pic" class="rounded-full w-8 h-8 drop-shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden sm:block w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    {#if profileMenuOpen}
                        <ul class="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-10 bg-footerlight dark:bg-footerDark bg-opacity-95 dark:bg-opacity-90 text-dark dark:text-light">
                            <li><span class="block px-4 py-2 hover:bg-grey-200 dark:hover:bg-primary-800">Profile</span></li>
                            <li><span class="block px-4 py-2 hover:bg-grey-200 dark:hover:bg-primary-800">Settings</span></li>
                            <li><hr class="mx-2 my-1 border-grey-200 dark:border-grey-600"></li>
                            <li><button on:click={signOut} class="w-full text-left px-4 py-2 hover:bg-grey-200 dark:hover:bg-primary-800">Sign out</button></li>
                        </ul>
                    {/if}
                </div>
            {/if}
        {:else}
            <SlidingButton buttonText={"Join Us"} buttonType={"button"} onClickFunction={signIn} hasFill textSize={20} paddingX={15} paddingY={2.5} marginTop={0}/>
            <SlidingButton buttonText={"Log In"} buttonType={"button"} onClickFunction={signIn} textSize={20} paddingX={15} paddingY={2.5} marginTop={0} marginRight={0}/>
        {/if}
        <button id="darkModeButton" class="menuButton text-[20px] flex justify-center items-center h-9 w-9 bg-dark px-0 font-display font-medium text-light  ease-out duration-200 uppercase rounded-xl border-2 border-light ml-4 cursor-none" on:click={toggleTheme}>
            <svg class="fill-light h-[25px]" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z"/>
            </svg>
        </button>
    </div>
</nav>
