<template>
  <div class="bg-gray-50">
    <div class="p-6 bg-white">
      <div class="pb-4">
        <div>
          <div class="title text-lg text-color">
            <span class="flex font-bold">Edit Profile</span>
            <hr />
            <div class="flex  flex-col justify-center items-center 
            mt-3">
            <div class="relative">
              <div v-if="authStore.userForm.dummyImage">
                <img
                  class="w-20 h-20 rounded-full"
                  :src="authStore.userForm.dummyImage"
                />
              </div>

              <div class="absolute bottom-1 right-0">
                <div
                  class="relative items-center p-1 bg-gray-200 rounded-full cursor-pointer"
                >
                  <svg
                    fill="#77767b"
                    width="25px"
                    height="25px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#77767b"
                    stroke-width="0.736"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M16 12.906a4.47 4.47 0 0 0 0 8.938 4.47 4.47 0 0 0 4.469-4.469A4.47 4.47 0 0 0 16 12.906zm0 7.063a2.577 2.577 0 1 1-.002-5.154A2.577 2.577 0 0 1 16 19.969z"
                      ></path>
                      <path
                        d="M25.625 9.812h-4.812l-2.062-2.75h-5.5l-2.062 2.75H6.375C5.618 9.812 5 10.43 5 11.188v12.375c0 .756.618 1.375 1.375 1.375h19.25c.757 0 1.375-.617 1.375-1.375V11.188c0-.758-.618-1.376-1.375-1.376zM16 23.477a6.103 6.103 0 1 1 .001-12.205A6.103 6.103 0 0 1 16 23.477zm9.625-10.399h-2.75v-1.375h2.75v1.375z"
                      ></path>
                    </g>
                  </svg>

                  <input
                    ref="imageInput"
                    type="file"
                    name="photo"
                    class="w-10 h-15 absolute top-0 left-0 opacity-0 cursor-pointer"
                    @change="onFileChange"
                  />
                </div>
              </div>

              
            </div>
            

            
            </div>
          </div>
        </div>

        <!-- Details section -->

        <form @submit.prevent="authStore.handleCreateUser" class="mt-5">
          <div class="flex flex-col">
            <div class="w-full p-1 text-color text-sm flex items-center">
              <span class="w-20 block text-left font-bold text-xs text-gray-600">First Name</span>
              <input
                v-model="authStore.userForm.firstname"
                type="text"
                placeholder=""
                class="rounded-lg w-full border-1 w-full max-w-xs px-3 py-1 input-text bg-secondary border shadow-sm input-border focus:outline-none focus-border focus-ring sm:text-sm focus:ring-1"
              />
            </div>

            <div class="w-full p-1 flex items-center">
              <span class="w-20 block  text-left text-sm font-bold text-xs text-gray-600"
                >Middle Name
              </span>
              <input
                v-model="authStore.userForm.middlename"
                type="text"
                placeholder=""
                class="rounded-lg w-full border-1 w-full max-w-xs px-3 py-1 input-text bg-secondary border shadow-sm input-border focus:outline-none focus-border focus-ring sm:text-sm focus:ring-1"
              />
            </div>

            <div class="w-lg p-1 flex items-center">
              <span class="w-20 block  text-left text-sm font-bold text-xs text-gray-600"
                >Last Name</span
              >
              <input
                v-model="authStore.userForm.lastname"
                type="text"
                placeholder=""
                class="rounded-lg w-full border-1 w-full max-w-xs mt-1 px-3 py-1 input-text bg-secondary border shadow-sm input-border focus:outline-none focus-border focus-ring sm:text-sm focus:ring-1"
              />
            </div>

            <!-- Gender section -->
            <div class="w-full p-1 flex items-center">
              <span class=" block w-20 text-sm text-left font-bold text-xs text-gray-600"
                >Gender</span
              >
              <div class="flex px-5 w-full gap-6">
                <div>
                  <input
                    type="radio"
                    value="Female"
                    v-model="authStore.userForm.gender"
                    name="gender"
                  />
                  <span class="gender text-color  pl-1 text-sm" value="Male"
                    >Male</span
                  >
                </div>

                <div>
                  <input
                    type="radio"
                    value="Female"
                    v-model="authStore.userForm.gender"
                    name="gender"
                  />
                  <span class="gender text-color pl-1">Female</span>
                </div>
              </div>
            </div>

            <!-- Details section -->
            <div class="w-full p-1  text-sm flex items-center" >
              <span class="w-20 block text-left font-bold text-xs text-gray-600">Birthday</span>
              <input
                type="date"
                placeholder=""
                v-model="authStore.userForm.birthdate"
                class="placeholder:text-slate-500 rounded-lg w-full border-1 max-w-xs mt-1 px-3 py-1 input-text bg-secondary border shadow-sm input-border focus:outline-none focus-border focus-ring sm:text-sm focus:ring-1"
              />
            </div>

            <div class="w-full p-1 flex items-center">
              <span class="w-20 block text-left  text-sm font-bold text-xs text-gray-600"
                >Contact</span
              >
              <input
                type="text"
                placeholder=""
                v-model="authStore.userForm.contact_number"
                class="rounded-lg w-full border-1 w-full max-w-xs mt-1 px-3 py-1 input-text bg-secondary border shadow-sm input-border focus:outline-none focus-border focus-ring rounded-full sm:text-sm focus:ring-1"
              />
            </div>

            <div class="w-full p-1 flex items-center">
              <span class="w-20 block text-left  text-sm font-bold text-xs text-gray-600"
                >Address</span
              >
              <textarea
                type="text"
                placeholder=""
                v-model="authStore.userForm.address"
                class="rounded-lg w-full border-1 w-full max-w-xs mt-1 px-3 py-1 input-text bg-secondary border shadow-sm input-border focus:outline-none focus-border focus-ring rounded-full sm:text-sm focus:ring-1"
              ></textarea>
            </div>

            <!-- Button -->
            <div class="flex w-full mt-5">
              <div
                class="cursor-pointer bg-gradient-to-bl from-blue-600 via-sky-300 to-cyan-400 h-10 rounded-full w-full mx-5 flex items-center justify-center text-white text-lg"
              >
                <input type="submit" value="Register" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { onMounted } from "vue";

export default {
  setup() {
    const authStore = useAuthStore();

    onMounted(() => {
      authStore.getUser();
      //  authStore.getProfile()
    });

    const onFileChange = (event) => {
     
      //these 2 are literally different object
      authStore.userForm.image = event.target.files[0];
     
     // authStore.user.profile.image = 'hello'
     
      authStore.user.profile.image = URL.createObjectURL(event.target.files[0]);
      authStore.userForm.dummyImage= URL.createObjectURL(event.target.files[0]);

      console.log(authStore.userForm.image );
    };
    return { authStore, onFileChange };
  },
};
</script>

<style>
.container {
  width: 90%;
  margin: auto;
  border: 1px solid black;
}
</style>