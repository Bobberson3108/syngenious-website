<script lang="ts">

</script>

<body>
    <nav class="navbar">
        <div class="logoNav"></div>
        <div class="navButtonsContainer">
            <button class="joinUsNav">Join us</button>
            <button class="signInNav">Sign In</button>
        </div>
    </nav>
</body>

<style>
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
        padding-left: 20px;
        padding-right: 20px;
    }

    .logoNav{
        background-image: url('/logoDarkMode.png');
        height: 60px;
        width: 185px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>