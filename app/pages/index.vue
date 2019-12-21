<template src="./Index.pug" lang="pug"></template>

<script>
    import Jumbotron from "../components/jumbotron/Jumbotron.vue";
    import PageStatement from "../components/page/Page.vue";
    import PrimaryButton from "../components/controls/button/PrimaryButton.vue";
    import Parallax from "../components/parallax/Parallax.vue";
    import VideoContainer from "@/components/videocontainer/VideoContainer";
    import Modal from "@/components/modal/Modal.vue";
    import VideoIFrame from "@/components/controls/video/VideoIFrame.vue";

    export default {
        components: {
            Jumbotron,
            PageStatement,
            pbtn: PrimaryButton,
            Parallax,
            VideoContainer,
            Modal,
            VideoIFrame
        }
    }
</script>

<style>

  jumbotron {
    height: auto !important;
  }

  .custom-jumbrotron-1 h1, .custom-jumbrotron-1 p, .custom-jumbrotron-1 h2, .custom-jumbrotron-2 h1, .custom-jumbrotron-2 p, .custom-jumbrotron-2 h2 {
    color: var(--write-color);
    margin: 50px 0;
    text-align: center;
  }

  .custom-jumbrotron-3 *, .custom-jumbrotron-2, .custom-jumbrotron-4, .custom-jumbrotron-5, .custom-jumbrotron-6 {
    text-align: center;
  }

  .custom-jumbrotron-6 p {
    color: black !important;
  }

  .custom-jumbrotron-6 h2 {
    color: var(--primary-color);
    font-weight: 600;
  }

  .custom-jumbrotron-6 .references {
    text-align: left !important;
  }

  .custom-jumbrotron-6 .headline {
    margin-bottom: 50px;
  }

  .custom-jumbrotron-6 .people {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 1.2rem;
  }

  .custom-jumbrotron-5-img {
    display: block;
    margin: 0 auto;
    border-radius: 500px;
    max-width: 400px;
    width: 100%;
    height: auto;
  }

  .stepper-container {
    display: flex;
    flex-flow: column;
    justify-items: center;
    transform: scale(1);
    transition: transform 1s ease;
  }

  .stepper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(15, 54, 97, 0.8);
    height: 150px;
    width: 150px;
    border-radius: 100px;
    margin: 15px auto;
  }

  .stepper-container:hover {
    transform: scale(1.1);
    transition: transform 1s ease;
  }

  @media all and (min-width: 736px) {
    .custom-jumbrotron-1 {
      padding: 30px;
    }
  }

  @media all and (min-width: 1024px) {
    .stepper {
      height: 200px;
      width: 200px;
    }
  }
</style>
