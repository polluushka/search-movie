<template>
    <div class="videos-container">
        <h2 class="subtitle">Трейлеры</h2>
        <div class="videos">
            <ui-button v-if="videos.length > 3 && this.scrollCount > 0" id="leftVideo"
                @click="scrollLeft"><i class="fa-solid fa-chevron-left"></i></ui-button>
            <div class="scroll-line">
                <div class="video-item" v-for="video in videos">
                    <iframe class="video-iframe" v-if="video" :src="`https://www.youtube.com/embed/${video.key}`" allowfullscreen frameborder="0" 
                    allow="autoplay; encrypted-media; picture-in-picture">
                    </iframe>
                </div>                
            </div>
            <ui-button v-if="videos.length > 3 && this.scrollCount < (videos.length - 3)" id="rightVideo"
                @click="scrollRight"><i class="fa-solid fa-chevron-right"></i></ui-button>
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

        data() {
            return {
                scrollCount: 0
            }
        },

        methods: {
            scrollVideo() {
                const videoItemWidth = document.querySelector('.video-item').offsetWidth;
                const scrollLine = document.querySelector('.scroll-line');
                scrollLine.style.transform = `translateX(-${videoItemWidth * this.scrollCount}px)`;
            },

            scrollRight() {
                this.scrollCount++;
                this.scrollVideo();
            },

            scrollLeft() {
                this.scrollCount--;
                this.scrollVideo();
            },


        }


    }

</script>

<style scoped>
    .videos-container {
        width: 100%;
    }

    .videos {
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .scroll-line {
        display:flex;
        transition: 0.3s;
    }

    .video-item{
        flex: 0 0 calc((100% - 1.5rem) / 3);
        margin-right: 0.5rem;
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
        z-index: 99;
        position: absolute;
        padding: 0;
        width: 2rem;
        height: 2rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .button-classic:active{
        transform: translateY(-45%);
    }

    #rightVideo{
        right: 0;
    }

    #leftVideo{
        left: 0;
    }


</style>