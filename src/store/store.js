import Vue from 'vue';
import Vuex from 'vuex';

import studentList from './modules/studentList.js';

Vue.use(Vuex);

export default new Vuex.Store({
    
    modules: {
        
        studentList,
        
    }
    
});