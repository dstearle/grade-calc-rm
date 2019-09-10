import studentData from './../../data/students.json';

const state = {
    
    // Array to store available students
    studentListData: []
    
};

const mutations = {
    
    // Sets the stored data from studentData into the array
    'SET_STUDENTS' (state, studentData) {
        
        state.studentListData = studentData;
        
    },

    // Sets the GPA for each student
    'SET_GPA' (state) {

        // To cut down on writing
        let studentsArray = state.studentListData.data;
        
        // Arrays to store student's grades for each subject
        let mathArray = [];
        let historyArray = [];
        let scienceArray = [];
        let englishArray = [];
        // console.log(mathArray, historyArray, scienceArray, englishArray)

        // For storing converted letter grades (into points)
        let convertedGrade = [];
        // console.log(convertedGrade)

        // Retrieves the student's grade for math
        for(let i = 0; i < studentsArray.length; i++) {


            mathArray.push(studentsArray[i].grades[0].split(" ")[2])
            
        }

        // Retrieves the student's grade for history
        for(let i = 0; i < studentsArray.length; i++) {


            historyArray.push(studentsArray[i].grades[1].split(" ")[2])
            
        }

        // Retrieves the student's grade for science
        for(let i = 0; i < studentsArray.length; i++) {


            scienceArray.push(studentsArray[i].grades[2].split(" ")[2])
            
        }

        // Retrieves the student's grade for english
        for(let i = 0; i < studentsArray.length; i++) {


            englishArray.push(studentsArray[i].grades[3].split(" ")[2])
            
        }

        // Converts letter grades into numerical points and retrieves accumulative value for each student
        for(let i = 0; i < studentsArray.length; i++) {

            // Converts letter grade for math into numerical points
            // Also puts initial values into the array
            if(mathArray[i] === 'A') { convertedGrade.push(4) }
            else if(mathArray[i] === 'B') { convertedGrade.push(3) }
            else if(mathArray[i] === 'C') { convertedGrade.push(2) }
            else if(mathArray[i] === 'D') { convertedGrade.push(1) }
            else if(mathArray[i] === 'F') { convertedGrade.push(0) }

            // Converts letter grade for history into numerical points
            if(historyArray[i] === 'A') { convertedGrade[i] += 4 }
            else if(historyArray[i] === 'B') { convertedGrade[i] += 3 }
            else if(historyArray[i] === 'C') { convertedGrade[i] += 2 }
            else if(historyArray[i] === 'D') { convertedGrade[i] += 1 }
            else if(historyArray[i] === 'F') { convertedGrade[i] += 0 }

            // // Converts letter grade for science into numerical points
            if(scienceArray[i] === 'A') { convertedGrade[i] += 4 }
            else if(scienceArray[i] === 'B') { convertedGrade[i] += 3 }
            else if(scienceArray[i] === 'C') { convertedGrade[i] += 2 }
            else if(scienceArray[i] === 'D') { convertedGrade[i] += 1 }
            else if(scienceArray[i] === 'F') { convertedGrade[i] += 0 }

            // Converts letter grade for english into numerical points
            if(englishArray[i] === 'A') { convertedGrade[i] += 4 }
            else if(englishArray[i] === 'B') { convertedGrade[i] += 3 }
            else if(englishArray[i] === 'C') { convertedGrade[i] += 2 }
            else if(englishArray[i] === 'D') { convertedGrade[i] += 1 }
            else if(englishArray[i] === 'F') { convertedGrade[i] += 0 }
            
        }

        // Retrieves the student's gpa
        for(let i = 0; i < studentsArray.length; i++) {

            // Empty array to store gpas for students
            let solvedGpa = [];
            // console.log(solvedGpa)

            // Calculates each student's gpa
            solvedGpa[i] = (convertedGrade[i] * 4)/16

            // Gives each student their gpa
            studentsArray[i].gpa = solvedGpa[i];
            
        }
        
    },

    // Highlights the student with highest gpa
    'TOP_STUDENT' (state) {
        
        // To cut down on writing
        let studentsArray = state.studentListData.data;

        //Compare function that sorts the numbers in the array from smallest to largest number
        let sortedArray = studentsArray.sort(function(a, b){return a.gpa - b.gpa});
        console.log(sortedArray)
        
    },

    // Adds data for new students
    'NEW_STUDENT' (state, { studentName, studentGrades}) {
        
        // Grabs the id of the last student in the array and adds one to it
        let newId = state.studentListData.data.slice(-1)[0]._id + 1;

        // Pushes new data into studentListData array
        state.studentListData.data.push({

            _id: newId,

            name: studentName,

            grades: studentGrades,

        });
        
    },
    
};

const actions = {
    
    // Sets the initial students available at start of program
    initStudents: ({commit}) => {
        
        commit('SET_STUDENTS', studentData);
        commit('SET_GPA');
        commit('TOP_STUDENT');
        
    },

    // Submits the new student's data
    submitStudent: ({commit}, inputData) => {
        
        commit('NEW_STUDENT', inputData);
        commit('SET_GPA');
        commit('TOP_STUDENT');
        
    },
    
};

const getters = {
    
    // Getter for available students
    studentDataGet: state => {
        
        return state.studentListData;
        
    }
    
};

export default {
    
    state,
    
    mutations,
    
    actions,
    
    getters
    
}