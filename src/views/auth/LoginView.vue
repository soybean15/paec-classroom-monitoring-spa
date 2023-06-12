<template> 
  <img>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex justify-center ">
      <div class="bg-white w-96 shadow dark:border bg-cover rounded px-8 pt-8 pb-8 ">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-">
                  Login
        </h1>
        <form @submit.prevent="authStore.handleLogin">
          <img/>
          <div>
            <label>
              <span class="mb-2 pr-64 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input type="email" name="email" v-model="authStore.form.email" class=" mb-3 w-full max-w-xs mt-1 px-3 py-2 
              bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>
          </div>
          <div>
            <label>
              <span class="mb-2 pr-56 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input type="password" name="password" v-model="authStore.form.password" class="w-full max-w-xs mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-full sm:text-sm focus:ring-1" placeholder="password" />
            </label>
            <div class="mt-2 space-x-10">
              <button class="text-blue-500 btn btn-ghost text-sm font-medium text-slate-700 h-5">Forgot password?</button>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full">Login</button>
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