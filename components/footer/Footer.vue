<template src="./Footer.pug" lang="pug"></template>

<script>
    import PrimaryButton from "../controls/button/PrimaryButton.vue";

    export default {
        data() {
            return {
                navItems: [
                    {
                        title: 'Startseite',
                        url: '/'
                    },
                    {
                        title: 'Finanzkompass',
                        url: 'nav2'
                    },
                    {
                        title: 'Terminvereinbarung',
                        url: 'appointment'
                    },
                    {
                        title: 'Impressum',
                        url: 'impress'
                    }
                ]
            };
        },
        components: {
            pbtn: PrimaryButton
        }
    }
</script>

<style scoped>
  footer {
    width: 100%;
    height: 300px;
    background-color: var(--dark-color);
  }

  .footer-container {
    height: 100%;
    width: 90%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .links-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .nav-item {
    text-align: center;
    display: block;
    padding: 10px;
    color: white;
  }
</style>
