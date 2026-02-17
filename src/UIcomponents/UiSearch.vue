<template>
    <div class="search-container">
        <input type="text" id="search" name="search" class="search-input filter-settings"
         placeholder="Поиск" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script> 

    export default{
        emits: ['update:modelValue'],

        props: {
            modelValue: {
                type: String,
                required: true,
                default: ''
            }
        }
    }

</script>

<style scoped>

    .search-container{
        width: 100%;
        display: flex;
    }

    .search-input{
        margin-right: 0.3rem;
    }

    .search-input::placeholder {
        color: var(--placeholder-color);
    }

</style>