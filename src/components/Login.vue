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
        class="SubmitBtn"
        type="submit"
    >Submit</button>
  </form>
</template>

<script>
export default {

  name: "Login-Component",
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    // Submit function.
    submitForm: async function () {

      // Launch Fetch request
      fetch('http://localhost:3000/user', {
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
          .then(res => console.log(res))
          .catch(error => console.log(`error: ${error}`))


    }
  }
}
</script>
