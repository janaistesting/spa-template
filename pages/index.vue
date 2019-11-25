<template src="./Index.pug" lang="pug"></template>

<script>
    import Jumbotron from "../components/jumbotron/Jumbotron.vue";
    import ParallaxPage from "../components/parallax/Parallax.vue";

    export default {
        data() {
            return {};
        },
        components: {
            StartPage: Jumbotron,
            SecondPage: ParallaxPage
        }
    }
</script>

<style>
</style>
