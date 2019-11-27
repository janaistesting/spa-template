<template>
  <div>
    <Navigation></Navigation>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
    import Navigation from "../components/navigation/Navigation";
    import Footer from "../components/footer/Footer";

    export default {
        components: {
            Navigation,
            Footer
        }
    }
</script>

<style>

</style>
