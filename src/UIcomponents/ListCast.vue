<template>
    <div class="actors-container">
        <h2 class="subtitle-movie">Актёры</h2>
        <div class="actors">
            <div class="actor-item" v-for="actor in changeVisibleActors">
                <div class="img-actor-container">
                    <img :src="`https://image.tmdb.org/t/p/w185/${actor.profile_path}`" alt="" class="img-actor">
                </div>
                <div class="actor-text">
                    <h4 style="margin-bottom: 0.5rem;">{{ actor.name }}</h4>
                    <p>{{ actor.character }}</p>
                </div>
            </div>   
        </div>
        <div class="button-visible-container">
            <button class="button-visible" v-if="!this.actorsVisible" @click="this.actorsVisible = true">Показать больше...</button>
            <button class="button-visible" v-if="this.actorsVisible" @click="this.actorsVisible = false">Свернуть</button>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            actors: {
                type: Array,
                required: true
            },
        },

        data() {
            return {
                actorsVisible: false,
                visibleActors: 8
            }
        },

        computed: {
            changeVisibleActors() {
                return this.actorsVisible === true ? this.actors : this.actors.slice(0, this.visibleActors);
            }
        }
    }

</script>

<style scoped>
    .actors-container {
        width: 100%;
        margin-bottom: 1rem;
    }

    .actors{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 0.5rem;
    }

    .actor-item {
        padding: 0.5rem;
        background-color: var(--background-color);
        border-radius: 5px;
    }

    .img-actor-container{
        width: 100%;
        height: 10rem;
        margin-bottom: 0.5rem;
    }

    .img-actor {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .actor-text p{
        font-size: 0.8rem;
    }

    .button-visible-container {
        text-align: right;
    }

    .button-visible {
        margin-top: 0.5rem;
        font-size: 1rem;
        right: 0;
        background: none;
        border: none;
        text-decoration: underline;
    }
</style>