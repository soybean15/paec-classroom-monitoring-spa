<template>
  <div class="flex ">
    <div class="hero min-h-screen" :style="`background-image: url(${bgImage})`">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content flex-col lg:flex-row">
    
    <div class="flex flex-col mx-20 " >
      <div class="w-full flex justify-center"><img src="../../assets/logo/paec-logo.png" class="mb-4 w-48 rounded-lg shadow-2xl" /></div>
      <h1 class="text-5xl font-bold"> Peñaranda Off Campus School Monitoring System</h1>
      <p class="py-4 ">The Teacher Monitoring System serves as a hero by empowering educational administrators to effectively track and evaluate teachers' performance, ensuring accountability and improving the overall quality of education.</p>
     
    </div>
    </div>
    </div>
    <!-- <div class="h-screen flex justify-center">
      <div class="mt-10 w-full flex flex-col content-center">
        <div class="flex justify-center">
          <img class="w-80 h-80" src="../../assets/logo/paec-logo.png" />
        </div>
        <div class="flex justify-center">
          <div class="mt-4 w-5/6 text-5xl text-black font-bold">
            Peñaranda Off Campus School Monitoring System
          </div>
        </div>
        
      </div>
    </div> -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LoginView from "./LoginView.vue";
export default {
  components: { LoginView },
  setup() {
    const bgImage = require("@/assets/img/school-bg.jpg");
    return { bgImage };
  },
};
</script>


<style>
</style>