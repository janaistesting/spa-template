<template src="./PrimaryButton.pug" lang="pug"></template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: "Button"
            },
            to: {
                type: String
            },
            clazz: {
                type: String,
                default: "primary"
            }
        }
    }
</script>

<style scoped>
  .btn-primary, .btn-transparent {
    padding: 10px 40px;
    text-align: center;
    display: flex;
    max-width: 500px;
    justify-content: center;
    align-items: center;
  }

  .btn-primary {
    background-color: var(--primary-color);
    border-radius: unset;
    border: var(--primary-color) 4px solid;
    transition: border .2s ease-out, color .5s ease-out, background-color .2s ease-out;
  }

  .btn-primary:hover {
    background-color: var(--secondary-color);
    border: var(--secondary-color) 4px solid;
    transition: border .2s ease-out, color .2s ease-out, background-color .2s ease-out;
  }

  .btn-transparent {
    background-color: transparent;
    border: white 4px solid;
    color: var(--write-color);
    font-weight: bold;
    transition: border .2s ease-out, color .2s ease-out;
  }

  .btn-transparent:hover {
    border: var(--disable-color) 4px solid;
    color: var(--disable-color);
    transition: border .2s ease-out, color .2s ease-out;
    text-decoration: none;
  }
</style>
