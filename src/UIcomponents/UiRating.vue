<template>
    <div class="movie-rating-container" :class="returnColorRating">
        <p class="rating-p">{{ returnFormattedRating }}</p>
    </div>
</template>

<script>

    export default {
        props: ['rating', 'voteCount'],

        computed: {
            returnFormattedRating() {
                if(this.voteCount === 0) return 'NR';
                return (Math.floor(this.rating * 10) / 10).toFixed(1);
            },

            returnColorRating() {
                if (this.voteCount === 0) return 'no-grade';
                const rating = (Math.floor(this.rating * 10) / 10).toFixed(1);
                if (rating < 5) return 'bad-rating';
                if (rating >= 5 && rating < 6.5) return 'medium-rating';
                if (rating >= 6.5 && rating <= 7.5) return 'good-rating';
                if (rating > 7.5) return 'excellent-rating';
            }
        }
    }

</script>

<style scoped>

    .movie-rating-container{
        padding: 0.2rem 0.5rem;
        margin: 0.5rem;
        right: 0;
        position: absolute;
        display: flex;
        align-items: center;
    }

    .no-grade{
        background-color: #b0b0b0;
    }

    .bad-rating {
        background-color: #b91c1c;
    }

    .medium-rating {
        background-color: #d97706;
    }

    .good-rating {
        background-color: #1f3a2a;
    }

    .excellent-rating {
        background-color: #059669;
    }

    .rating-p {
        color: #e6e6e6;
    }

</style>