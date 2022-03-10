<template>
  <form class="InputForms" id="LoginForm" v-on:submit.prevent="submitForm">
    <h3>Login</h3>

    <!-- Email Input -->
    <label for="emailInput">Email: </label><br>
    <input
        name="emailInput"
        id="emailInput"
        type="email"
        required
        placeholder="Email Address"
        v-model="email"
    /><br/>

    <!-- Password Input -->
    <label for="passwordInput">Password: </label><br>
    <input
        name="passwordInput"
        id="passwordInput"
        type="password"
        required
        placeholder="******"
        v-model="password"
    /><br/>

    <!-- Confirm Password -->
    <label for="confirmPasswordInput">Confirm Password: </label><br>
    <input
        name="confirmPasswordInput"
        id="confirmPasswordInput"
        type="password"
        required
        placeholder="******"
        v-model="confirmPassword"
    /><br/>

    <button
        class="SubmitBtn mb-2"
        type="submit"
    >Submit</button>
    <div class="message mb-2">{{ msg }}</div>
    <div class="error mb-2">{{ error }}</div>
  </form>
</template>

<script>
export default {

  name: "Login-Component",
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      msg: '',
      error: ''
    }
  },
  methods: {
    // Submit function.
    submitForm: async function () {
      // Set Messages to null
      this.error = "";
      this.msg = "";

      try {
        // Confirm Passwords Match
        if (this.password === this.confirmPassword) {
          console.log('They Match');

          // Launch Fetch request
          let response = await fetch('http://localhost:3000/user', {
            // headers and methods
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            // Stringify Input
            body: JSON.stringify({
              email: this.email,
              password: this.password,
              confirmPassword: this.confirmPassword
            })
          })

          let data = await response.text();
          console.log(data)
          console.log(typeof data)

        } else {
          this.error = "Please Make Sure Your Passwords Match";
        }
      } catch (e){
        console.log(e);
        this.error = "There was an error trying to signup please try again!"
      }
    }
  }
}
</script>
