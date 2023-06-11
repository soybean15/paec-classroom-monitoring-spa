import {defineStore} from 'pinia'
import axios from 'axios'
import router from '../router/index'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user',{
    state:()=>({
        stateUser:null,
        stateUserForm:{
            firstname:null,
            lastname:null,
            middlename:null,
            gender:null,
            birthdate:null,
            contact_number:null,
            image:null,
            address:null,

        }

    }),
    getters:{
        form:(state)=> state.stateUserForm

    },
    actions:{

        async getUser(){
            const authStore = useAuthStore();
            await authStore.getUser();
            this.stateUser = authStore.user
            console.log(this.stateUser)
        },
        async handleCreateUser(){
            const data = await axios.put('api/user/create-profile',{
                user:this.stateUser,
                firstname: this.stateUserForm.firstname,
                lastname: this.stateUserForm.lastname,
                middlename: this.stateUserForm.middlename,
                gender: this.stateUserForm.gender,
                birthdate: this.stateUserForm.birthdate,
                image: this.stateUserForm.image,
                contact_number:this.stateUserForm.contact_number,
                address: this.stateUserForm.address
            })

        }


    }

})