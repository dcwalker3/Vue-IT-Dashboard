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

    <button
        class="SubmitBtn mb-2"
        type="submit"
<<<<<<< HEAD
    >Login</button>

    <div>
      Already have an account?<router-link to="/signup">Click Here!</router-link>
    </div>

    <!-- User Messages -->
    <div class="msg textDisplay">{{ msg }}</div>
    <div class="err textDisplay">{{ error }}</div>
=======
    >Submit</button>
    <div class="message mb-2">{{ msg }}</div>
    <div class="error mb-2">{{ error }}</div>
>>>>>>> 3c6f615bef0e239b8496f4c2b85551a02e29af91
  </form>
</template>

<script>
export default {

  name: "Login-Component",
  data() {
    return {
      loading: false,
      email: '',
      password: '',
<<<<<<< HEAD
=======
      confirmPassword: '',
>>>>>>> 3c6f615bef0e239b8496f4c2b85551a02e29af91
      msg: '',
      error: ''
    }
  },
  methods: {
    // Submit function.
    submitForm: async function () {
<<<<<<< HEAD
      this.error = "";
      this.msg = "";
      this.loading = true;

      try {
          // Launch Fetch request
          let res = await fetch('http://localhost:3000/user/login', {
            // headers and methods
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            // Stringify Input
            body: JSON.stringify({
              email: this.email,
              password: this.password
            })
          })


          let data = await res.text();
          console.log(data);
          await this.$router.push('/');

      } catch {
        this.error = "There was an error signing up. Please Try Again!";
        this.loading = false;
=======
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
>>>>>>> 3c6f615bef0e239b8496f4c2b85551a02e29af91
      }
    }
  }
}
</script>