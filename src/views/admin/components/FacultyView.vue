<template>
  <div class="bg-white">
    <div class="flex items-center py-1 px-3 shadow-lg">
      <button class="btn btn-active btn-primary btn-sm">Search</button>
      <input type="text" placeholder="Search"
        class="input input-bordered input-info input-sm w-full bg-slate-100 mx-3 max-w-xs" />
      <div class="flex grow"></div>
      <div class="">
        <div class="dropdown dropdown-bottom dropdown-end">
          <label tabindex="0" class="btn m-1 btn-success btn-sm ">Create
            <div class=""><svg fill="#00000" height="14px" width="14px" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330"
                xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z">
                  </path>
                </g>
              </svg></div>
          </label>
          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-emerald-500 rounded-box w-52">
            <li class="hover:bg-emerald-700"><a>Course</a></li>
            <li class="hover:bg-emerald-700"><a>Subject</a></li>
          </ul>
        </div>


      </div>

    </div>
    <div class="flex items-center pl-2">
      <div class="flex">
        <div class="tabs">
          <a class="tab tab-md" @click="userStore.getUserByRole(null, 2)"
            :class="{ 'tab-active': userStore.roleButtonState.teacher_btn }">Teachers</a>
          <a class="tab  tab-md" @click="userStore.getUserByRole(null, 3)"
            :class="{ 'tab-active': userStore.roleButtonState.student_btn }">Students</a>
        </div>
      </div>
      <div class="flex grow"></div>
      <div class="p-3">
        <select class="select select-ghost bg-white text-black w-full max-w-xs border">
          <option disabled selected>Filter by Department</option>
          <option>Svelte</option>
          <option>Vue</option>
          <option>React</option>
        </select>
      </div>

      <div class="p-3 relative">
        <button onclick="my_modal_4.showModal()" @click="userStore.getPendingUsers" class="btn btn-sm btn-primary">
          Request
          <div class="badge badge-success" v-if="userStore.pendingRequest">
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
                  <button @click="userStore.getUserByRole(link.url)" class="join-item btn btn-sm"
                    :class="{ 'active': link.active }" v-for="link in userStore.users.links" :key="link.id">
                    <h1 v-html="link.label"></h1>
                  </button>

                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->

            <tr class=" " v-for="user in userStore.users.data" :key="user.id">

              <UserCard :user="user" :store="userStore" />
            </tr>


            <!-- row 2 -->
          </tbody>
          <!-- foot -->
        </table>
      </div>
    </div>
  </div>


  <ModalViewVue>

    <PendingUsersModal />

  </ModalViewVue>
</template>

<script>
import UserCard from "./cards/UserCard";
import ModalViewVue from "@/views/components/ModalView2.vue";
import PendingUsersModal from './modals/PendingUsersModal.vue'
import UserProfileModal from './modals/UserProfileModal.vue';
import { useUserStore } from "@/store/users";


export default {
  components: {
    UserCard,
    ModalViewVue,
    PendingUsersModal,
    UserProfileModal
  },
  setup() {
    const userStore = useUserStore();
    userStore.getPendingUsers();

    //first param should be null,
    //second param: 2 on teachers 3 on student
    userStore.getUserByRole(null, 2);

    return { userStore };
  },
};
</script>

<style scoped>
.tab-active {
  font-weight: bold;
  @apply text-zinc-600;
}

table,
tr {
  border: none;
}

tr:nth-child(even) {
  background: #ece9e9;

}

.head {
  background: #ece9e9
}

.join-item {
  background: #cecccc;
  @apply border border-gray-400 text-gray-600;
}

.join-item.active {
  background: #919090;
}
</style>