<template src="./Jumbotron.pug" lang="pug"></template>

<script>
    import PrimaryButton from "../controls/button/PrimaryButton.vue";
    import ScrollText from "@/components/scrolltext/ScrollText.vue";

    export default {
        props: {
            showVideo: {
                type: Boolean,
                default: false
            },
            showVideoOverlay: {
                type: Boolean,
                default: true
            },
            showImage: {
                type: Boolean,
                default: false
            },
            bgImage: {
                type: String
            },
            bgColor: {
                type: String
            },
            heightClass: {
                type: String
            },
            overLayColor: {
                type: String
            },
            showArrow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                title: "Dein persönlicher Finanzkompass",
                subtitles: ['Einfach', 'Zeitsparend', 'Leicht umzusetzen']
            };
        },
        components: {
            pbtn: PrimaryButton,
            ScrollText
        }
    }
</script>

<style scoped>

  video {
    object-fit: cover;
    width: 100%;
  }

  .jumbotron-custom {
    height: auto;
    position: relative;
  }

  .action-container {
    display: flex;
    justify-content: center;
  }

  .action-container a {
    margin-top: 5px;
  }

  .description {
    margin-top: 50px;
  }

  .jumbotron-h1 {
    font-size: 2.5rem;
  }

  .jumbotron-container {
    width: 90%;
    margin: 30px auto;
    z-index: 5;
    text-align: center;
  }

  .jumbotron-container .description {
    font-size: 1.2rem;
  }

  .jumbotron-image {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    display: flex;
  }

  .jumbotron-custom {
    height: 100vh;
    width: 100%;
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
    display: flex;
  }

  .video-color-overlay, .image-color-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(102, 102, 102, 0.8);
  }

  body {
    background:#0b1d2a;
  }

  .arrows {
    width: 60px;
    height: 72px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    bottom: 20px;
  }

  .arrows path {
    stroke: var(--secondary-color);
    fill: transparent;
    stroke-width: 1px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }

  @keyframes arrow
  {
    0% {opacity:0}
    40% {opacity:1}
    80% {opacity:0}
    100% {opacity:0}
  }

  @-webkit-keyframes arrow /*Safari and Chrome*/
  {
    0% {opacity:0}
    40% {opacity:1}
    80% {opacity:0}
    100% {opacity:0}
  }

  .arrows path.a1 {
    animation-delay:-1s;
    -webkit-animation-delay:-1s; /* Safari 和 Chrome */
  }

  .arrows path.a2 {
    animation-delay:-0.5s;
    -webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
  }

  .arrows path.a3 {
    animation-delay:0s;
    -webkit-animation-delay:0s; /* Safari 和 Chrome */
  }

  @media all and (min-width: 736px) {
    .jumbotron-h1 {
      font-size: 4rem;
    }

    .jumbotron-container {
      width: 80%;
      margin: 0 auto;
      z-index: 5;
    }

    .action-container {
      justify-content: space-around;
    }
  }
</style>
