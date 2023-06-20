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
        },
        stateRole:2
        
    }),
    getters:{
        pendingRequest:(state)=>state.statePending,
        users:(state)=>state.stateUsers,
        roleButtonState:(state)=>state.stateButton,
       
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
        async getUserByRole(path,roleId){

            this.stateRole = roleId != null ? roleId : this.stateRole;
            if(!path){
                 path = `api/admin/users/role/${this.stateRole }`;
            }
            console.log(`path ${path} staterole ${this.stateRole } role${roleId} `)
           
            const data = await axios.get(path)
            this.stateUsers = data.data.users      

            if(this.stateRole ===2){
                this.stateButton.teacher_btn =true
                this.stateButton.student_btn = false
            }else{
                this.stateButton.teacher_btn =false
                this.stateButton.student_btn = true
            }
            
        },
        

        async acceptUser(user){
             await axios.post(`api/admin/users/pending/${user.id}`)
             user.accepted = true
             this.statePending.count -=1 
             console.log(`Accept ${ this.statePending.count }`)         
        }
    }


})