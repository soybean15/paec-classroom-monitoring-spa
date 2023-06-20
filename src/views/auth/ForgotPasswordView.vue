<template>
  <div class="p-10 bg-white h-full text-black w-full">

    <div class="flex text-lg font-bold">Forgot Password</div>
    <div class="mt-4">
       <form @submit.prevent="authStore.handleForgotPassword">
        <div>
            <div class="flex w-72 ">Email</div>
            <div class=" ">
                <input type="email" name="email" v-model="authStore.form.email"  class=" mb-3 w-full max-w-xs px-3 py-2 
              input-text bg-secondary border shadow-sm input-boer focus:outline-none 
              focus-border focus-ring rounded-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </div>
            <div class="flex flex-row-reverse p-3">
                <input class="btn btn-accent" type="submit" value="submit"/>
            </div>
        </div>
       </form>
    </div>

  </div>
</template>

<script>
import { useAuthStore } from '@/store/auth';
export default {
    setup(){
        const authStore = useAuthStore()
        return {authStore}
    }

}
</script>

<style>

</style>