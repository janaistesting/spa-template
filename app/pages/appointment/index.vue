<template src="./Index.pug" lang="pug"></template>

<script>
  import Form from '@/components/form/Form.vue';
  import Jumbotron from "@/components/jumbotron/Jumbotron.vue";

  export default {
    head() {
      return {title: 'Terminvereinbarung'};
    },
    components: {
      Form,
      Jumbotron
    }
  }
</script>

<style scoped>

</style>
