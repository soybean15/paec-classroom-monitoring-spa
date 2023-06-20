<template>



<div class="card mb-40 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-75">
    <form  @submit.prevent="authStore.handleForgotPassword"  class="card-body">
      <h1 class="text-xl font-bold flex">Forgot Password </h1>
      <div class="form-control">
        <label class="label flex">
          <span class="label-text" >Email</span>
          <div class="flex grow"></div>
          <span class="label-text text-red-400" v-if="authStore.errors.email">{{  authStore.errors.email[0]}}</span>
        </label>
        <input type="text" v-model="authStore.form.email" placeholder="example@gmail.com" class="input input-bordered" />
      </div>
     
      <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
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