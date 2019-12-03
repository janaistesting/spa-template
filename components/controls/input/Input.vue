<template src="./Input.pug" lang="pug"></template>

<script>
    export default {
        props: ["value", "id", "label", "errors", "validationmodel"],
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

<style>
  .form-error div {
    font-size: 3rem;
  }
</style>

<style scoped>
  input {
    color: black;
  }

</style>

