import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from './users';
export const useScheduleStore = defineStore('schedule', {
    state: () => ({
        stateSchedules:null,
        stateErrors:[],
        stateSubjects:null


    }),
    getters: {
     
        schedules :(state)=>state.stateSchedules,
        errors:(state)=>state.stateErrors,
        subjects:(state)=>state.stateSubjects 


    },
    actions: {
        async addSchedule(form){
            this.stateErrors =[]
            try{
                 const data = await axios.post('api/admin/users/teacher/schedule/add',form)
            }catch(error){
                if(error.response.status === 422){
                    this.stateErrors = error.response.data
                    console.log(this.stateErrors)
                }
            }
           
        },
        async getSchedules(){
            const userStore = useUserStore()
             this.stateSubjects = userStore.teacherSubjects
   
          
         
        }
       
  
       

    }


})