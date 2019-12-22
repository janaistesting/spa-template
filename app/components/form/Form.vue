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
        console.log("Hello");
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

<style>
  .form-group label, .form-container .form-error {
    text-align: left !important;
  }
</style>

<style scoped>

  .form-container {
    margin: 0 auto;
    max-width: 800px;
    padding: 30px;
    background-color: rgba(223, 123, 38, .5);
    border-radius: 5px;
  }

  .form-container .title {
    text-align: center;
  }

  .form-container a {
    max-width: 800px;
  }
</style>
