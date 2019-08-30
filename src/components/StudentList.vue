<template>

    <div class="container">

        <h4 class="pt-5 pb-2">Student Grades</h4>

        <!-- Table -->
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

            <!-- List Of Students -->
            <tr v-for="student of studentList.data" v-bind:key="student._id">
                <td>{{ student.name }}</td>
            </tr>

        </table>

    </div>

</template>

<script>

    export default {

        data() {
            
            return {
                
                name: '',
                
            }
            
        },

        computed: {
            
            studentList() {
                
                return this.$store.getters.studentDataGet;
                
            },
            
        }

    }

</script>