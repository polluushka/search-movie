<template>
    <header class="header-container">
        <div class="logo-container">
            <img src="/src/assets/images/searchmovie_logo.svg" alt="" class="logo">
        </div>

            <nav class="navigation-container">
                <ul class="navigation-list">
                    <li class="nav-elem"><a href="/">Главная</a></li>
                    <li class="nav-elem"><a href="">Лучшие</a></li>
                    <li class="nav-elem"><a href="">О сайте</a></li>
                </ul>
            </nav>

            <div class="theme-container">
                <button class="theme-button">
                    <!-- <i class="fa-solid fa-moon fa-rotate-by"></i> -->
                    <i class="fa-solid fa-sun"></i>
                </button>
                
            </div>
        
    </header>
</template>

<style scoped>
    .header-container {
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #181b22;
    }

    .navigation-list {
        color: #e6e6e6;
        display: flex;
    }

    .nav-elem {
        list-style: none;
        margin-left: 1.5rem;
    }
    
    .nav-elem a{
        color: #e6e6e6;
    }

    .logo-container {
        width: 10%;
    }

    .logo{
        width: 100%;
    }

    .theme-button{
        font-size: 1.5rem;
        --fa-rotate-angle: 220deg;
        color: #e6e6e6;
        background-color: transparent;
        border: none;
        width: auto;
        cursor: pointer;
        transition: 0.5s;
    }

    /* .theme-button:hover{

    } */
</style>