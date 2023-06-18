<template>
  <div class="bg-white">
    <div class="flex flex-row-reverse p-3">
      <input
        type="text"
        placeholder="Search"
        class="input input-ghost p-0 h-7 w-full bg-slate-200 max-w-xs"
      />
    </div>
    <div class="flex items-center pl-2">
      <div class="flex">
        <div class="tabs">
          <a
            class="tab tab-md"
            @click="adminStore.getUserByRole(2)"
            :class="{ 'tab-active': adminStore.roleButtonState.teacher_btn }"
            >Teachers</a
          >
          <a
            class="tab  tab-md"
            @click="adminStore.getUserByRole(3)"
            :class="{ 'tab-active': adminStore.roleButtonState.student_btn }"
            >Students</a
          >
        </div>

        <!-- <div>
          <button
            @click="adminStore.getUserByRole(2)"
            :class="{ 'btn-active': adminStore.roleButtonState.teacher_btn }"
            class="btn btn-outline btn-primary btn-sm"
          >
            Teachers
          </button>
        </div>
        <div>
          <button
            @click="adminStore.getUserByRole(3)"
            :class="{ 'btn-active': adminStore.roleButtonState.student_btn }"
            class="btn btn-outline btn-primary btn-sm"
          >
            Student
          </button>
        </div> -->
      </div>
      <div class="flex grow"></div>
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

      <div class="p-3 relative">
        <button class="btn btn-sm btn-primary">
          Request
          <div
            class="badge badge-success"
            v-if="adminStore.pendingRequest.pendingUsers"
          >
            {{ adminStore.pendingRequest.pendingUsers.count }}
          </div>
        </button>
      </div>
    </div>

    <!-- User Table -->
    <div class="z-0">
      <div class="overflow-x-auto text-black">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th class="text-black">Name</th>
              <th class="text-black">Address</th>
              <th class="text-black">Contacts</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr v-for="user in adminStore.users.data" :key="user.id">
              <UserCard :user="user" />
            </tr>

            <!-- row 2 -->
          </tbody>
          <!-- foot -->
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "./cards/UserCard";
import { useAdminStore } from "@/store/admin";
import { onMounted } from "vue";
export default {
  components: {
    UserCard,
  },
  setup() {
    const adminStore = useAdminStore();
    adminStore.getUsers();

    //2 on teacher 3 on student
    adminStore.getUserByRole(2);

    return { adminStore };
  },
};
</script>

<style scoped>
.tab-active {
  font-weight: bold;
  @apply text-zinc-600;
}
</style>