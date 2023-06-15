<template>
  <div class="drawer bg-blue-900">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex">
      <!-- Page content here -->
      <label for="my-drawer" class="w-9">
        <img src="../../../assets/menu.svg" class="cursor-pointer" />
      </label>
      <div class="flex-grow"></div>
   
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul
        class="menu p-4 w-60 h-full bg-base-200 text-base-content bg-blue-500"
      >
        <!-- Sidebar content here -->
        <h5
          class="text-left mb-3 font-semibold text-white uppercase dark:text-gray-400"
        >
          Menu
        </h5>

        <li id="hover">
          <router-link to='/dashboard' class="text-white text-2xl">
            <img src="../../../assets/home.svg" class="w-6" />
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/faculty" class="text-white text-2xl">
            <img src="../../../assets/about.svg" class="w-6" />
            Faculty
          </router-link>
        </li>
        <li>
          <router-link to="/report" class="text-white text-2xl">
            <img src="../../../assets/login.svg" class="w-6" />
            Report
          </router-link>
        </li>
        <li>
          <router-link to="/" class="text-white text-2xl">
            <img src="../../../assets/register.svg" class="w-6" />
            Exit
          </router-link>
        </li>
      </ul>
    </div>
  </div>


  
</template>

<script>

export default {
  setup() {
   

    return {  };
  },
};
</script>

<style>
li:hover {
  background-color: rgb(30 58 138);
  border-radius: 10px;
}
</style>