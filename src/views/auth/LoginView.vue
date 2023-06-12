<template> 
  <img>
  <section class=" dark:bg-gray-900">
    <div class="flex justify-center mt-32">
      <div class="bg-green-600 w-96 shadow dark:border bg-cover rounded px-8 pt-8 pb-8 ">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl mb-">
                  Login
        </h1>
        <form @submit.prevent="authStore.handleLogin">
          <img/>
          <div>
            <label>
              <span class="mb-2 pr-64 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white font-semibold">
                Email
              </span>
              <input type="email" name="email" v-model="authStore.form.email" class=" mb-3 w-full max-w-xs mt-1 px-3 py-2 
              text-green-100 bg-green-700 border shadow-sm border-green-300 placeholder-green-100 focus:outline-none focus:border-green-500 focus:ring-green-500 rounded-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>
          </div>
          <div>
            <label>
              <span class="mb-2 pr-56 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white font-semibold">
                Password
              </span>
              <input type="password" name="password" v-model="authStore.form.password" class="text-green-100 w-full max-w-xs mt-1 px-3 py-2 bg-green-700 border shadow-sm border-green-300 placeholder-green-100 focus:outline-none focus:border-green-500 focus:ring-green-500 rounded-full sm:text-sm focus:ring-1" placeholder="password" />
            </label>
            <div class="mt-2 space-x-10">
              <button class="text-blue-500 btn btn-ghost text-sm font-medium text-white h-1">Forgot password?</button>
              <button class="bg-green-700 hover:bg-green-500 text-white font-bold py-1 px-4 rounded-full">Login</button>
            </div>
            <div>
            </div>
          </div>
        </form><br>
      </div>
    </div>
  </section>
   <div>
      <p class="pt-2 text-center text-gray-500 text-xs">
      &copy;2023 PAEC All rights reserved.
    </p>
    </div>
  </template>
  

<script>
import {useAuthStore} from '../../store/auth'
export default {
    setup(){
        const authStore = useAuthStore()
        

        return{authStore}
    }
}
</script>

<style>

</style>