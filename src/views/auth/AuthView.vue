<template>
  <div class="flex">
    <div class="h-screen flex justify-center">
      <div class="mt-10 w-full flex flex-col content-center">
        <div class="flex justify-center">
          <img class="w-80 h-80" src="../../assets/logo/paec-logo.png" />
        </div>
        <div class="flex justify-center">
          <div class="mt-4 w-5/6 text-5xl text-black font-bold">
            Peñaranda Off Campus School Monitoring System
          </div>
        </div>
        
      </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

import LoginView from "./LoginView.vue";
export default { components: { LoginView } };
</script>

<style>
</style>