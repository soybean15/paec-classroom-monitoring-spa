<template>
  
</template>

<script>
// @ is an alias to /src
import { useAuthStore } from '@/store/auth';

export default {
  name: 'HomeView',
  components: {
    
  },
  setup(){
    const authStore = useAuthStore()
    authStore.getUser()
  }
}
</script>
