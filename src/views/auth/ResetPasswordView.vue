<template>
  <div class="p-10 bg-white h-full text-black w-full">

<div class="flex text-lg font-bold">Reset Password</div>
<div class="mt-4">
   <form @submit.prevent="authStore.handleResetPassword">
    <div>
       
        <div class=" ">
            <div class="flex w-72 ">New Password</div>
            <input type="password" name="email" v-model="authStore.form.password"  class=" mb-3 w-full max-w-xs px-3 py-2 
          input-text bg-secondary border shadow-sm input-boer focus:outline-none 
          focus-border focus-ring rounded-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
        </div>
        <div class=" ">
            <div class="flex w-72 ">Confirm New Password</div>
            <input type="password" name="email" v-model="authStore.form.confirmPassword"  class=" mb-3 w-full max-w-xs px-3 py-2 
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
import { useRoute } from 'vue-router';
export default {

    setup(){
        const route = useRoute()
        console.log(route)
       

        const authStore = useAuthStore()
        authStore.form.token = route.params.token
        authStore.form.email =route.query.email
        return {authStore}
    }

   

}
</script>

<style>

</style>