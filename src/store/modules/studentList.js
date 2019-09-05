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
        
        state.studentListData.data.push({

            gpa: 5

        });
        
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