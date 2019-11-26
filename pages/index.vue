<template src="./Index.pug" lang="pug"></template>

<script>
    import Jumbotron from "../components/jumbotron/Jumbotron.vue";
    import PageStatement from "../components/page/Page.vue";
    import PrimaryButton from "../components/controls/button/PrimaryButton.vue";

    export default {
        data() {
            return {};
        },
        components: {
            Jumbotron,
            PageStatement,
            pbtn: PrimaryButton

        }
    }
</script>

<style>

  jumbotron {
    height: auto !important;
  }

  .custom-jumbrotron-1 h1, .custom-jumbrotron-1 p, .custom-jumbrotron-1 h2 {
    color: var(--write-color);
    margin: 50px 0;
    text-align: center;
  }

  .custom-jumbrotron-1 h2 {
    margin-top: 150px !important;
  }

  @media all and (min-width: 736px) {
    .custom-jumbrotron-1 {
      padding: 30px;
    }
  }
</style>
