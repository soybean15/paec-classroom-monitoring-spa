<template>
    <div class="bg-gray-50 flex container rounded-md shadow-xl border-solid border-2 ">
        <div class="flex-grow ">
            <!-- Photo here -->

        </div>
        <div class="p-6 bg-white">
            <div class="pb-4 ">

                <div>
                    <div class="title text-lg text-color ">
                        Profile
                        <hr>
                        <div class="flex flex-col justify-center  items-center border">
                            <div v-if="authStore.user.profile">
                                <img class="w-20 h-20 rounded-full" :src="authStore.user.profile.image"/>
                            </div>
                           
                            <input
                  ref="imageInput"
                  type="file"
                  name="photo"
                  @change="onFileChange"
                />
                        </div>
                    </div>
                </div>


                <!-- Details section -->

                <form @submit.prevent="authStore.handleCreateUser">
                    <div class="flex flex-col ">


                        <div class=" w-full p-1 text-color text-sm">
                            <span class="w-40 block text-left">First Name</span>
                            <input v-model="authStore.userForm.firstname" type="text" placeholder="" 
                                class=" rounded-full w-full border-1 w-full max-w-xs px-3 py-2 
                                    input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                    focus-border focus-ring sm:text-sm focus:ring-1">
                        </div>

                        <div class=" w-full p-1">
                            <span class="w-40 block text-color text-left text-sm">Middle Name </span>
                            <input v-model="authStore.userForm.middlename" type="text" placeholder="" 
                                class=" rounded-full w-full border-1 w-full max-w-xs px-3 py-2 
                                input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                focus-border focus-ring sm:text-sm focus:ring-1 ">
                        </div>

                        <div class="w-full p-1">
                            <span class="w-40 block text-color text-left text-sm">Last Name</span>
                            <input v-model="authStore.userForm.lastname" type="text" placeholder="" 
                                class="rounded-full w-full border-1 w-full max-w-xs mt-1 px-3 py-2 
                                input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                focus-border focus-ring sm:text-sm focus:ring-1">
                        </div>


                        <!-- Gender section -->
                        <div class=" w-full p-1">

                            <span class=" text-color block w-40 text-sm text-left">Gender</span>
                            <div class="flex justify-center  w-full gap-6">
                                <div>
                                    <input type="radio"  value="Female" v-model="authStore.userForm.gender" name="gender">
                                    <span class="gender text-color pl-1 text-sm" value="Male">Male</span>
                                </div>

                                <div>
                                    <input type="radio"  value="Female text-sm" v-model="authStore.userForm.gender" name="gender">
                                    <span class="gender text-color pl-1">Female</span> 

                                </div>
                            </div>
                        </div>




                        <!-- Details section -->
                        <div class="w-full p-1 text-color text-sm">
                            <span class="w-40 block text-left">Birthday</span>
                            <input type="date" placeholder="" v-model="authStore.userForm.birthdate"
                                class="placeholder:text-slate-500 rounded-full w-full border-1 max-w-xs mt-1 px-3 py-2
                                input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                focus-border focus-ring sm:text-sm focus:ring-1 ">
                        </div>


                        <div class="w-full p-1">
                            <span class="w-40 block text-left text-color text-sm">Contact</span>
                            <input type="text" placeholder="" v-model="authStore.userForm.contact_number"
                                class=" rounded-full w-full border-1 w-full max-w-xs mt-1 px-3 py-2 
                                input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                focus-border focus-ring rounded-full sm:text-sm focus:ring-1  ">
                        </div>

                        <div class="w-full p-1">
                            <span class="w-40 block text-left text-color text-sm">Address</span>
                            <textarea type="text" placeholder="" v-model="authStore.userForm.address"
                                class=" rounded-full w-full border-1 w-full max-w-xs mt-1 px-3 py-2 
                                input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                focus-border focus-ring rounded-full sm:text-sm focus:ring-1  "></textarea>
                        </div>

                        <!-- Button -->
                        <div class="  flex w-full mt-5">
                            <div
                                class="cursor-pointer bg-gradient-to-bl from-blue-600 via-sky-300 to-cyan-400 h-10  rounded-full w-full mx-5 flex items-center justify-center text-white text-lg">
                                <input type="submit" value="Register" >
                            </div>
                        </div>





                    </div>


                </form>
            </div>

        </div>





    </div>
</template>

<script>
import {useAuthStore } from '@/store/auth'
import { onMounted } from 'vue'

export default {

    setup(){
        const authStore = useAuthStore()
    

        onMounted(()=>{
                authStore.getUser()
               //  authStore.getProfile()
        })

        const onFileChange = (event) => {
            authStore.userForm.image = event.target.files[0];
            authStore.user.profile.image = URL.createObjectURL(event.target.files[0])
            
            console.log(authStore.user.profile.image)
        }
        return {authStore,onFileChange}
    }
}
</script>

<style>
.container{
    width: 90%;
    margin: auto;   
    border: 1px solid black;
}
</style>