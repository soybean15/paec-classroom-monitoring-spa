<template>
  
</template>

<script>
// @ is an alias to /src
import { useAuthStore } from "@/store/auth";
import { useUserStore } from '@/store/user';
import CreateProfileVIewVue from "./user/CreateProfileVIew.vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const authStore = useAuthStore();
    const userStore = useUserStore()
    userStore.getUser()
    //console.log(authStore.user)
    return { authStore };
  },
};
</script>
<style scoped>
</style>
