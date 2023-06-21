import {defineStore} from 'pinia'
import axios from 'axios'

export const useAcademicStore = defineStore('academics',{
    state:()=>({
        stateSubjects:{},
        stateCourses:{}
        
    }),
    getters:{
        subjects:(state)=>state.stateSubjects,
        courses:(state)=>state.stateCourses
       
    },
    actions:{
       async index(){
            const data = await axios.get('api/admin/academics');
            this.stateSubjects =data.data.subjects
            console.log(this.stateSubjects)

        }
     
    }


})