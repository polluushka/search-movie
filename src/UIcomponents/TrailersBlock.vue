<template>
    <div class="videos-container">
        <h2 class="subtitle-movie">Трейлеры</h2>
        <div class="videos">
            <ui-button v-if="videos.length > 3" id="leftVideo"><i class="fa-solid fa-chevron-left"></i></ui-button>
            <div class="video-item" v-for="video in videos">
                <iframe class="video-iframe" v-if="video" :src="`https://www.youtube.com/embed/${video.key}`" allowfullscreen frameborder="0" 
                allow="autoplay; encrypted-media; picture-in-picture">
                </iframe>
            </div>
            <ui-button v-if="videos.length > 3" id="rightVideo"><i class="fa-solid fa-chevron-right"></i></ui-button>
        </div>
    </div>        
</template>

<script>
    import UiButton from './UiButton.vue';

    export default {
        components: {
            UiButton
        },

        props: {
            videos: {
                type: Array,
                required: true
            }
        },


    }

</script>

<style scoped>
    .videos-container {
        width: 100%;
    }

    .videos {
        min-width: 100%;
        display: flex;
        justify-content: start;
        position: relative;
    }

    .video-item{
        width: calc(100% / 3);
        margin-right: 1rem;
        background: var(--background-color);
        height: 15rem;
        border: none;
        border-radius: 10px;
    }

    .video-iframe{
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }

    .button-classic{
        position: absolute;
        padding: 0;
        width: 2rem;
        height: 2rem;
        top: 50%;
        transform: translateY(-50%);
    }

    #rightVideo{
        right: 0;
    }

    #leftVideo{
        left: 0;
    }


</style>