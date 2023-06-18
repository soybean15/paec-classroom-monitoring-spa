<template>

      <th >
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
                    <div class="font-bold" v-if="user.user_profile">{{ user.user_profile.firstname }} {{ user.user_profile.lastname }}</div>
                    <div class="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td v-if="user.user_profile">
                {{user.user_profile.address}}
                <br />
                <div  >

                <span class="badge badge-ghost badge-sm" 
                  v-for="role in user.roles" :key="role.id">{{ role.name }}</span
                ></div>
              </td>
              <td>Purple</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
          
  
</template>

<script>
export default {
    props:['user']

}
</script>

<style>

</style>