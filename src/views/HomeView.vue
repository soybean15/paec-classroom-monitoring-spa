<template>

  <CreateProfileVIewVue/>
</template>

<script>
// @ is an alias to /src
import { useAuthStore } from '@/store/auth';
import CreateProfileVIewVue from './user/CreateProfileVIew.vue'
export default {
  name: 'HomeView',
  components: {
    CreateProfileVIewVue
  },
  setup(){
    const authStore = useAuthStore()
   authStore.getUser()
    
  }
}
</script>
