import {defineStore} from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useAdminStore = defineStore('admin',{
    state:()=>({

    }),
    getters:{

    },
    actions:{
        async index(){
            await axios.get('api/admin')
        }
    }


})