<template>
  <!-- Make sure the dialog is centered. -->
  <v-row justify="center">

    <!-- The dialog itself will be persistent (If you click outside it won't close. -->
    <v-dialog
        v-model="dialog"
        persistent
    >

      <!-- Button that when clicked displays the dialog.-->
      <template v-slot:activator="{ props }">
        <v-btn
            color="red"
            v-bind="props"
        >
          Remove Site
        </v-btn>
      </template>

      <!-- The dialog content. -->
      <v-card
          theme="dark"
      >

        <!-- The dialog header. -->
        <v-card-title>
          <span class="text-h5">Add Site to be tracked</span>
        </v-card-title>

        <!-- The dialog body. -->
        <!--
          TODO: Fix the select menu going all over and off screen.
        -->
        <v-card-text>
          <v-container>
            <v-select
                :items="this.urlAddresses"
                label="Sites"
                v-model="this.delURL"
                ></v-select>
          </v-container>
        </v-card-text>

        <!-- Actions to be take by dialog based off button clicks. -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- Save and close buttons to finally end the dialog. -->
          <v-btn
              color="blue-darken-1"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>

          <v-btn
              color="blue-darken-1"
              text
              @click="deleteSite"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

import axios from "axios";

export default {
  name: "RemoveSite",

  props: {
    sites: {
      type: Array,
      required: true
    }
  },

  // Data Variables
  data: () => ({
    // Determines if Component is showing or not.
    dialog: false,

    // URLs we wish to display
    urlAddresses: [],

    // The URL we wish to remove
    delURL: "",
  }),

  methods: {
    getUrlAddress() {
      for(let i = 0; i < this.sites.length; i++) {
        this.urlAddresses.push(this.sites[i].url);
      }
      console.log(this.urlAddresses);
    },

    deleteSite() {
      axios.delete('http://localhost:4000/site/delete/' + this.delURL)
      .then(res => {
        console.log(res);
        this.dialog = false;
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    // When the component is mounted, we want to show the dialog.
    console.log(this.sites);
    this.getUrlAddress();
  }
}
</script>

<style scoped>

</style>