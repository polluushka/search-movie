<template>
    <div class="pagination-container">
        <div class="pages-container">
            <ui-button v-if="this.currentPage > 1"
             @click="openPreviousPage()"><i class="fa-solid fa-chevron-left"></i></ui-button>
            <button class="button-pagination" v-for="page in updatePaginationArray"
             @click="getPaginationArray(page)" :class="this.currentPage === page ? 'current-page-button' : ''">{{ page }}</button>
            <ui-button @click="openNextPage()" v-if="this.currentPage < totalPages"><i class="fa-solid fa-chevron-right"></i></ui-button>
            {{ totalPages }}
        </div>
        

    </div>
</template>

<script>

    import UiButton from './UiButton.vue';

    export default {
        components: {
            UiButton
        },

        emits: ['updateCountPage'],

        props: ['totalPages'],
        
        data() {
            return {
                pagination: [],
                minPage: 1,
                maxPage: 9,
                currentPage: 1
            }
        },

        methods: {
            getPaginationArray(page) {
                this.currentPage = page;
                if (this.totalPages <= 9) {
                    this.minPage = 1;
                    this.maxPage = this.totalPages;
                } else {
                    if(this.currentPage + 4 <= this.totalPages) {
                        if (this.currentPage > 5) {
                            this.minPage = page - 4;
                            this.maxPage = page + 4;
                        } else {
                            this.minPage = 1;
                            this.maxPage = 9;
                        } 
                    } else {
                        this.minPage = this.totalPages - 8;
                        this.maxPage = this.totalPages;
                    }
                }
                this.$emit('updateCountPage', this.currentPage);
            },

            openNextPage() {
                this.currentPage++;
                this.getPaginationArray(this.currentPage);
                this.$emit('updateCountPage', this.currentPage);
            },

            openPreviousPage() {
                this.currentPage--;
                this.getPaginationArray(this.currentPage);
                this.$emit('updateCountPage', this.currentPage);
            }
        }, 

        computed: {
            updatePaginationArray() {
                this.pagination = [];
                for (let page = this.minPage; page <= this.maxPage; page++) {
                    this.pagination.push(page);
                }
                return this.pagination;                    

            }
        },

        watch: {
            totalPages() {
                this.getPaginationArray(this.currentPage || 1)
            }
        }
    }
</script>

<style scoped>

    .pagination-container{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 3rem;
    }

    .button-pagination {
        margin: 0 0.5rem;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
        background: transparent;
        border: 1px solid var(--title-color);
        color: var(--title-color);
        border-radius: 5px;
        transition: 0.3s;
    }

    .current-page-button,
    .button-pagination:hover {
        background: var(--title-color);
        color: var(--background-color);
        transition: 0.3s;
    }

    .button-pagination:active {
        transform: translateY(2px);
    }

    .button-classic{
        padding: 0.5rem;
    }


</style>