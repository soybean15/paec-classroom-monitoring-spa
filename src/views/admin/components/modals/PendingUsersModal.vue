<template>
<div  class="bg-white text-black">
    <div class="flex text-lg font-bold p-3">Pending Requests</div>

    <div class="h-96 overflow-auto">

        <div v-for="user in userStore.pendingRequest.users" :key="user.id">
           <UserCard :user="user" :store="userStore"/>
        </div>
    </div>
</div>
</template>

<script>
import { useUserStore } from '@/store/users';
import { onMounted,computed } from 'vue';
import UserCard from './UserCard'


export default {
    components:{
        UserCard
    },
    setup(){
        const userStore = useUserStore()

        return {userStore}
    }

}
</script>

<style>

</style>