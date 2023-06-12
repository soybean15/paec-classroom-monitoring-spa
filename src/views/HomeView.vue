<template>
  <div class="h-screen flex justify-center">
    <div class="mt-10 w-full flex flex-col content-center">
      <div class="flex justify-center">
        <img class="w-80 h-80" src="../assets/logo/paec-logo.png" />
      </div>
      <div class="flex justify-center">
        <div class="mt-4 w-5/6 text-5xl text-white font-bold">
          Peñaranda Off Campus School Monitoring System
        </div>
      </div>
      <div class="flex mt-4 justify-center">
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useAuthStore } from "@/store/auth";
import CreateProfileVIewVue from "./user/CreateProfileVIew.vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const authStore = useAuthStore();
    //authStore.getUser()
    //console.log(authStore.user)
    return { authStore };
  },
};
</script>
<style scoped>
</style>
