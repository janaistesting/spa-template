<template src="./Parallax.pug" lang="pug"></template>

<script>
    export default {
        name: "Parallax"
    }
</script>

<style scoped>

  ::-webkit-scrollbar {
    display: none;
  }

  .parrallax-container {
    position: relative;
    width: 100%;
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 8px;
    perspective-origin: 0;
    display: flex;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(0px);
  }

  .foreground {
    margin-top: auto;
    margin-bottom: 50px;
    transform-origin: 0;
    transform: translateZ(3px);
  }

  .foreground h1 {
    font-size: 36px;
  }

</style>
