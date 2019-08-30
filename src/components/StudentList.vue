<template>

    <div class="container">

        <h4 class="pt-5 pb-2">Student Grades</h4>

        <table class="table table-bordered">

            <!-- Table Headers -->
            <tr>
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

        data() {

            return {

                topTenDinosaurs: [

                    { name: "Brachiosaurus", ingen: null, biosyn: 100, overall: 100 },
                    { name: "T-Rex", ingen: 96, biosyn: 97, overall: 96 },
                    { name: "Velociraptor", ingen: 92, biosyn: 98, overall: 95 },
                    { name: "Stegosaurus", ingen: null, biosyn: 94, overall: 94 },
                    { name: "Triceratop", ingen: 100, biosyn: 87, overall: 93 },
                    { name: "Carnotaurus", ingen: 89, biosyn: 94, overall: 91 },
                    { name: "Apatosaurus", ingen: 90, biosyn: 89, overall: 89 },
                    { name: "Stygimoloch", ingen: 91, biosyn: 88, overall: 89 },
                    { name: "Ceratosaurus", ingen: 84, biosyn: 92, overall: 88 },
                    { name: "Gallimimus", ingen: 91, biosyn: 83, overall: 87 }

                ]

            }

        }

    }

</script>