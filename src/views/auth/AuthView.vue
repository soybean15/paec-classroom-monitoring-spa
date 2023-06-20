<template>
  <div class="flex ">
    <div class="hero min-h-screen" :style="`background-image: url(${bgImage})`">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class=" w-full flex h-full pt-3">
        <div class="">
          <div class="hero-content pr-0 pt-3 flex-col hidden md:block ">
            <div class="flex flex-col ml-4">
              <div class="w-full md:flex md:justify-center">
                <img
                  src="../../assets/logo/paec-logo.png"
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
       
        <div class=" auth md:p-3 flex  justify-center md:justify-end  w-full md:w-128">
          <router-view></router-view>
        </div>
      </div>
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