<script lang="ts">
    export let SignedIn = false;

</script>

<nav id="navbar" class="fixed top-0 bg-dark bg-opacity-90 w-full px-6 flex justify-between items-center">
    <div id="logo" class="logo cursor-pointer bg-logo bg-contain bg-center bg-no-repeat"></div>
    <div class="flex justify-center items-center">
        {#if SignedIn}
        <button id="dashboardLink" class="menuButton h-9 w-auto bg-light hover:bg-dark px-4 font-display font-medium text-dark hover:text-light ease-out duration-200 uppercase rounded-xl border-2 border-light">Go To Dashboard</button>
        {:else}
            <button id="joinUsNav" class="menuButton h-9 w-auto bg-light hover:bg-dark px-4 font-display font-medium text-dark hover:text-light ease-out duration-200 uppercase rounded-xl border-2 border-light">Join us</button>
            <button id="signInNav" class="menuButton h-9 w-auto bg-dark hover:bg-light px-4 font-display font-medium text-light hover:text-dark ease-out duration-200 uppercase rounded-xl border-2 border-light ml-4">Sign In</button>
        {/if}
    </div>
</nav>

<style lang="postcss">
    #navbar{
        height: 10vh;
    }

    .menuButton{
        font-size: 20px;
        min-width: 100px;
    }

    .logo{
        height: 50px;
        width: 200px;
    }
</style>