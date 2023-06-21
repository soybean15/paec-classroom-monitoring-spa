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
            @click="userStore.getUserByRole(null,2)"
            :class="{ 'tab-active': userStore.roleButtonState.teacher_btn }"
            >Teachers</a
          >
          <a
            class="tab  tab-md"
            @click="userStore.getUserByRole(null,3)"
            :class="{ 'tab-active': userStore.roleButtonState.student_btn }"
            >Students</a
          >
        </div>
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
        <button onclick="my_modal_3.showModal()" @click="userStore.getPendingUsers" class="btn btn-sm btn-primary">
          Request
          <div
            class="badge badge-success"
            v-if="userStore.pendingRequest"
          >
            {{ userStore.pendingRequest.count }}
          </div>
        </button>
      </div>
    </div>



    <!-- User Table -->
    <div class="z-0">
      <div class="overflow-x-auto text-black ">
        <table class="table">
          <!-- head -->
          <thead class="head">
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th class="text-black">Name</th>
              <th class="text-black">Address</th>
              <th class="text-black">Contacts</th>
              <th class="flex flex-row-reverse">
                <div class="join">
                  <button @click="userStore.getUserByRole(link.url)" class="join-item btn btn-sm" :class="{'active':link.active}" v-for="link in userStore.users.links" :key="link.id"><h1 v-html="link.label"></h1></button>
                  
                  </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
          
            <tr class=" " v-for="user in userStore.users.data" :key="user.id">
             
              <UserCard :user="user" />
            </tr>
           

            <!-- row 2 -->
          </tbody>
          <!-- foot -->
        </table>
      </div>
    </div>
  </div>


  <ModalViewVue><PendingUsersModal/></ModalViewVue>
</template>

<script>
import UserCard from "./cards/UserCard";
import ModalViewVue from "@/views/components/ModalView.vue";
import PendingUsersModal from './modals/PendingUsersModal.vue'
import { useUserStore } from "@/store/users";
import { onMounted } from "vue";
import PendingUsersModalVue from './modals/PendingUsersModal.vue';
export default {
  components: {
    UserCard,
    ModalViewVue,
    PendingUsersModal
  },
  setup() {
    const userStore = useUserStore();
    userStore.getPendingUsers();

    //first param should be null,
    //second param: 2 on teachers 3 on student
    userStore.getUserByRole(null,2);

    return { userStore };
  },
};
</script>

<style scoped>
.tab-active {
  font-weight: bold;
  @apply text-zinc-600;
}
table,tr{
  border:none;
}
tr:nth-child(even) {
  background: #ece9e9;

}
.head{background: #ece9e9}
.join-item{
  background: #cecccc;
  @apply border border-gray-400 text-gray-600;
}
.join-item.active{
  background: #919090;
}
</style>