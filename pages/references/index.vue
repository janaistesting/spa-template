<template src="./Index.pug" lang="pug"></template>

<script>
    import Reference from "@/components/reference/Reference";
    import References from "@/static/references.json";

    export default {
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

  .page-wrapper {
    background-color: red;
  }

  .page {
    padding: 300px 0 100px 0;
    width: 100%;
    margin: 0 auto;
  }

  .references-container {
    justify-content: center;
  }

  @media all and (min-width: 768px) {
    .page {
      padding: 300px 0 100px 0;
      width: 80%;
      margin: 0 auto;
    }
  }

  @media all and (min-width: 905px) {
    .references-container {
      justify-content: space-between;
    }
  }
</style>
