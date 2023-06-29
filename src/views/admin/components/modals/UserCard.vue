<template>
 
  <div class="flex items-center m-1 shadow-lg bg-gray-50 rounded-lg">
    <div ><img class="m-1 w-12 h-12 rounded-full " :src="user.user_profile.image"/></div>
    <div class="m-2"> {{ fullName }}</div>
    <div class="flex grow items-center text-gray-400 text-xs">{{ user.created_at_diff }}</div>
    <div class="m-2 flex items-center">
        <div v-if="!user.accepted">
            <button @click.prevent="store.acceptUser(user)" class="btn btn-primary btn-xs mx-0.5">Accept</button>
        </div>
        <div v-else class="text-xs p-1 bg-amber-100 border-amber-300 border rounded-md">Accepted</div>
        <button @click.prevent class="btn btn-error btn-xs mx-0.5">Reject</button>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, onUnmounted} from 'vue'
export default {
    props:['user','store'],
    setup(props){

        const fullName = computed(()=>{
            if(props.user.user_profile){

                return `${props.user.user_profile.firstname} ${props.user.user_profile.lastname}`
            }
        })

        return {fullName}
        
    }

}
</script>

<style>

</style>