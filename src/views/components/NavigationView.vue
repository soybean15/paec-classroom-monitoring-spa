<template>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex ">
    <!-- Page content here -->
    <label for="my-drawer" class="w-9">
      <img src="../../assets/menu.svg"/>
    </label>
    <div class="flex-grow"></div>
    <div class="flex">

      <!-- User Image -->
      <div v-if="userStore.user.profile">
         <img class="w-10, h-10 rounded-full m-2" :src="userStore.user.profile.image"/>
      </div>

      <!-- User Name -->
      <div class="flex items-center  mr-6 text-white">
        {{ userStore.user.profile.firstname  }}   {{ userStore.user.profile.lastname  }}
      </div>
     
    </div>
  </div>
  <div class="drawer-side">
    
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content bg-green-600">
      <!-- Sidebar content here -->
      <h5 class="text-left mb-3 font-semibold text-white uppercase dark:text-gray-400">Menu</h5>

      <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close menu</span>
        
    </button>
    <li>
      <router-link to="/" class="">
        <img src="../../assets/home.svg" class="w-6"/>
        <label>Home</label>
      </router-link>
    </li>
    <li>
      <router-link to="/about">
        <img src="../../assets/about.svg" class="w-6"/>
        About
      </router-link> </li>
    <li>
      <router-link to="/login">
        <img src="../../assets/login.svg" class="w-6"/>
        Login
      </router-link> </li>
    <li>
      <router-link to="/register">
        <img src="../../assets/register.svg" class="w-6"/>
        Register
      </router-link>
    </li>
      
    </ul>
  </div>
</div>

</template>

<script>
import { useUserStore } from '@/store/user';
export default {

  setup(){
    const userStore = useUserStore()
    userStore.getUser()

    return {userStore}

  }

}
</script>

<style>

</style>