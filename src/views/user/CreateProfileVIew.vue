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
                            <div v-if="userStore.user.profile">
                                <img class="w-20 h-20 rounded-full" :src="userStore.user.profile.image"/>
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

                <form @submit.prevent="userStore.handleCreateUser">
                    <div class="flex flex-col ">


                        <div class=" w-full p-1 text-color text-sm">
                            <span class="w-40 block text-left">First Name</span>
                            <input v-model="userStore.form.firstname" type="text" placeholder="" 
                                class=" rounded-full w-full border-1 w-full max-w-xs px-3 py-2 
                                    input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                    focus-border focus-ring sm:text-sm focus:ring-1">
                        </div>

                        <div class=" w-full p-1">
                            <span class="w-40 block text-color text-left text-sm">Middle Name </span>
                            <input v-model="userStore.form.middlename" type="text" placeholder="" 
                                class=" rounded-full w-full border-1 w-full max-w-xs px-3 py-2 
                                input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                focus-border focus-ring sm:text-sm focus:ring-1 ">
                        </div>

                        <div class="w-full p-1">
                            <span class="w-40 block text-color text-left text-sm">Last Name</span>
                            <input v-model="userStore.form.lastname" type="text" placeholder="" 
                                class="rounded-full w-full border-1 w-full max-w-xs mt-1 px-3 py-2 
                                input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                focus-border focus-ring sm:text-sm focus:ring-1">
                        </div>


                        <!-- Gender section -->
                        <div class=" w-full p-1">

                            <span class=" text-color block w-40 text-sm text-left">Gender</span>
                            <div class="flex justify-center  w-full gap-6">
                                <div>
                                    <input type="radio"  value="Female" v-model="userStore.form.gender" name="gender">
                                    <span class="gender text-color pl-1 text-sm" value="Male">Male</span>
                                </div>

                                <div>
                                    <input type="radio"  value="Female text-sm" v-model="userStore.form.gender" name="gender">
                                    <span class="gender text-color pl-1">Female</span> 

                                </div>
                            </div>
                        </div>




                        <!-- Details section -->
                        <div class="w-full p-1 text-color text-sm">
                            <span class="w-40 block text-left">Birthday</span>
                            <input type="date" placeholder="" v-model="userStore.form.birthdate"
                                class="placeholder:text-slate-500 rounded-full w-full border-1 max-w-xs mt-1 px-3 py-2
                                input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                focus-border focus-ring sm:text-sm focus:ring-1 ">
                        </div>


                        <div class="w-full p-1">
                            <span class="w-40 block text-left text-color text-sm">Contact</span>
                            <input type="text" placeholder="" v-model="userStore.form.contact_number"
                                class=" rounded-full w-full border-1 w-full max-w-xs mt-1 px-3 py-2 
                                input-text bg-secondary border shadow-sm input-border focus:outline-none 
                                focus-border focus-ring rounded-full sm:text-sm focus:ring-1  ">
                        </div>

                        <div class="w-full p-1">
                            <span class="w-40 block text-left text-color text-sm">Address</span>
                            <textarea type="text" placeholder="" v-model="userStore.form.address"
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
import {useUserStore} from '@/store/user'

export default {

    setup(){
        const userStore = useUserStore()
        userStore.getUser()

        const onFileChange = (event) => {
            userStore.form.image = event.target.files[0];
            userStore.user.profile.image = URL.createObjectURL(event.target.files[0])
            
            console.log(userStore.user.profile.image)
        }
        return {userStore,onFileChange}
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