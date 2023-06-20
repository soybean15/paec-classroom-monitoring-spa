<template>

<div class="card mb-40 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-75">
    <form @submit.prevent="authStore.handleResetPassword" class="card-body">
      <h1 class="text-xl font-bold flex">Reset Password </h1>
      <div class="form-control">
        <label class="label flex">
          <span class="label-text" >New Password</span>
          <div class="flex grow"></div>
          <span class="label-text text-red-400" v-if="authStore.errors.password">{{  authStore.errors.password[0]}}</span>
        </label>
        <input type="password" v-model="authStore.form.password" placeholder="••••••••" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label flex">
          <span class="label-text" >Confirm Password</span>
          <div class="flex grow"></div>
          
        </label>
        <input type="password" v-model="authStore.form.confirmPassword" placeholder="••••••••" class="input input-bordered" />

      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
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