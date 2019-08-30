<template>

  <div id="app">

    <div class="container">

      <!-- Input New Students & Grades -->
      <student-input></student-input>

      <!-- List Of All Students & Grades -->
      <student-list></student-list>

    </div>

  </div>

</template>

<script>

  import StudentInput from './components/StudentInput.vue'
  import StudentList from './components/StudentList.vue'

  export default {

    name: 'app',

    components: {

      StudentInput,

      StudentList,

    },

    created() {
        
      // Initializes data stored in the json file
      this.$store.dispatch('initStudents')
        
    },

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
