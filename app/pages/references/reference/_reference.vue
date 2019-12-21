<template src="./Reference.pug" lang="pug"></template>

<script>
    import References from "@/static/references.json";

    export default {
        created() {
            if (this.$route.params) {
                const {reference: name} = this.$route.params;
                this.reference = this.findByName(name);
            }
        },
        data() {
            return {
                reference: {}
            }
        },
        methods: {
            findByName(name) {
                return References.filter(entry => entry.id === name)[0];
            }
        }
    }
</script>

<style>
  .ref-line {
    color: #7f7f7f;
  }
</style>

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

  .page-wrapper {
    background-color: white;
  }

  .name {
    color: black !important;
  }

  .longtext {
    margin: 0 auto;
    width: 100%;
  }

  .end {
    color: black !important;
    font-size: 1.2rem;
    margin: 0 auto;
  }

  .end-text {
    width: 100%;
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

  .text {
    padding-top: 100px;
  }

  .content * {
    text-align: center;
    color: #7f7f7f;
  }

  .ref-image {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
  }

  .ref-image img {
    position: absolute;
    max-width: 250px;
    max-height: 250px;
    border-radius: 100px;
    border: 4px white solid;
    top: -100px;
  }

  @media all and (min-width: 768px) {
    .longtext {
      width: 80%;
    }

    .end-text {
      margin: 0 auto;
      width: 80%;
    }
  }
</style>
