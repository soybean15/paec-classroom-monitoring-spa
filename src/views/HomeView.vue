<template>
   Home
</template>

<script>
import { onMounted,onUnmounted } from 'vue';
import UserProfileView from './user/UserProfileView.vue';
import { useAuthStore } from "@/store/auth";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    UserProfileView
  },
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
