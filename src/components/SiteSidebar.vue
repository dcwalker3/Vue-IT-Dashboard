<template>
    <div id="SideBar">
      <div id="ToolBar">

      </div>
      <table id="SiteStatusTable">
        <tr>
          <th>URL</th>
          <th>Status</th>
        </tr>
        <tr v-for="site in sites" :key="site._id">
          <td>{{ site.url }}</td>
          <td>{{site.currentStatus}}</td>
        </tr>
      </table>

    </div>
</template>

<script>

    const axios = require('axios');

    export default {
        name: "Site-Sidebar",
        data() {
            return {
                sites: [],
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

<style scoped>
    #SideBar {
        position: relative;
        display: flow;
        width: 15%;
        height: fit-content;
        left: 0;
        border: 1px solid black;
        border-radius: 5px;
        align-items: center;
        padding: 10px;
        font-family: Ariel, sans-serif;
        background-color: rgba(241, 236, 236, 0.47);
    }

    #SideBar a{
        text-decoration: none;
        color: inherit;
    }

    #SiteStatusTable {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border: 1px solid black;
        border-radius: 5px;
        font-family: Ariel, sans-serif;
    }

    #SiteStatusTable th {
        padding: 10px;
        border-bottom: 1px solid white;
        border-top: 1px solid white;
        border-right: 1px solid white;
        border-left: 1px solid white;
        color: white;
        background-color: rgb(0, 0, 0);
    }

    #SiteStatusTable td {
        padding: 10px;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
        border-right: 1px solid black;
        border-left: 1px solid black;
        background-color: rgba(241, 236, 236, 0.47);
    }

    #SiteStatusTable tr:hover {
        background-color: rgba(164, 157, 157, 0.47);
      cursor: pointer;
    }

</style>