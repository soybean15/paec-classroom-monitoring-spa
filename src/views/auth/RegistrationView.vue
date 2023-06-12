<template>
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form @submit.prevent="authStore.handleRegister" class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" v-model="authStore.form.email" id="email" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-sky-500 
                      focus:outline-none focus:ring-1 focus:border-sky-500 block w-full p-2.5 dark:bg-gray dark:border-sky-500  
                      dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com">
                  </div>
                  <div>
                      <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input type="text" name="name" v-model="authStore.form.name" id="name" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:outline-none focus:ring-1 
                      rounded-full focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 
                      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                      dark:focus:border-blue-500" placeholder="Name">
                  </div>
                  <div>
                      <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" v-model="authStore.form.password" id="password" placeholder="••••••••" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-sky-500 
                      focus:outline-none focus:ring-1 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white">
                  </div>
                  <div>
                      <label for="confirm-password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" v-model="authStore.form.confirmPassword" id="confirm-password" placeholder="••••••••" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-sky-500 focus:border-sky-500 
                      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-1">
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" 
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 
                        dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" class="bg-sky-500 w-full text-white focus:ring-2 focus:outline-none focus:ring-sky-500 
                    rounded-full text-sm font-semibold px-5 py-2.5 text-center dark:hover:bg-sky-500 dark:focus:ring-sky-500">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" class="font-medium text-sky-500 hover:underline">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
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