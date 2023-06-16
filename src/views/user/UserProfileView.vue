<template>
    
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