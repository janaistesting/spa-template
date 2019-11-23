<template src="./Navigation.pug" lang="pug"></template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                navItems: [
                    {
                        title: 'Startseite',
                        url: '/'
                    },
                    {
                        title: 'Terminvereinbarung',
                        url: 'appointment'
                    },
                    {
                        title: 'Videos',
                        url: 'nav2'
                    },
                    {
                        title: 'Impressum',
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

  .navbar {
    padding: 0.5rem 0;
  }

  .navigation #nav-collapse {
    justify-content: flex-end !important;
  }

  .navigation #nav-collapse ul {
    margin: 5px 30px 5px 0 !important;
  }

  /* Set color for nav anchors */
  .navigation a {
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
