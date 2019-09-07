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

        // Retrieves the student's gpa
        for(let i = 0; i < studentsArray.length; i++) {

            // For storing converted letter grades (into points)
            let convertedGrade = [];

            // Converts letter grade for math into numerical points
            // if(mathArray[i] === 'A') { convertedGrade.push(5) }
            // else if(mathArray[i] === 'B') { convertedGrade.push(4) }
            // else if(mathArray[i] === 'C') { convertedGrade.push(3) }
            // else if(mathArray[i] === 'D') { convertedGrade.push(2) }
            // else if(mathArray[i] === 'F') { convertedGrade.push(1) }
            // console.log(convertedGrade)

            // Converts letter grade for history into numerical points
            if(historyArray[i] === 'A') { convertedGrade.push(5) }
            else if(historyArray[i] === 'B') { convertedGrade.push(4) }
            else if(historyArray[i] === 'C') { convertedGrade.push(3) }
            else if(historyArray[i] === 'D') { convertedGrade.push(2) }
            else if(historyArray[i] === 'F') { convertedGrade.push(1) }
            console.log(convertedGrade)

            // Empty array to store gpas for students
            let solvedGpa = [5, 2, 3, 4, 0,];

            // Gives each student their gpa
            studentsArray[i].gpa = solvedGpa[i];
            
        }
        
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
        
    },

    // Submits the new student's data
    submitStudent: ({commit}, inputData) => {
        
        commit('NEW_STUDENT', inputData);
        commit('SET_GPA');
        
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