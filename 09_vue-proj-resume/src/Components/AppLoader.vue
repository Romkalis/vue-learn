<template>
  <div class="loader" v-if="isLoading"></div>
</template>


<script>
  export default {
    props: ['isLoading']
  }
</script>

