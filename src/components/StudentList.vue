<template>

    <div class="container">

        <h4 class="pt-5 pb-2">Student Grades</h4>

        <table class="table table-bordered">

            <!-- Table Headers -->
            <tr class="bg-dark text-white">
                <th>Name</th>
                <th>Math</th>
                <th>History</th>
                <th>Science</th>
                <th>English</th>
                <th>GPA</th>
            </tr>

            <!-- Table Rows -->
            <tr v-for="student of studentList" v-bind:key="student.id">
                <td>{{ student.name }}</td>
                <td>{{ student.math }}</td>
                <td>{{ student.history }}</td>
                <td>{{ student.science }}</td>
                <td>{{ student.english }}</td>
                <td>{{ student.gpa }}</td>
            </tr>

        </table>

    </div>

</template>

<script>

    export default {

        computed: {
            
            studentList() {
                
                return this.$store.getters.studentDataGet;
                
            }
            
        }

    }

</script>