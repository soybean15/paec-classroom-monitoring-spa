import { defineStore } from 'pinia'
import axios from 'axios'

export const useScheduleStore = defineStore('schedule', {
    state: () => ({
        stateSchedules:null


    }),
    getters: {
     
        schedules :(state)=>state.stateSchedules


    },
    actions: {
        async addSchedule(form){
            const data = await axios.post('api/admin/users/teacher/schedule/add',form)
        },
        async getSchedules(subject){
            const data = await axios.get(`api/admin/users/teacher/schedule/${subject.pivot_id}`)
          
         
        }
       
  
       

    }


})