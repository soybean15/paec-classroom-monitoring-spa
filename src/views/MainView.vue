<template>
    <NavigationView />




    <div class="flex ">
        <div class="hero min-h-screen" :style="`background-image: url(${bgImage})`">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class=" w-full flex h-full ">

                <router-view />



            </div>

        </div>
       

    </div>
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { onMounted } from 'vue';
import NavigationView from './components/NavigationView.vue';
import AuthViewVue from './auth/AuthView.vue';
export default {
    components: {
        NavigationView,
        AuthViewVue
    }
    ,
    setup() {
        const authStore = useAuthStore()
        onMounted(() => {
            //authStore.getUser()
        })
        //
        const bgImage = require("@/assets/img/school-bg.jpg");



        
        return { bgImage };

    }

}
</script>

<style></style>