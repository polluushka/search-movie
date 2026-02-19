<template>
    <header class="header-container">
        <div class="logo-container">
            <RouterLink to="/search-movie">
                <img src="/src/assets/images/searchmovie_logo_light.svg" alt="" class="logo" v-if="this.theme === 'dark'">
                <img src="/src/assets/images/searchmovie_logo_dark.svg" alt="" class="logo" v-if="this.theme === 'light'">
            </RouterLink>

        </div>

            <nav class="navigation-container">
                <ul class="navigation-list">
                    <li class="nav-elem"><RouterLink to="/search-movie">Популярное</RouterLink></li>
                    <li class="nav-elem"><RouterLink to="/search-movie/best">Лучшие</RouterLink></li>
                    <li class="nav-elem"><RouterLink to="/search-movie/about">О сайте</RouterLink></li>
                </ul>
            </nav>

        <change-theme-button @currentTheme="getTheme"></change-theme-button>
        
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
                theme: 'dark'
            }
        },

        methods: {
            getTheme(currentTheme) {
                this.theme = currentTheme;
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
        color: var(--title-color);
    }

    .logo-container {
        width: 10%;
    }

    .logo{
        width: 100%;
    }

</style>