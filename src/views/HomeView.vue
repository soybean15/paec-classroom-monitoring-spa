<template>

  <div class="flex">
    <div class="">
          <div class="hero-content pr-0 pt-3 flex-col hidden md:block  ">
            <div class="flex flex-col ml-4">
              <div class="w-full md:flex md:justify-center">
                <img
                  src="../assets/logo/paec-logo.png"
                  class="mb-4 w-48 rounded-lg shadow-2xl"
                />
              </div>
              <div class="">
                <h1 class="text-5xl font-bold">
                  Peñaranda Off Campus School Monitoring System
                </h1>
                <p class="py-1">
                  The Teacher Monitoring System serves as a hero by empowering
                  educational administrators to effectively track and evaluate
                  teachers' performance, ensuring accountability and improving
                  the overall quality of education.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div :class="{hidden:navStore.showAuth}" class="slide-animation">
          <AuthViewVue > 
           <router-view></router-view>
          </AuthViewVue >
        </div>
        
  </div>
    
</template>

<script>
import { onMounted,onUnmounted, ref } from 'vue';
import UserProfileView from './user/UserProfileView.vue';
import { useAuthStore } from "@/store/auth";
import AuthViewVue from './auth/AuthView.vue'
import LoginViewVue from './auth/LoginView.vue';
import {useNavStore} from '@/store/nav'
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    UserProfileView,
    AuthViewVue,
    LoginViewVue
  },
  props:['showAuth'],
  setup() {
  
    const authStore = useAuthStore()
    const navStore = useNavStore()
      onMounted(()=>{
        authStore.getUser()
        
      })


    

      return {navStore}
    
  },
};
</script>
<style scoped>
.slide-animation {
  animation: slide 1s forwards;
}


@keyframes slide {
  from {
    transform: translateX(100%);
  }
  
  to {
    transform: translateX(0);
  }
}

</style>
