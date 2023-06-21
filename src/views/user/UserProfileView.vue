<template>
  <div class="flex justify-center w-full text-white ">
    <div class="h-full w-full mx-3 md:mx-40 my-5 flex flex-col shadow-2xl rounded-lg bg-secondary">
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

      <div class="flex flex-col  shadow-2xl bg-base-300 bg-opacity-75 m-5 mt-1 rounded-md text-white font-bold">
        <div class="p-3">
          <div class="flex text-sm text-gray-300 font-bold">Contact</div>
          <div class="ml-3">
            <div class="flex">
              <div class="w-5 h-5 mr-2">
                
                <img src="../../assets/icons/phone-icon.svg"/>

              </div>
              <div v-if="authStore.user.user">{{ authStore.user.user.email }}</div>
            </div>
            <div class="flex">
              <div class="w-5 h-5 mr-2 text-red">
                <img src="../../assets/icons/email-icon.svg"/>
              </div>
              <div v-if="authStore.user.profile">{{ authStore.user.profile.contact_number }}</div>
              
            </div>
          </div>
        </div>




        <div class="p-3">
          <div class="flex text-sm text-gray-300 font-bold">BirthDate</div>
          <div class="ml-3">
            <div class="flex" v-if="authStore.user.profile">{{ authStore.user.profile.birthdate }}</div>
           
            
          </div>
        </div>


        <div class="p-3">
          <div class="flex text-sm text-gray-300 font-bold">Gender</div>
          <div class="ml-3">
            <div class="flex" v-if="authStore.user.profile">{{ authStore.user.profile.gender }}</div>
           
            
          </div>
        </div>


         <div class="p-3">
          <div class="flex text-sm text-gray-300 font-bold">Address</div>
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