<template>
    <div id="SideBar">
      <div v-for="site in sites" :key="site._id">
        <div><a :href="site.url">{{site.url}}</a>
          <span v-if="site.currentStatus === 'Online'">
            <i class="fa fa-circle" aria-hidden="true" style="color:green"> ✓</i>
          </span>
          <span v-else-if="site.currentStatus === 'Offline'">
            <i class="fa fa-circle" aria-hidden="true" style="color:red">x</i>
          </span>
        </div>
      </div>
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
        width: fit-content;
        height: fit-content;
        left: 0;
        border: 1px solid black;
        align-items: center;
        padding: 10px;
    }

    #SideBar a{
        text-decoration: none;
        color: blue;
    }
</style>