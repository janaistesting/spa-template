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

<style scoped>

  .page-wrapper {
    background-color: blue;
    padding-top: 300px;
  }

  .page-wrapper img {
    height: 300px;
  }

</style>
