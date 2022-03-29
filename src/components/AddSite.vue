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
            color="green"
            v-bind="props"
        >
          Add Site
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
        <v-card-text>
          <v-container>
            <v-text-field
              label="Site URL/IP Address"
              required
              v-model="this.urlAddress"
            >
            </v-text-field>
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
              @click="addSite"
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
  name: "AddSite",

  // Data Variables
  data: () => ({
    // Determines if Component is showing or not.
    dialog: false,

    // URL we wish to save
    urlAddress: ""
  }),

  methods: {
    // How we add a site with our API backend.
    addSite(){
      axios({
        method: "POST",
        url: "http://localhost:4000/site/add",
        data: {
          url: this.urlAddress
        }
      })
      // On Success Reload the window and close the dialog.
      .then(() => {
        window.location.reload();
        this.dialog = false
      })
      // Basic Error Handling
      .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>