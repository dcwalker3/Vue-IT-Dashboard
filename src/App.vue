<template>
  <v-app>
    <v-main>
      <NavBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
require('./StyleSheets/SiteStatusBar.css');
require('./StyleSheets/Forms.css');

import NavBar from "@/components/NavBar";
export default {
  name: 'App',

  // NavBar Component has to be rendered outside a view so
  // that it can be displayed on all pages and not just the one view.
  components: {NavBar},
  data: () => ({
  }),
}
</script>
