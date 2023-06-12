<template>

<div class="drawer bg-green-600">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex">
    <!-- Page content here -->
    <label for="my-drawer" class="w-9">
      <img src="../../assets/menu.svg"/>
    </label>
  </div>
  <div class="drawer-side">
    
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content bg-green-600">
      <!-- Sidebar content here -->
      <h5 class="text-left mb-3 font-semibold text-white uppercase dark:text-gray-400">Menu</h5>

    <li id="hover">
      <router-link to="/" class="text-white font-semibold">
        <img src="../../assets/home.svg" class="w-6"/>
        Dashboard
      </router-link>
    </li>
    <li>
      <router-link to="/about" class="text-white font-semibold">
        <img src="../../assets/about.svg" class="w-6"/>
        Faculty
      </router-link> 
    </li>
    <li>
      <router-link to="/login" class="text-white font-semibold">
        <img src="../../assets/login.svg" class="w-6"/>
        Report
      </router-link> 
    </li>
    <li>
      <router-link to="/register" class="text-white font-semibold">
        <img src="../../assets/register.svg" class="w-6"/>
        Users
      </router-link>
    </li>
      
    </ul>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>
li:hover{
  background-color: rgb(21 128 61);
  border-radius: px;
}

</style>