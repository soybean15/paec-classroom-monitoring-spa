<template>
  <div class="navbar  bg-primary">
    <div class="flex-none"></div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-white text-xl"
        >PCM </a
      >
    </div>
    <div class="flex-none">
      <details class="dropdown dropdown-end  ">
        <summary class="m-1 btn  bg-primary hover:bg-green-700">
       <button class="flex items-center text-2xl">...</button>
        </summary>
        <div v-if="userStore.user.user">
          <ul
            class="p-2 shadow menu dropdown-content _bg-secondary rounded-box w-52 text-white font-semibold"
          >
            <li><a>Profile</a></li>
            <li><a @click="authStore.handleLogout">Logout</a></li>
          </ul>
        </div>
        <div v-else>
            <ul
            class="p-2 shadow menu dropdown-content  _bg-secondary rounded-box w-52 text-white font-semibold"
          >
            <li><router-link to="/register">Register</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
          </ul>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import { useAuthStore } from "@/store/auth";
export default {
  setup() {
    const userStore = useUserStore();
    const authStore = useAuthStore()
    
    return { userStore,authStore };
  },
};
</script>

<style>
</style>