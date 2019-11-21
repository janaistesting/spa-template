<template src="./Navigation.pug" lang="pug"></template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                navItems: [
                    {
                        title: 'Startseite',
                        url: 'startseite'
                    },
                    {
                        title: 'Nav1',
                        url: 'nav1'
                    },
                    {
                        title: 'Nav2',
                        url: 'nav2'
                    }
                ]
            };
        }
    }
</script>

<style>
  .navigation {
    width: 100%;
    background-color: var(--primary-color);
  }

  .navigation #nav-collapse {
    justify-content: flex-end !important;
  }

  .navigation #nav-collapse ul {
    margin: 20px 30px 20px 0 !important;
  }

  /* Set color for nav anchors */
  .navigation .nav-link {
    color: var(--write-color) !important;
    font-weight: 600;
    font-size: 20px;
  }

  .navigation .bg-info {
    background-color: transparent !important;
  }

  @media all and (min-width: 768px) {
    .navigation nav {
      width: 80%;
      margin: 0 auto;
    }
  }
</style>
