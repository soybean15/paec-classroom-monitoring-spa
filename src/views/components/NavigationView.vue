<template>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex">
    <!-- Page content here -->
    <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
    <li><router-link to="/">Home</router-link> </li>
    <li><router-link to="/about">About</router-link> </li>
    <li><router-link to="/login">Login</router-link> </li>
    <li><router-link to="/register">Register</router-link></li>
      
    </ul>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>