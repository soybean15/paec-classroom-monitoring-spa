<template>
  <div class="card mb-40 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-75">
    <form @submit.prevent="authStore.handleRegister" class="card-body">
      <h1 class="text-xl font-bold flex">Register </h1>
      <div class="form-control">
        <label class="label flex">
          <span class="label-text">Email</span>
          <div class="flex grow"></div>
          <span class="label-text text-red-400" v-if="authStore.errors.email">{{ authStore.errors.email[0] }}</span>
        </label>
        <input type="email" v-model="authStore.form.email" placeholder="example@gmail.com" class="input input-bordered" />
      </div>
      <div class="form-control">
        <label class="label flex">
          <span class="label-text">Username</span>
          <div class="flex grow"></div>
          <span class="label-text text-red-400" v-if="authStore.errors.name">{{ authStore.errors.name[0] }}</span>
        </label>
        <input type="text" v-model="authStore.form.name" placeholder="username123" class="input input-bordered" />
      </div>


      <div class="form-control">
        <label class="label flex">
          <span class="label-text">Password</span>
          <div class="flex grow"></div>
          <span class="label-text text-red-400" v-if="authStore.errors.password">{{ authStore.errors.password[0] }}</span>
        </label>
        <input type="password" v-model="authStore.form.password" placeholder="••••••••" class="input input-bordered" />

      </div>

      <div class="form-control">
        <label class="label flex">
          <span class="label-text">Confirm Password</span>
          <div class="flex grow"></div>
         
        </label>
        <input type="password" v-model="authStore.form.confirmPassword" placeholder="••••••••"
          class="input input-bordered" />
      </div>

      <div class="form-control">
        <label class="label flex">
        <span class="label-text">Role</span>
        <div class="flex grow"></div>
        <div class="label-text text-red-400" v-if="authStore.errors.role">
          {{ authStore.errors.role[0] }}
        </div>
      </label>
        <select
          class="input input-bordered">
          <option disabled selected>Select Role</option>
          <option v-for="role in authStore.roles" :key="role.id" @click="selectRole(role)">
            {{ role.name }}
          </option>

        </select>
        

      </div>





      <div class="form-control mt-6">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/auth";
export default {
  setup() {
    const authStore = useAuthStore();
    authStore.getRoles();

    const selectRole = (role) => {
      authStore.form.role = role.id;
      console.log("Selected");
    };
    return { authStore, selectRole };
  },
};
</script>

<style></style>