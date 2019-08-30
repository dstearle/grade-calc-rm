<template>

  <div id="app">

    <student-input></student-input>

  </div>

</template>

<script>

import StudentInput from './components/StudentInput.vue'

export default {

  name: 'app',

  components: {

    StudentInput

  }

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
