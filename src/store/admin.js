import { defineStore } from 'pinia'
import axios from 'axios'

export const useAdminStore = defineStore('admin', {
    state: () => ({
        stateSettings:null


    }),
    getters: {
        settings:(state)=>state.stateSettings
       


    },
    actions: {
        async getSettings(){
            const data = await axios('api/admin/settings')

            this.stateSettings = data.data.settings
        }
       

    }


})