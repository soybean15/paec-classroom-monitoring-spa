import {defineStore} from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useAdminStore = defineStore('admin',{
    state:()=>({

        statePending:{
            users:null,
            user_count:null
            
        },
        stateFaculties:{
            pending_users:null,
            users:null,
            user_count:null
        }
    }),
    getters:{
        pendingRequest:(state)=>state.statePending
    },
    actions:{
        async index(){
            const data = await axios.get('api/admin')
            this.statePending.users = data.data.pendingUsers
            this.statePending.user_count = this.statePending.users.length

            console.log(this.statePending)
        },
        async getUsers(){
            const data = await axios.get('api/admin/users')
            this.statePending.users = data.data.pendingUsers
            this.statePending.user_count = this.statePending.users.length

            console.log(this.statePending)
        }
    }


})