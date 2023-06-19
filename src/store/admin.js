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
        async getPendingUsers(){
            const data = await axios.get('api/admin/users/pending')
            this.statePending = data.data.pendingUsers

            console.log(this.statePending)
        },
        async getUserByRole(roleId){
            const data = await axios.get('api/admin/users/role/'+roleId)
            this.stateUsers = data.data.users


            if(roleId ===2){
                this.stateButton.teacher_btn =true
                this.stateButton.student_btn = false
            }else{
                this.stateButton.teacher_btn =false
                this.stateButton.student_btn = true
            }
            console.log( this.stateUsers )
        },
        async acceptUser(user){
             await axios.post(`api/admin/users/pending/${user.id}`)
             user.accepted = true
             this.statePending.count -=1 
             console.log(`Accept ${ this.statePending.count }`)         
        }
    }


})