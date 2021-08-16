<template>
  <div id="app">
    <!-- <signin/>
    <signup/> -->
    <!-- For a dynamic component -->
    <component v-bind:is="cmp"></component>
      <button v-on:click="updateCmp('signin')">Sign In !! </button>
      <button v-on:click="updateCmp('signup')">Sign Up !! </button>
    
  </div>
</template>

<script>
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

export default {
  name: 'App',
  components: {
    'signin':SignIn,
    'signup':SignUp
  },data(){
    return {cmp:'signup'}
  },methods:{
    updateCmp(item){
      this.cmp=item;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
