<template>
    <div id="SideBar">
      <div id="ToolBar">
        <div class="mb-4 mt-4 ml-4 d-inline-flex">
          <AddSite class="mr-4"/>
          <RemoveSite v-bind:sites="this.sites"/>
        </div>
      </div>
      <table id="SiteStatusTable">
        <tr>
          <th>URL</th>
          <th>Status</th>
        </tr>
        <tr v-for="site in sites" :key="site._id">
          <td class="url"><a v-bind:href="'https://'+site.url" target="_blank">{{ site.url }}</a></td>
          <td>{{site.currentStatus}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
  import AddSite from "@/components/AddSite";
  import RemoveSite from "@/components/RemoveSite";

  const axios = require('axios');

  export default {
    name: "Site-Sidebar",
    components: {AddSite, RemoveSite},
    data() {
          return {
              sites: [],
              displayAddSiteComponent: false,
          }
      },

      methods: {
      },
      mounted(){
         axios.get('http://localhost:4000/site/getAll')
         .then(response => {
           console.log(response.data);
             this.sites = response.data;
         })

      }

  }
</script>
