import {defineStore} from 'pinia'
import axios from 'axios'

export const useAcademicStore = defineStore('academics',{
    state:()=>({
        stateSubjects:{},
        stateCourses:{},
        stateOnCourseTab:true
        
    }),
    getters:{
        subjects:(state)=>state.stateSubjects,
        courses:(state)=>state.stateCourses,
        onCourseTab:(state)=>state.stateOnCourseTab
       
    },
    actions:{
       async index(){
            const data = await axios.get('api/admin/academics');
            this.stateSubjects =data.data.subjects
            this.stateCourses = data.data.courses
            console.log(this.stateSubjects)

        },
        changeTab(){
            this.stateOnCourseTab = ! this.stateOnCourseTab
        }
     
    }


})