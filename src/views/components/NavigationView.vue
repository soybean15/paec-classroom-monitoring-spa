<template>
  <div class="navbar bg-blue-800">
    <div class="flex-none"></div>
    <div class="flex-1">
      <router-link :to="{name:'userHome'}" class="btn btn-ghost normal-case text-white text-xl">PCM </router-link>
    </div>
    <div class="flex-none">
      <div v-if="authStore.user.user">
        <div v-if="authStore.user.profile">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class=" w-12" 
              >
              <div class="rounded-full m-1 w-12 h-12 mb-1 relative  bg-blue-900 hover:bg-blue-400">
                <img
                class="w-12 h-12 p-1 absolute top-0  cursor-pointer rounded-full"
                :src="authStore.user.profile.image"
            />
              </div>
              
          </label>
            <ul
              tabindex="0"
              class="p-2 shadow  menu dropdown-content bg-blue-500 rounded-box w-52 font-semibold"
            >
            <li><router-link to="/user-profile">Profile</router-link></li>
                <li><div v-if="authStore.user.isAdmin"><router-link to="/admin">Administrator</router-link></div></li>
                <li><div @click = authStore.handleLogout>Logout</div></li>
            </ul>
          </div>



          <!-- <details class="dropdown dropdown-end">
            
            <summary  class="m-1 w-12 h-12 mb-1 relative bg-blue-900 rounded-full hover:bg-blue-400">
              <img class="w-12 h-12 p-1 absolute top-0 cursor-pointer rounded-full" :src="authStore.user.profile.image" />
            </summary>

            <div>
              <ul
              
                class="p-2 shadow  menu dropdown-content bg-blue-500 rounded-box w-52 font-semibold"
              >
                <li><button class="" onclick="my_modal_3.showModal()">Profile</button></li>
                <li><router-link to="/user-profile">Profile</router-link></li>
                <li><div v-if="authStore.user.isAdmin"><router-link to="/admin">Administrator</router-link></div></li>
                <li><div @click = authStore.handleLogout>Logout</div></li>
              </ul>
            </div>
          </details> -->
        </div>
      </div>
      <div v-else>
        <div class="flex mr-6">
          <router-link @click="navStore.handleShowAuth" to="/login" class="cursor-pointer p-2 hover:bg-blue-500"
            >Sign in</router-link
          >
          <div class="p-1">|</div>
          <router-link
          @click="navStore.handleShowAuth"
            to="/register"
            class="cursor-pointer p-2 hover:bg-blue-500"
            >Register</router-link
          >
        </div>
      </div>
    </div>
  </div>

  
</template>

<script>
import { useAuthStore } from "@/store/auth";
import ModalViewVue from "@/views/components/ModalView.vue";
import CreateProfileVIewVue from "../user/CreateProfileVIew.vue";
import {useNavStore} from '@/store/nav'
export default {
  components: {
    ModalViewVue,
    CreateProfileVIewVue,
  },
  setup() {
    const authStore = useAuthStore();
     authStore.getUser()
     const navStore = useNavStore()
    
    return { authStore ,navStore};
  },
};
</script>

<style>
</style>