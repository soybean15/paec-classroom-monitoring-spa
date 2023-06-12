<template>
  <div class="navbar  bg-primary">
    <div class="flex-none"></div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-white text-xl"
        >PCM</a
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
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        <div v-else>
            <ul
            class="p-2 shadow menu dropdown-content  _bg-secondary rounded-box w-52 text-white font-semibold"
          >
            <li><a>Register</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
export default {
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
};
</script>

<style>
</style>