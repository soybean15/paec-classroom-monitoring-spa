import {defineStore} from 'pinia'
import axios from 'axios'
import router from '../router/index'
import { useUserStore } from './user'

export const useAuthStore = defineStore('auth',{
    state:()=>({
        stateUser: {
            user: null,
            profile: null,
            isAdmin:false
        },
        authForm :{//for login
            email:'',
            password:'',
            name:'',
            confirmPassword:''
        },
        stateUserForm: {//for profile
            firstname: null,
            lastname: null,
            middlename: null,
            gender: null,
            birthdate: null,
            contact_number: null,
            image: null,
            address: null,

        }

    }),
    getters:{
        user:(state) =>state.stateUser,
        form:(state) =>state.authForm,
        userForm: (state) => state.stateUserForm,

    },
    actions:{
        async getToken(){
            await axios.get('/sanctum/csrf-cookie')
        },
        async getUser(){
            this.getToken

            try{
                const data = await axios.get('/api/user')
                if(data){
                    this.stateUser.user = data.data
                    this.getProfile()
                }
                console.log(this.stateUser.user)
               

                
            }catch(error){
                
                if(error.response.status === 401){
                    router.push('/login')
                }

            }
            

        },
        async getProfile(){
           
            const data = await axios.get('api/user/profile/' + this.stateUser.user.id)
            this.stateUser.profile = data.data.user.user_profile
            this.stateUser.isAdmin = data.data.user.roles.some(role => role.name === "Admin");
            console.log(this.stateUser)
                

        },
        async handleLogin(){    
            const data = await axios.post('/login',{
                email:this.authForm.email,
                password:this.authForm.password
                
            })

            router.push('/home')
        },
        async handleRegister(){
            try{
                await axios.post('/register',{
                    email: this.authForm.email,
                    name:this.authForm.name,
                    password:this.authForm.password,
                    password_confirmation:this.authForm.confirmPassword
                })
                router.push('/')
            }catch(error){

            }
            
        },
        async handleLogout() {
            
            await axios.post('/logout')
            this.stateUser.user = null
 
            this.router.push('/login')
        },
        async handleCreateUser() {
            const data = await axios.post('api/user/create-profile', {
                user: this.stateUser,
                firstname: this.stateUserForm.firstname,
                lastname: this.stateUserForm.lastname,
                middlename: this.stateUserForm.middlename,
                gender: this.stateUserForm.gender,
                birthdate: this.stateUserForm.birthdate,
                image: this.stateUserForm.image,
                contact_number: this.stateUserForm.contact_number,
                address: this.stateUserForm.address
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

        }
    }
})