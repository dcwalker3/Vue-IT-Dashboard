<template>
  <form class="InputForms" id="LoginForm" v-on:submit.prevent="submitForm">
    <h3>Sign Up</h3>

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
        class="SubmitBtn"
        type="submit"
    >Sign Up</button>

    <!-- User Messages -->
    <div class="msg textDisplay">{{ msg }}</div>
    <div class="err textDisplay">{{ error }}</div>
  </form>
</template>

<script>
export default {

  name: "Signup-Component",
  data() {
    return {
      loading: false,
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
      this.error = "";
      this.msg = "";
      this.loading = true;

      try {
        if(this.password === this.confirmPassword) {
          // Launch Fetch request
          let response = await fetch('http://localhost:3000/user/signup', {
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


          let data = await response.text();
          console.log(data);
          if(response.status === 201 || response.status === 200){
            await this.$router.push('/');
          } else {
            console.log(`Status Code was ${response.status}`)
          }

        } else{
          this.error = "Please make sure your passwords match before trying again."
          this.loading = false;
        }
      } catch {
        this.error = "There was an error signing up. Please Try Again!";
        this.loading = false;
      }
    }
  }
}
</script>
