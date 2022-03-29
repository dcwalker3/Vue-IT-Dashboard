<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from "@/components/NavBar";
require('./StyleSheets/SiteStatusBar.css');

export default {
  components: {NavBar}
}
</script>

<style>
  @import "StyleSheets/Forms.css";
</style>