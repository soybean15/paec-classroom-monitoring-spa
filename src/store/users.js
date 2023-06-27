import {defineStore} from 'pinia'
import axios from 'axios'

import router from '../router/index'

export const useUserStore = defineStore('users',{
    state:()=>({

        stateSelectedUser:null,    
        statePending:{},
        stateUsers:{},
        stateButton:{
            teacher_btn:false,
            student_btn:false
        },
        stateRole:2,
        stateOnPendingModal:false
        
    }),
    getters:{
        pendingRequest:(state)=>state.statePending,
        users:(state)=>state.stateUsers,
        roleButtonState:(state)=>state.stateButton,
        onPendingModal:(state)=>state.stateOnPendingModal,
        selectedUser:(state)=>state.stateSelectedUser
       
    },
    
    actions:{
        async index(){
            const data = await axios.get('api/admin')
            this.statePending = data.data.pendingUsers
            

           
        },
        async getPendingUsers(){
            const data = await axios.get('api/admin/users/pending')
            this.statePending = data.data.pendingUsers
           this.stateOnPendingModal = true

            
        },


        async getUserByRole(path,roleId){

            this.stateRole = roleId != null ? roleId : this.stateRole;
            if(!path){
                 path = `api/admin/users/role/${this.stateRole }`;
            }
            
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
             this.getUserByRole(null,2)
            
        },

        async addSubjectsOnTeacher(subjects,settings){
            const data = await axios.post(`api/admin/users/teacher/${this.stateSelectedUser.id}/subjects`,{
                subjects:subjects,
                settings:settings
            })

        },
        async getTeacherSubjects(settings){
            const data = await axios.get('api/admin/users/teacher/subjects',{
                params:{
                    user_id: this.stateSelectedUser.id,
                    settings: settings
                }
              

            })
        },
        selectUser(user){
            this.stateSelectedUser = user
            console.log(this.stateSelectedUser)
        }
    
    }


})