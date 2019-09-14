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
            <tr 
                v-for="student of studentList.data" 
                v-bind:key="student._id"
                :class="(student.gpa === $store.getters.highestGpaGet) ? 'bg-success' : '' "
            >
                <td>{{ student.name }}</td>
                <td>{{ student.grades[0].split(" ")[2] }}</td>
                <td>{{ student.grades[1].split(" ")[2] }}</td>
                <td>{{ student.grades[2].split(" ")[2] }}</td>
                <td>{{ student.grades[3].split(" ")[2] }}</td>
                <td>{{ student.gpa }}</td>
            </tr>

        </table>

    </div>

</template>

<script>

    export default {

        computed: {
            
            // Retrieves the stored data from the store 
            studentList() {
                
                return this.$store.getters.studentDataGet;
                
            },
            
        }

    }

</script>