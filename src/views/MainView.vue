<template>
    <NavigationView/>

    <router-view/>
  
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { onMounted } from 'vue';
import NavigationView from './components/NavigationView.vue';
export default {
    components:{
        NavigationView
    }
,
setup(){
      const authStore = useAuthStore()
      onMounted(()=>{
        authStore.getUser()
      })
      //
    
}

}
</script>

<style>

</style>