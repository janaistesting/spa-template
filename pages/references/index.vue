<template src="./Index.pug" lang="pug"></template>

<script>
    import Reference from "@/components/reference/Reference";

    export default {
        data() {
            return {
                references: [
                    {
                        image: 'florian_danger.JPG',
                        name: 'Florian Danger',
                        profession: 'Fluggerätemechaniker',
                        text: '„Unser Erstgespräch war total klasse und hat mir die Augen geöffnet“'
                    },
                    {
                        image: 'florian_danger.JPG',
                        name: 'Florian Danger',
                        profession: 'Fluggerätemechaniker',
                        text: '„Unser Erstgespräch war total klasse und hat mir die Augen geöffnet“'
                    }
                ]
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
    padding-top: 300px;
    width: 80%;
    margin: 0 auto;
  }

  .references-container {

  }
</style>
