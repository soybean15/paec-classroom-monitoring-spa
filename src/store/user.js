import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router/index'
import { useAuthStore } from './auth'

export const useUserStore = defineStore('user', {
    state: () => ({
        stateUser: {
            user: null,
            profile: null
        },
     

    }),
    getters: {
        //form: (state) => state.stateUserForm,
        user: (state) => state.stateUser

    },
    actions: {

        async getUser() {
            try {

                const authStore = useAuthStore();
                await authStore.getUser();
                this.stateUser.user = authStore.user.user
                console.log(authStore.user)
                await this.getProfile()


            } catch (error) {
                // console.log(error)

                // if(error.response.status === 401){
                //     router.push('/login')
                // }

            }



        },
        async getProfile() {
            
            const data = await axios.get('api/user/profile/' + this.stateUser.user.user.id)
            this.stateUser.profile = data.data.user.user_profile
            console.log(this.stateUser)

        },
        


    }

})