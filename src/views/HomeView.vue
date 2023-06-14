<template>
  This is Home
</template>

<script>
import { onMounted } from 'vue';
import { useAuthStore } from "@/store/auth";
// @ is an alias to /src

import CreateProfileVIewVue from "./user/CreateProfileVIew.vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
  
    const authStore = useAuthStore()
      onMounted(()=>{
        authStore.getUser()
        console.log('mounted')
      })
  },
};
</script>
<style scoped>
</style>
