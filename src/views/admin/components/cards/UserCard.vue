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
          <img
            :src="user.user_profile.image"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div>
        <div class="font-bold" v-if="user.user_profile">
          {{ user.user_profile.firstname }} {{ user.user_profile.lastname }}
        </div>
        <div>
          <span
            class="badge badge-ghost badge-sm"
            v-for="role in user.roles"
            :key="role.id"
            >{{ role.name }}</span
          >
        </div>
      </div>
    </div>
  </td>
  <td v-if="user.user_profile">
    {{ user.user_profile.address }}
    <br />
  </td>
  <td>
    <div class="flex  gap-2">
        <div class="w-5 h-5 cursor-pointer tooltip " :data-tip="user.user_profile.contact_number">
            <img src="@/assets/icons/email-icon.svg"/>
        </div>
        <div class="w-5 h-5 cursor-pointer tooltip" :data-tip="user.email">
            <img src="@/assets/icons/phone-icon.svg"/>
            
        </div>
    </div>
  </td>
  <th>
    <button class="btn btn-ghost btn-xs">details</button>
  </th>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style>
</style>