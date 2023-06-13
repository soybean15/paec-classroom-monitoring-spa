import {defineStore} from 'pinia'
import axios from 'axios'
import router from '../router/index'

export const useAuthStore = defineStore('auth',{
    state:()=>({
        authuser:null,
        authForm :{
            email:'',
            password:'',
            name:'',
            confirmPassword:''
        }

    }),
    getters:{
        user:(state) =>state.authuser,
        form:(state) =>state.authForm

    },
    actions:{
        async getToken(){
            await axios.get('/sanctum/csrf-cookie')
        },
        async getUser(){
            this.getToken

            try{
                const data = await axios.get('/api/user')
                this.authuser = data.data
                
            }catch(error){
                
                if(error.response.status === 401){
                    router.push('/login')
                }

            }
            

        },
        async handleLogin(){    
            const data = await axios.post('/login',{
                email:this.authForm.email,
                password:this.authForm.password
                
            })

            router.push('/admin/')
        },
        async handleRegister(){
            await axios.post('/register',{
                email: this.authForm.email,
                name:this.authForm.name,
                password:this.authForm.password,
                password_confirmation:this.authForm.confirmPassword
            })
        },
        async handleLogout() {
            
            await axios.post('/logout')
            this.authUser = null
 
            this.router.push('/')
        }
    }
})