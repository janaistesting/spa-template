<template src="./Input.pug" lang="pug"></template>

<script>
    export default {
        props: ["value", "id", "label", "errors"],
        data(){
            return {
                internValue: this.value
            };
        },
        methods: {
            onInput(){
                this.$emit('input',this.internValue);
            }
        }
    }
</script>

<style scoped>

</style>
