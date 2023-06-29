import { defineStore } from 'pinia'
import axios from 'axios'

export const useAdminStore = defineStore('admin', {
    state: () => ({
        stateSettings:null,
        stateRooms:null,


    }),
    getters: {
        settings:(state)=>state.stateSettings,
        rooms:(state)=>state.stateRooms
       


    },
    actions: {
        async getSettings(){
            const data = await axios('api/admin/settings')
            

            this.stateSettings = data.data.settings
            this.stateRooms = data.data.rooms
        },
       
  
       

    }


})