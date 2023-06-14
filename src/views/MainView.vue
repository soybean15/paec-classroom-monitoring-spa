<template>
    <NavigationView/>

    <router-view/>
  
</template>

<script>
import { useUserStore } from '@/store/user';

import NavigationView from './components/NavigationView.vue';
export default {
    components:{
        NavigationView
    }
,
setup(){
      const userStore = useUserStore()
      userStore.getUser()
}

}
</script>

<style>

</style>