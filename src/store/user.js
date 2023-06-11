import {defineStore} from 'pinia'
import axios from 'axios'
import router from '../router/index'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user',{
    state:()=>({
        stateUser:null

    }),
    getters:{

    },
    actions:{

        async getUser(){
            const authStore = useAuthStore();
            await authStore.getUser();
            this.stateUser = authStore.user
            console.log(this.stateUser)
        }

    }

})