<template>
    <div id="SideBar">
      <div id="ToolBar">
        <span id="addSite">+</span>
        <span id="removeSite">-</span>
      </div>
      <table id="SiteStatusTable">
        <tr>
          <th>URL</th>
          <th>Status</th>
        </tr>
        <tr v-for="site in sites" :key="site._id">
          <td class="url">{{ site.url }}</td>
          <td>{{site.currentStatus}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
  import Button from '@mui/material/Button';
  import TextField from '@mui/material/TextField';
  import Dialog from '@mui/material/Dialog';
  import DialogActions from '@mui/material/DialogActions';
  import DialogContent from '@mui/material/DialogContent';
  import DialogContentText from '@mui/material/DialogContentText';
  import DialogTitle from '@mui/material/DialogTitle';

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
