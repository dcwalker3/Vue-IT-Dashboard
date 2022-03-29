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
        type="submit"
        class="submitBtn"
    >Login</button>

    <div>
      Don't have an account? <router-link to="/signup">Click Here!</router-link>
    </div>

    <!-- User Messages -->
    <div class="msg textDisplay">{{ msg }}</div>
    <div class="err textDisplay">{{ error }}</div>

    <div class="message mb-2">{{ msg }}</div>
    <div class="error mb-2">{{ error }}</div>
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

        if(res.status === 200 || res.status === 201) {
          let data = await res.text();
          console.log(data);
          await this.$router.push('/');
        } else{
          this.error = "There was an error logging in. Pleases Try Again!"
        }
      } catch {
        this.error = "There was an error logging in. Please Try Again!";
        this.loading = false;
      }
    }
  }
}
</script>