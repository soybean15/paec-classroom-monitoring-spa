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
        stateUserForm: {
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
    getters: {
        form: (state) => state.stateUserForm,
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