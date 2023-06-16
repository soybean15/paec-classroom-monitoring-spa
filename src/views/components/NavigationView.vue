<template>
  <div class="navbar bg-blue-800">
    <div class="flex-none"></div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-white text-xl">PCM </a>
    </div>
    <div class="flex-none">
      <div v-if="authStore.user.user">
        <div v-if="authStore.user.profile">
          <details class="dropdown dropdown-end">
            
            <summary class="m-1 w-12 h-12 mb-1 relative bg-blue-900 rounded-full hover:bg-blue-400">
              <img class="w-12 h-12 p-1 absolute top-0 cursor-pointer rounded-full" :src="authStore.user.profile.image" />
            </summary>

            <div>
              <ul
                class="p-2 shadow  menu dropdown-content bg-blue-500 rounded-box w-52 font-semibold"
              >
                <li><button class="" onclick="my_modal_3.showModal()">Profile</button></li>
                <li><div v-if="authStore.user.isAdmin"><router-link to="/admin">Administrator</router-link></div></li>
                <li><div @click = authStore.handleLogout>Logout</div></li>
              </ul>
            </div>
          </details>
        </div>
      </div>
      <div v-else>
        <div class="flex mr-6">
          <router-link to="/login" class="cursor-pointer p-2 hover:bg-blue-500" >Sign in</router-link >
          <div class="p-1">|</div>
          <router-link to="/register" class="cursor-pointer p-2 hover:bg-blue-500">Register</router-link >
        </div>

      </div>
    </div>
  </div>


  <!-- Open the modal using ID.showModal() method -->

  <ModalViewVue><CreateProfileVIewVue/></ModalViewVue>

</template>

<script>

import { useAuthStore } from "@/store/auth";
import ModalViewVue from '@/views/components/ModalView.vue'
import CreateProfileVIewVue from "../user/CreateProfileVIew.vue";
export default {
  components:{
    ModalViewVue,
    CreateProfileVIewVue

  },
  setup() {
   
    const authStore = useAuthStore();
   // authStore.getUser()


    return {  authStore };
  },
};
</script>

<style>
</style>