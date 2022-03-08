<template>
  <div id="NavBar">
    <ul id="Links">
      <li class="Brand"><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  NavBar {
    display: flex;
    width: 100%;
  }

  #Links  > li {
    display: inline-block;
    list-style-type: none;
    padding-left: 0;
  }

  #Links {
    background-color: rgb(30, 30, 30);
    padding-left: 0px;
  }

  #Links li{
    color: white;
    padding: 15px;
  }

  #Links a{
    text-decoration: none;
    color: inherit;
  }

  #Links a:hover{
    color: #adadad;
    cursor: pointer;
  }
</style>