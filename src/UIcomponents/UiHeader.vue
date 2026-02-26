<template>
    <header class="header-container">

        <div class="mobile-top-header">
            <div class="logo-container">
                <RouterLink to="/search-movie">
                    <img src="/src/assets/images/searchmovie_logo_light.svg" alt="" class="logo" v-if="this.theme === 'dark'">
                    <img src="/src/assets/images/searchmovie_logo_dark.svg" alt="" class="logo" v-if="this.theme === 'light'">
                </RouterLink>

            </div>

            <div class="burger-menu-container">
                <i class="fa-solid fa-bars" v-if="showDropMenuIcon && !this.openDropMenuFlag" @click="openDropMenu"></i>
                <i class="fa-solid fa-xmark" v-if="showDropMenuIcon && this.openDropMenuFlag" @click="openDropMenu"></i>
            </div>
        </div>
        
        <div class="drop-menu-header">
            <nav class="navigation-container">
                <ul class="navigation-list">
                    <li class="nav-elem"><RouterLink to="/search-movie">Популярное</RouterLink></li>
                    <li class="nav-elem"><RouterLink to="/search-movie/best">Лучшие</RouterLink></li>
                    <li class="nav-elem"><RouterLink to="/search-movie/about">О сайте</RouterLink></li>
                </ul>
            </nav>

            <change-theme-button @currentTheme="getTheme"></change-theme-button>            
        </div>
        
    </header>
</template>

<script>
    import ChangeThemeButton from './ChangeThemeButton.vue';

    export default {
        components: {
            ChangeThemeButton
        },

        data() {
            return {
                theme: 'dark',
                openDropMenuFlag: false
            }
        },

        methods: {
            getTheme(currentTheme) {
                this.theme = currentTheme;
            },

            openDropMenu() {
                const dropMenu = document.querySelector('.drop-menu-header');
                dropMenu.classList.toggle('drop-menu-active');
                if (this.openDropMenuFlag) this.openDropMenuFlag = false;
                else this.openDropMenuFlag = true;
            }
        },

        computed: {
            showDropMenuIcon() {
                return Number(document.querySelector('#app').offsetWidth) < 980;
            }
        }
    }
</script>

<style scoped>
    .header-container {
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: var(--surface-background);
        position: relative;
    }

    .mobile-top-header{
        width: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-container {
        width: 100%;
    }

    .logo{
        width: 100%;
    }

    .drop-menu-header{
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .burger-menu-container{
        font-size: 1.5rem;
        color: var(--title-color);
    }

    .navigation-list {
        color: var(--title-color);
        display: flex;
    }

    .nav-elem {
        list-style: none;
        margin-right: 1.5rem;
    }
    
    .nav-elem a{
        color: var(--title-color);
    }

    @media (max-width: 375px) {

        .header-container {
            flex-direction: column;
        }

        .mobile-top-header{
            width: 100%;
        }

        .logo-container {
            width: 30%;
        }

        .drop-menu-header {
            opacity: 0;
            height: 0;
            width: 100%;
            transition: 0.5s;
            max-height: 0;
            transition: 0.3s;
            margin: 0;
            pointer-events: none;
        }

        .drop-menu-active {
            pointer-events: all;
            opacity: 1;
            height: 100%;
            margin: 2rem 0 1rem 0;
            transition: 0.3s; 
        }

    }    

</style>