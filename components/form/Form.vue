<template src="./Form.pug" lang="pug"></template>

<script>
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'
    import Input from "@/components/controls/input/Input.vue";

    export default {
        data(){
            return {
              name: ''
            };
        },
        validations: {
            name: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(50)
            },
        },
        components: {
            Input
        }
    }
</script>

<style scoped>

</style>
