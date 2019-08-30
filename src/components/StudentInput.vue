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
            >

        </div>

        <!-- Math Grade Input -->
        <div class="form-group col-2">
            
            <label for="math" class="float-left font-weight-bold">Math</label>
            
            <select id="math" class="form-control">

                <option selected>-</option>
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
            
            <select id="history" class="form-control">

                <option selected>-</option>
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
            
            <select id="science" class="form-control">

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
            
            <select id="english" class="form-control">

                <option selected>-</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>F</option>
                
            </select>

        </div>

        <!-- Submit Button -->
        <div class="form-group form-control-sm col-2">
            
            <label for="submit" class="float-left font-weight-bold">*</label>

            <button 
                type="submit" 
                class="btn btn-primary btn-block"
                :disabled="submitStatus"
                @click="submitMessage"
            >

                Add Student

            </button>

        </div>

    </form>

  </div>

</template>