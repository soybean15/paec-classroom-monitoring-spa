<template>
    <NavigationViewVue/>
    <router-view/>
  
</template>

<script>
import NavigationViewVue from './components/NavigationView.vue'
import {useAdminStore} from '@/store/admin'

export default {
components:{
    NavigationViewVue
},
setup(){
   const adminStore = useAdminStore()

   adminStore.getSettings()

}
}
</script>

<style>

</style>