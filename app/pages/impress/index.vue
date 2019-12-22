<template src="./Index.pug" lang="pug"></template>

<script>
  export default {
    head() {
      return {title: 'Impressum'};
    },
  }
</script>

<style scoped>
  .header {
    height: 450px;
    background-color: var(--primary-color);
    box-shadow: 0 2px 5px 0 gray;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    z-index: 5;
    transform: translateX(-2000px);
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: .5s;
    animation: slide 0.5s forwards;
    animation-delay: .5s;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  .content {
    padding: 50px 0;
    width: 100%;
    margin: 0 auto;
  }

  .ff-title, .ff-title-small {
    color: black !important;
    margin-top: 50px;
  }

  .content * {
    text-align: center;
    color: #7f7f7f;
  }

  @-webkit-keyframes slide {
    0% {
      transform: translateX(-2000px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(-2000px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .page-container {
    background-color: #f8f8f8;
  }

  @media all and (min-width: 768px) {
    .content {
      width: 80%;
    }
  }
</style>
