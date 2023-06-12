<template>
    <div class=" flex container  rounded-md shadow-xl border-solid border-2 ">
        <div class="flex-grow ">
            <!-- Photo here -->

        </div>
        <div class="p-6 bg-slate-50">
            <div class="    pb-4 ">

                <div>
                    <div class="title text-lg font-bold ">
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
                    <div class="flex flex-col">


                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">First Name</span>
                            <input v-model="userStore.form.firstname" type="text" placeholder="" 
                                class=" rounded-sm w-full border-2  ">
                        </div>

                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">MIddle Name </span>
                            <input v-model="userStore.form.middlename" type="text" placeholder="" 
                                class=" rounded-sm w-full border-2  ">
                        </div>

                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold ">Last Name</span>
                            <input v-model="userStore.form.lastname" type="text" placeholder="" 
                                class=" rounded-sm w-full border-2  ">
                        </div>


                        <!-- Gender section -->
                        <div class=" flex w-full p-2">

                            <span class="flex font-semibold w-40 ">Gender</span>
                            <div class=" flex  w-full gap-6">
                                <div>
                                    <input type="radio"  value="Female" v-model="userStore.form.gender" name="gender">
                                    <span class="gender" value="Male">Male</span>
                                </div>

                                <div>
                                    <input type="radio"  value="Female" v-model="userStore.form.gender" name="gender">
                                    <span class="gender">Female</span> 

                                </div>
                            </div>
                        </div>




                        <!-- Details section -->
                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">Birthday</span>
                            <input type="date" placeholder="" v-model="userStore.form.birthdate"
                                class=" rounded-sm w-full border-2  ">
                        </div>


                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">Contact</span>
                            <input type="text" placeholder="" v-model="userStore.form.contact_number"
                                class=" rounded-sm w-full border-2  ">
                        </div>

                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">Address</span>
                            <textarea type="text" placeholder="" v-model="userStore.form.address"
                                class=" rounded-sm w-full border-2  "></textarea>
                        </div>

                        <!-- Button -->
                        <div class="  flex w-full mt-5">
                            <div
                                class="bg-gradient-to-bl from-blue-600 via-sky-300 to-cyan-400 h-10  rounded-full w-full mx-5 flex items-center justify-center text-white text-lg">
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