<template>
  
  <div class=" auth md:p-3 flex  justify-center md:justify-end  w-full md:w-128">
          <slot></slot>
        </div>
</template>

<script>
import LoginView from "./LoginView.vue";
import HomeViewVue from "../HomeView.vue";
export default {
  components: { LoginView , HomeViewVue},
  setup() {
    const bgImage = require("@/assets/img/school-bg.jpg");
    return { bgImage };
  },
};
</script>


<style>

</style>