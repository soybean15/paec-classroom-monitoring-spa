<template>
    home
  
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { onMounted } from "vue";
export default {
    setup(){
        const authStore = useAuthStore()
        onMounted(() => {
            authStore.getUser()
        })
        //
    }

}
</script>

<style>

</style>