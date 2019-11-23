<template src="./Jumbotron.pug" lang="pug"></template>

<script>
    export default {
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

  .jumbotron-h1 {
    font-size: 2.5rem;
  }

  .jumbotron-container {
    width: 80%;
    margin: 0 auto;
  }

  .jumbotron-custom {
    background-color: red;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .jumbotron {
    height: 200px;
  }

  @media all and (min-width: 736px) {

    .jumbotron-h1 {
      font-size: 4rem;
    }
  }
</style>
