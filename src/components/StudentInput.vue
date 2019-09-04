<template>

  <div id="container">

    <form action="" class="row">

        <!-- Name Input -->
        <div class="form-group col-2">
            
            <label for="name" class="float-left font-weight-bold">Student Name</label>

            <input 
                type="text" 
                id="name" 
                placeholder="Enter Name" 
                class="form-control"
                :class="{
                    'is-invalid': $v.inputName.$error, 
                    'is-valid': !$v.inputName.$error && $v.inputName.$dirty
                }"
                @input="$v.inputName.$touch()"
                v-model="inputName"
            >

        </div>

        <!-- Math Grade Input -->
        <div class="form-group col-2">
            
            <label for="math" class="float-left font-weight-bold">Math</label>
            
            <select 
                id="math" 
                class="form-control"
                :class="{
                    'border-danger': $v.inputMath.$error, 
                    'border-success': !$v.inputMath.$error && $v.inputMath.$dirty
                }"
                @select="$v.inputMath.$touch()"
                v-model="inputMath"
            >

                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>F</option>
                
            </select>

        </div>

        <!-- History Grade Input -->
        <div class="form-group col-2">
            
            <label for="history" class="float-left font-weight-bold">History</label>
            
            <select 
                id="history" 
                class="form-control"
                :class="{
                    'border-danger': $v.inputHistory.$error, 
                    'border-success': !$v.inputHistory.$error && $v.inputHistory.$dirty
                }"
                @select="$v.inputHistory.$touch()"
                v-model="inputHistory"
            >

                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>F</option>
                
            </select>

        </div>

        <!-- Science Grade Input -->
        <div class="form-group col-2">
            
            <label for="science" class="float-left font-weight-bold">Science</label>
            
            <select 
                id="science" 
                class="form-control"
                :class="{
                    'border-danger': $v.inputScience.$error, 
                    'border-success': !$v.inputScience.$error && $v.inputScience.$dirty
                }"
                @select="$v.inputScience.$touch()"
                v-model="inputScience"
            >

                <option selected>-</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>F</option>
                
            </select>

        </div>

        <!-- English Grade Input -->
        <div class="form-group col-2">

            <label for="english" class="float-left font-weight-bold">English</label>
            
            <select 
                id="english" 
                class="form-control"
                :class="{
                    'border-danger': $v.inputEnglish.$error, 
                    'border-success': !$v.inputEnglish.$error && $v.inputEnglish.$dirty
                }"
                @select="$v.inputEnglish.$touch()"
                v-model="inputEnglish"
            >

                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>F</option>
                
            </select>

        </div>

        <!-- Submit Button -->
        <div class="form-group form-control-sm col-2">
            
            <label for="submit" class="float-left font-weight-bold">{{ errorField }}</label>

            <button 
                type="button" 
                class="btn btn-primary btn-block"
                @click="submitStudent" 
            >

                Add Student

            </button>

        </div>

    </form>

  </div>

</template>

<script>

    import { required, minLength } from 'vuelidate/lib/validators'

    export default {

        data() {
            
            return {
                
                inputName: "",
                inputMath: "",
                inputHistory: "",
                inputScience: "",
                inputEnglish: "",
                errorField: '*'
                
            }
            
        },

        // Form validation tool imported from Vuelidate
        validations: {
            inputName: {
                required,
                minLength: minLength(3)
            },

            inputMath: {
                required,
            },

            inputHistory: {
                required,
            },

            inputScience: {
                required,
            },

            inputEnglish: {
                required,
            },
            
        },

        methods: {

            // Submits new students to be stored in students.json
            submitStudent() {

                this.$v.$touch()

                // Checks for errors in the fields
                if (this.$v.$invalid) {
                    // Informs user to fix field errors
                    this.errorField = 'Fix Errors'
                }

                else {

                    // Prepares the data to be stored
                    const inputData = {

                        // _id: this.newId,

                        studentName: this.inputName,

                        studentGrades: [

                            ("Math - " + this.inputMath),
                            ("History - " + this.inputHistory),
                            ("Science - " + this.inputScience),
                            ("English - " + this.inputEnglish),

                        ]

                    };

                    // Clears Errors
                    this.errorField = '*'

                    // Action from studentList.js
                    this.$store.dispatch('submitStudent', inputData);

                }

            },

        },
        
    }

</script>