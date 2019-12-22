<template src="./Index.pug" lang="pug"></template>

<script>
  import Reference from "@/components/reference/Reference";
  import References from "@/static/references.json";

  export default {
    head() {
      return {title: "Finanzkompass Referenzen"};
    },
    data() {
      return {
        references: References
      };
    },
    components: {
      Reference
    }
  }
</script>

<style scoped>

  .header {
    height: 450px;
    background-image: url("../../static/img/reference.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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


  .image-color-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(102, 102, 102, 0.5);
  }

  .page-wrapper {
    background-color: #f8f8f8;
  }

  .page {
    padding: 50px 0;
    width: 100%;
    margin: 0 auto;
  }

  .references-container {
    justify-content: center;
  }

  @media all and (min-width: 768px) {
    .page {
      width: 80%;
    }
  }

  @media all and (min-width: 905px) {
    .references-container {
      justify-content: space-between;
    }
  }
</style>
