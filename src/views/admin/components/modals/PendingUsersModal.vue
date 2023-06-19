<template>
<div  class="bg-white text-black">
    <div class="flex text-lg font-bold p-3">Pending Requests</div>

    <div class="h-96 overflow-auto">

        <div v-for="user in adminStore.pendingRequest.users" :key="user.id">
           <UserCard :user="user"/>
        </div>
    </div>
</div>
</template>

<script>
import { useAdminStore } from '@/store/admin';
import { onMounted,computed } from 'vue';
import UserCard from './UserCard'


export default {
    components:{
        UserCard
    },
    setup(){
        const adminStore = useAdminStore()

        const fullName = computed(()=>{

        })

        onMounted(()=>{
            adminStore.getPendingUsers()
        })
        return {adminStore}
    }

}
</script>

<style>

</style>