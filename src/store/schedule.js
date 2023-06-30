import { defineStore } from 'pinia'
import axios from 'axios'

export const useScheduleStore = defineStore('schedule', {
    state: () => ({
        stateSchedules:null,
        stateErrors:[]


    }),
    getters: {
     
        schedules :(state)=>state.stateSchedules,
        errors:(state)=>state.stateErrors


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
        async getSchedules(subject){
            const data = await axios.get(`api/admin/users/teacher/schedule/${subject.pivot_id}`)
          
         
        }
       
  
       

    }


})