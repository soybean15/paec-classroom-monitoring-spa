<template>
  <div class="flex justify-center bg-white w-full text-black">
    <div class="h-full w-full mx-3 md:mx-40 my-5 flex flex-col shadow-2xl rounded-lg">
      <!-- my account +  edit button -->
      <div class="flex items-center">
        <div class="p-3 text-xl font-bold">My Account</div>
        <div class="flex grow"></div>

        <div class="p-3"><button onclick="my_modal_3.showModal()" class="btn btn-outline p-1 btn-info">Edit Profile</button></div>
      </div>

      <!-- image -->
      <div class="flex items-center mt-10">
        <div class="p-5">
          <div v-if="authStore.user.profile">

          <img
            class="w-20 h-20 bg-white rounded-full"
            :src="authStore.user.profile.image"
          /></div>

        </div>
        <div class="flex flex-col p-5 pl-0">
          <div class="flex font-bold">{{authStore.fullName}}</div>
          <div  class="badge badge-primary">IT Department</div>
        </div>
      </div>

      <div class="flex flex-col  bg-gray-200 m-5 mt-1 rounded-md text-black font-bold">
        <div class="p-3">
          <div class="flex text-sm text-gray-600 font-bold">Contact</div>
          <div class="ml-3">
            <div class="flex">
              <div class="w-5 h-5 mr-2">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <g id="Complete">
                      <g id="mail">
                        <g>
                          <polyline
                            fill="none"
                            points="4 8.2 12 14.1 20 8.2"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          ></polyline>
                          <rect
                            fill="none"
                            height="14"
                            rx="2"
                            ry="2"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            width="18"
                            x="3"
                            y="6.5"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div v-if="authStore.user.user">{{ authStore.user.user.email }}</div>
            </div>
            <div class="flex">
              <div class="w-5 h-5 mr-2">
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
                    ></path>
                    <path
                      d="M327.125,383.969c5.703,0.016,56.875-37.828,56.875-42.656s-57.266-40.906-62.219-40.906s-21.578,19.938-26.062,22.156 c-4.5,2.219-32.5,1.422-63.703-29.781c-31.219-31.188-41.875-67.109-41.875-72.75s26.031-23.062,26.75-27.156 S182.578,128,176.891,128S128,180.5,128,184.875s3.953,60.656,75.219,131.906S321.422,383.938,327.125,383.969z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div v-if="authStore.user.profile">{{ authStore.user.profile.contact_number }}</div>
              
            </div>
          </div>
        </div>




        <div class="p-3">
          <div class="flex text-sm text-gray-600 font-bold">BirthDate</div>
          <div class="ml-3">
            <div class="flex" v-if="authStore.user.profile">{{ authStore.user.profile.birthdate }}</div>
           
            
          </div>
        </div>


        <div class="p-3">
          <div class="flex text-sm text-gray-600 font-bold">Gender</div>
          <div class="ml-3">
            <div class="flex" v-if="authStore.user.profile">{{ authStore.user.profile.gender }}</div>
           
            
          </div>
        </div>


         <div class="p-3">
          <div class="flex text-sm text-gray-600 font-bold">Address</div>
          <div class="ml-3">
            <div class="flex" v-if="authStore.user.profile">{{ authStore.user.profile.address }}</div>
           
            
          </div>
        </div>

      </div>
      
    </div>
  </div>


  <!-- Open the modal using ID.showModal() method -->

  <ModalViewVue><CreateProfileVIewVue /></ModalViewVue>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { onMounted , computed} from "vue";
import ModalViewVue from "@/views/components/ModalView.vue";
import CreateProfileVIewVue from "../user/CreateProfileVIew.vue";

export default {
  components: {
    ModalViewVue,
    CreateProfileVIewVue,
  },
  setup() {
    const authStore = useAuthStore();

    onMounted(() => {
      authStore.getUser();
      //  authStore.getProfile()
    });

    // const fullName = computed(()=>{
    //   return authStore.user.profile.firstname +" "+authStore.user.profile.lastname
    // })

    return { authStore };
  },
};
</script>

<style>
</style>