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

  .ff-title, .ff-title-small {
    color: black !important;
    margin-top: 50px;
  }

  .content * {
    text-align: center;
    color: #7f7f7f;
  }
</style>
