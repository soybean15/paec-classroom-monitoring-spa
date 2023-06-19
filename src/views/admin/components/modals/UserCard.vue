<template>
 
  <div class="flex items-center m-1 shadow-lg bg-gray-50 rounded-lg">
    <div ><img class="m-1 w-12 h-12 rounded-full " :src="user.user_profile.image"/></div>
    <div class="m-2"> {{ fullName }}</div>
    <div class="flex grow"></div>
    <div class="m-2">
        <button @click.prevent class="btn btn-primary btn-xs mx-0.5">Accept</button>
        <button @click.prevent class="btn btn-error btn-xs mx-0.5">Reject</button>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue'
export default {
    props:['user'],
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