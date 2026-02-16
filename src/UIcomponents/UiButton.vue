<template>

        <button class="button-classic">
            <slot></slot>
        </button>        

</template>

<style scoped>

    .button-classic{
        border-radius: 5px;
        border: none;
        height: 100%;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        background: #6b8afd;
        color: #e6e6e6;
        transition: 0.3s;
    }

    .button-classic:hover{
        background: #7c97ff;
        transition: 0.3s;
    }

    .button-classic:active{
        background: #5a78e6;
        transform: translateY(2px);
        transition: 0.3s;
    }
    
</style>