<template>
  <div class="container">

    <ui-header></ui-header>

    <router-view />
    
  </div>
</template>

<script>

  import UiHeader from './UIcomponents/UiHeader.vue';

  export default {

    components: {
      UiHeader,
    },

    
  }
</script>