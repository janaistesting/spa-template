<template src="./Reference.pug" lang="pug"></template>

<script>
    export default {
        props: ['image', 'name', 'profession', 'text', 'id']
    }
</script>

<style scoped>

  .ref-background {
    height: 125px;
    background-color: gray;
    box-shadow: 0 2px 5px 0 gray;
  }

  .ref-image {
    width: 70%;
    margin: 0 auto;
    max-width: 170px;
    position: relative;
    height: 100px;
  }

  .ref-meta-text {
    margin-top: 20px;
  }

  .ref-name {
    font-size: 1.2rem;

  }

  .ref-link {

  }

  .ref-meta-info .name {
    font-size: 1.2rem;
    font-weight: 600;
    color: black;
  }

  .ref-meta-info .profession {
    font-size: .8rem;
    font-weight: 600;
    color: var(--disable-color) !important;
  }

  .ref-meta-text p {
    color: black;
  }

  .ref-image img {
    position: absolute;
    width: 100%;
    border-radius: 100px;
    border: 4px white solid;
    top: -75px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .ref-info {
    margin-top: 5px;
    text-align: center;
    height: 180px;
  }

  .ref-link {
    height: 50px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    border-top: 2px solid #ffeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ref-link a {
    color: var(--disable-color);
    font-weight: 600;
    transition: color 0.5s;
  }

  .ref-link a:hover {
    color: black;
    text-decoration: none;
    transition: color 0.5s;
  }

  .reference-wrapper {
    max-width: 350px;
    min-width: 350px;
    max-height: 500px;
    background-color: white;
    margin: 10px;
    transform: scale(1);
    transition: transform 1s;
  }

  .reference-wrapper:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  .reference-wrapper p {
    margin: 0;
  }
</style>
