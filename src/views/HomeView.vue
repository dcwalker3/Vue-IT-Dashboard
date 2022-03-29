<template>
  <SiteSidebar/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import SiteSidebar from "@/components/SiteSidebar";

export default defineComponent({
  name: 'HomeView',

  components: {
    SiteSidebar,
  },
});
</script>
