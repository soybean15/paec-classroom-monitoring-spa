<template>
  <div class="navbar bg-blue-800">
    <div class="flex-none"></div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-white text-xl"
        >PCM </a
      >
    </div>
    <div class="flex-none">
      <details class="dropdown dropdown-end">
        <summary class="m-1 btn  bg-blue-900  hover:bg-blue-400">
        <button class="flex items-center w-9">
        <img src="../../assets/user.png"/>
        </button>
        </summary>
        <div v-if="userStore.user.user">
          <ul>
          </ul>
        </div>
        <div v-else>
            <ul
            class="p-2 shadow menu dropdown-content bg-blue-500 rounded-box w-52 font-semibold"
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