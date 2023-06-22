import {defineStore} from 'pinia'
import axios from 'axios'

export const useAcademicStore = defineStore('academics',{
    state:()=>({
        stateSubjects:{},
        stateCourses:{},
        stateOnCourseTab:true,
        stateModal:{
            subject:false,
            
        }
        
    }),
    getters:{
        subjects:(state)=>state.stateSubjects,
        courses:(state)=>state.stateCourses,
        onCourseTab:(state)=>state.stateOnCourseTab,
        modal:(state)=>state.stateModal
       
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
        },
        openCreateModal(modalName){
            if(modalName === "Subject"){
             
                this.stateModal.subject  = true
               
            }else{
             
                this.stateModal.subject  = false
               
            }

        }
     
    }


})