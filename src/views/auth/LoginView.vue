<template> 

  <div class="h-full">
  <section class=" h-full">
    <div class="shadow-lg shadow-gray-600/50 flex justify-center h-full">
      <div class="bg-primary w-96 shadow dark:border bg-cover rounded px-8 pt-8 pb-8 ">
        <h1 class="text-xl leading-tight tracking-tight text-color md:text-2xl mb-">
                  Login
        </h1>
        <form @submit.prevent="authStore.handleLogin">
          <img/>
          <div>
            <label>
              <span class=" pr-64 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-left font-medium text-color">
                Email
              </span>
              <input type="email" name="email" v-model="authStore.form.email" class=" mb-3 w-full max-w-xs px-3 py-2 
              input-text bg-secondary border shadow-sm input-boer focus:outline-none 
              focus-border focus-ring rounded-full sm:text-sm focus:ring-1" placeholder="you@example.com" />
            </label>
            <div class="text-xs text-red-400" v-if="authStore.errors.email">
              {{authStore.errors.email[0]  }}
            </div>
          </div>
          <div>
            <label>
              <span class=" pr-56 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-left font-medium text-color">
                Password
              </span>
              <input type="password" name="password" v-model="authStore.form.password" class="input-text w-full max-w-xs
              px-3 py-2 bg-secondary border shadow-sm input-border focus:outline-none focus-border 
              focus-ring rounded-full sm:text-sm focus:ring-1" placeholder="password" />
             
            </label>
            <div class="text-xs text-red-400" v-if="authStore.errors.password">
              {{authStore.errors.password[0]  }}
            </div>
            <div class="mt-2 space-x-10">
              <button class="btn btn-ghost text-sm font-medium text-color h-1">Forgot password?</button>
              <button class="bg-secondary-variant hover:bg-blue-500 text-white font-bold py-1 px-4 rounded-full">Login</button>
            </div>
            <div>
            </div>
          </div>
        </form><br>
      </div>
    </div>
  </section>

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