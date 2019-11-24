<template src="./Jumbotron.pug" lang="pug"></template>

<script>
    export default {
        props: {
            showVideo: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                title: "Dein persönlicher Finanzkompass",
                subtitle: "Einfach. Zeitsparend."
            };
        }
    }
</script>

<style scoped>

  .action-container {
    display: flex;
    justify-content: space-between;
    margin: 50px 0 0 0;
  }

  .action-container a {
    display: block;
    margin-top: 5px;
  }

  .description {
    margin-top: 50px;
  }

  .jumbotron-h1 {
    font-size: 2.5rem;
  }

  .jumbotron-container {
    width: 80%;
    margin: 0 auto;
  }

  .jumbotron-custom {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .jumbotron {
    height: 200px;
  }

  .video-container {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
  }

  .video-color-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(102, 102, 102, 0.8);
  }

  @media all and (min-width: 736px) {

    .jumbotron-h1 {
      font-size: 4rem;
    }
  }
</style>
