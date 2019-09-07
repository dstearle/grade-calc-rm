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
        
        // Arrays to store grades for each subject
        let mathArray = [];
        let historyArray = [];
        let scienceArray = [];
        let englishArray = [];
        console.log(englishArray)

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
        commit('SET_GPA', studentData);
        
    },

    // Submits the new student's data
    submitStudent: ({commit}, inputData) => {
        
        commit('NEW_STUDENT', inputData);
        
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