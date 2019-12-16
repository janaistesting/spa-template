<template src="./Reference.pug" lang="pug"></template>

<script>
    export default {
        props: ['image', 'name', 'profession', 'text']
    }
</script>

<style scoped>
  ;page-wrapper {
  }
  .reference-wrapper {
    max-width: 300px;
    background-color: var(--disable-color);
    padding: 50px;
    margin: 20px;
  }
</style>
