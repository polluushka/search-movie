<template>
    <div class="theme-container">
        <button class="theme-button" @click="toggleTheme">
            <i class="fa-solid fa-moon fa-rotate-by" v-if="this.theme === 'light'"></i>
            <i class="fa-solid fa-sun" v-if="this.theme === 'dark'"></i>
        </button>  
    </div>    
</template>

<script>

    export default {
        emits: ['currentTheme'],
        data() {
            return {
                theme: 'dark'
            }
        },

        methods: {
            getTheme() {
                const currentTheme = localStorage.getItem('theme');
                if (currentTheme) {
                    this.theme = currentTheme;
                    document.documentElement.setAttribute('theme', this.theme);
                } else {
                    localStorage.setItem('theme', this.theme);
                    document.documentElement.setAttribute('theme', this.theme);
                }
                this.sendTheme();
            },

            toggleTheme() {
                this.theme = this.theme === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('theme', this.theme);
                localStorage.setItem('theme', this.theme);
                this.sendTheme();
            },

            sendTheme() {
                this.$emit('currentTheme', this.theme);
            }
        },


        mounted() {
            this.getTheme();
        }
    }

</script>

<style>
    .theme-button{
        font-size: 1.5rem;
        --fa-rotate-angle: 220deg;
        color: var(--title-color);
        background-color: transparent;
        border: none;
        width: auto;
        cursor: pointer;
        transition: 0.3s;
    }


    .theme-button:hover {
        transition: 0.3s;
        transform: scale(1.15) rotate(12deg);
    }
    
</style>