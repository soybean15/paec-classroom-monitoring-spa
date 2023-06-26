<template>
  <th>
    <label>
      <input type="checkbox" class="checkbox" />
    </label>
  </th>
  <td>

    <div class="flex items-center space-x-3" v-if="user.user_profile">
      <div class="avatar">
        <div class="mask mask-squircle w-12 h-12">
          <img :src="user.user_profile.image" alt="Avatar Tailwind CSS Component" />
        </div>
      </div>
      <div>
        <div class="font-bold text-neutral-700" v-if="user.user_profile">
          {{ fullName }}
        </div>
        <div>
          <span class="badge badge-sm" :class="role.id === 2 ? 'badge-warning' : 'badge-info'" v-for="role in user.roles"
            :key="role.id">{{ role.name }}</span>
        </div>
      </div>
    </div>
  </td>
  <td class="text-neutral-500" v-if="user.user_profile">
    {{ user.user_profile.address }}
    <br />
  </td>
  <td>
    <div class="flex  gap-2">
      <div class="w-5 h-5 cursor-pointer tooltip " :data-tip="user.user_profile.contact_number">
        <img src="@/assets/icons/email-icon.svg" />
      </div>
      <div class="w-5 h-5 cursor-pointer tooltip" :data-tip="user.email">
        <img src="@/assets/icons/phone-icon.svg" />

      </div>
    </div>
  </td>
  <th>
    <button onclick="my_modal_3.showModal()" @click="store.selectUser(user)"  class="btn btn-ghost btn-xs">details</button>
  </th>


  <ModalView :isProfile="true">

    <UserProfileModal :user='user' :store="store" />

  </ModalView>
</template>

<script>

import { computed } from 'vue'
import ModalView from '@/views/components/ModalView.vue';
import UserProfileModal from '../modals/UserProfileModal.vue';
export default {
  props: ["user","store"],
  components: {
    ModalView, UserProfileModal
  },
  setup(props) {

    const fullName = computed(() => {
      if (props.user.user_profile) {

        return `${props.user.user_profile.firstname} ${props.user.user_profile.lastname}`
      }
    })

    return { fullName }
  }
};
</script>

<style></style>