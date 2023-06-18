import {defineStore} from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useAdminStore = defineStore('admin',{
    state:()=>({

        statePending:{},
        stateUsers:{},
        stateButton:{
            teacher_btn:false,
            student_btn:false
        }
    }),
    getters:{
        pendingRequest:(state)=>state.statePending,
        users:(state)=>state.stateUsers,
        roleButtonState:(state)=>state.stateButton
    },
    actions:{
        async index(){
            const data = await axios.get('api/admin')
            this.statePending = data.data.pendingUsers
            

            console.log(this.statePending)
        },
        async getUsers(){
            const data = await axios.get('api/admin/users')
            this.statePending = data.data

            console.log(this.statePending)
        },
        async getUserByRole(roleId){
            const data = await axios.get('api/admin/users/role/'+roleId)
            this.stateUsers = data.data.users
            console.log( this.stateUsers )
        }
    }


})