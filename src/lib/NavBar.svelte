<script lang="ts">
    export let SignedIn = false;

</script>

<nav class="navbar">
    <div class="logoNav"></div>
    {#if SignedIn}
        <!-- Links for when user is signed in   -->
    {:else}
        <div class="navButtonsContainer">
            <button class="joinUsNav">Join us</button>
            <button class="signInNav">Sign In</button>
        </div>
    {/if}
</nav>

<style lang="postcss">
    body{
        min-height: 300vh;
        background-color: #01131D;
        padding: 0;
        margin: 0;
    }

    .navbar{
        position: fixed;
        top: 0%;
        width: 100%;
        height: 75px;
        border: 1px solid #fff;
        background: rgba(1, 19, 29, 0.89);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logoNav{
        background-image: url('/logoDarkMode.png');
        height: 50px;
        width: 100px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>