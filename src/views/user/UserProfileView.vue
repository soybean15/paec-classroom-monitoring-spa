<template>
    <section class="dark:bg-gray-900 ">

     <div class="flex flex-col h-full w-full bg-gray-900 items-center justify-center py-8  md:h-screen ">
      <div class="flex w-1/4 h-full bg-white shadow-lg shadow-gray-600/50 shadow dark:border dark:border-gray-700 justify-center">
        <div class="flex flex-col mt-10 items-center ">
         
              <div v-if="authStore.user.profile">
                <img
                  class="w-40 h-40 rounded-full"
                  :src="authStore.user.profile.image"
                />
              </div>

              <div>
                <h1 class="text-gray-500 text-2xl font-bold mt-5">Sam Anderson</h1>
                <h2 class="text-gray-400">09744585858</h2>
                <h2 class="text-gray-400">Male</h2>
              </div>

      </div>
      </div>
     </div>
    </section>
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { onMounted } from "vue";

export default {
  setup() {
    const authStore = useAuthStore();

    onMounted(() => {
      authStore.getUser();
      //  authStore.getProfile()
    });

    
    return { authStore };
  },
};
</script>

<style>

</style>