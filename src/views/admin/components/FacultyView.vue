<template>
  <div class="bg-white">
    <div class="flex flex-row-reverse p-3">
      <input
        type="text"
        placeholder="Search"
        class="input input-ghost p-0 h-7 w-full bg-slate-200 max-w-xs"
      />
    </div>
    <div class="flex">
      <div class="p-3">
        <select
          class="select select-ghost bg-white text-black w-full max-w-xs border"
        >
          <option disabled selected>Filter by Department</option>
          <option>Svelte</option>
          <option>Vue</option>
          <option>React</option>
        </select>
      </div>
      <div class="flex grow"></div>
      <div class="p-3 relative">
        <button class="btn btn-primary">
          Inbox
          <div class="badge badge-success">+99</div>
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
import { useAdminStore } from '@/store/admin';
export default {
  setup(){
    const adminStore = useAdminStore()
    adminStore.getUsers()
    return {adminStore}

  }
};
</script>

<style>
</style>