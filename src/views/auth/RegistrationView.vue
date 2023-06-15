<template>
  <section class="dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full h-full bg-primary shadow-lg shadow-gray-600/50 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="w-96 p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl leading-tight tracking-tight md:text-2xl text-color"
          >
            Create an account
          </h1>
          <form
            @submit.prevent="authStore.handleRegister"
            class="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                for="email"
                class="text-left block mb-2 text-sm font-medium text-color"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                v-model="authStore.form.email"
                id="email"
                class="bg-secondary border input-border input-text sm:text-sm rounded-full focus-ring focus:outline-none focus:ring-1 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                for="name"
                class="text-left block mb-2 text-sm font-medium text-color"
                >Name</label
              >
              <input
                type="text"
                name="name"
                v-model="authStore.form.name"
                id="name"
                class="bg-secondary border input-border input-text sm:text-sm focus:outline-none focus:ring-1 rounded-full focus-ring focus-border block w-full p-2.5 placeholder-color"
                placeholder="Name"
              />
            </div>
            <div>
              <label
                for="password"
                class="text-left block mb-2 text-sm font-medium text-color"
                >Password</label
              >
              <input
                type="password"
                name="password"
                v-model="authStore.form.password"
                id="password"
                placeholder="••••••••"
                class="bg-secondary border input-border input-text sm:text-sm rounded-full focus-ring focus:outline-none focus:ring-1 focus-border block w-full p-2.5 placeholder-color"
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="text-left block mb-2 text-sm font-medium text-color"
                >Confirm password</label
              >
              <input
                type="confirm-password"
                name="confirm-password"
                v-model="authStore.form.confirmPassword"
                id="confirm-password"
                placeholder="••••••••"
                class="bg-secondary border input-border input-text sm:text-sm rounded-full focus-ring focus-border block w-full p-2.5 placeholder-color focus:outline-none focus:ring-1"
              />
            </div>
            <div>
                <label
                for="confirm-password"
                class="text-left block mb-2 text-sm font-medium text-color"
                >Role</label>
              <details class="dropdown flex mb-32 ">
                <summary class=" btn rounded-full bg-white text-gray-700 flex">open or close</summary>
                <ul
                  class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                 
                >
                
                    <li v-for="role in authStore.roles" :key="role.id" ><a>{{role.name}}</a></li>
                 
                 
                  
                </ul>
                
              </details>
            </div>
            
         
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="text-color"
                  >I accept the
                  <a class="font-medium text-color hover:underline" href="#"
                    >Terms and Conditions</a
                  ></label
                >
              </div>
            </div>
            <button
              type="submit"
              class="bg-secondary-variant hover:bg-blue-500 w-full text-white focus:ring-2 focus:outline-none focus-ring rounded-full text-sm font-semibold px-5 py-2.5 text-center"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-color">
              Already have an account?
              <a href="#" class="font-medium text-blue-500 hover:underline"
                >Login here</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useAuthStore } from "@/store/auth";
export default {
  setup() {
    const authStore = useAuthStore();
    authStore.getRoles()
    return { authStore };
  },
};
</script>

<style>
</style>