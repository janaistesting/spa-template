<template src="./Form.pug" lang="pug"></template>

<script>
    import {required, minLength, maxLength, email} from 'vuelidate/lib/validators'
    import Input from "@/components/controls/input/Input.vue";
    import SubmitButton from "@/components/controls/button/PrimaryButton.vue";

    export default {
        data() {
            return {
                name: '',
                email: "",
                phone: "",
                showForm: true
            };
        },
        validations: {
            name: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(50)
            },
            email: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(50),
                email
            },
            phone: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(20),
            }
        },
        methods: {
            sendEmail() {
                if (!this.$v.$invalid) {
                    this.showForm = false;
                }
            }
        },
        components: {
            Input,
            SubmitButton
        }
    }
</script>

<style scoped>

  .form-container {
    margin: 0 auto;
    max-width: 800px;
    padding: 30px;
    background-color: rgba(15, 54, 97, .5);
    border-radius: 5px;
  }

  .form-container .title {
    text-align: center;
  }

  .form-container a {
    max-width: 800px;
  }
</style>
