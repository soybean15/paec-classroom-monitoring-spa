<template>
  <div class="card mb-40 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-75">
      <div class="card-body">
        <h1 class="text-xl font-bold flex">Login </h1>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
      </div>
</template>
  

<script>
import { useAuthStore } from "../../store/auth";
export default {
  setup() {
    const authStore = useAuthStore();

    return { authStore };
  },
};
</script>

<style>
</style>