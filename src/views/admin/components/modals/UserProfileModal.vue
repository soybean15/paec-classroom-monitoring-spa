<template>
    <div class=" flex bg-stone-200 h-full w-full  "  v-if="store.selectedUser">
        <div class=" flex flex-col border-r-2 w-56 shadow-lg bg-white">
            <div class="flex justify-center  p-5 pb-3">
                <img class="w-32" :src="store.selectedUser.user_profile.image">
            </div>
            <div class="flex  items-center justify-center text-black font-semibold w-full">
                <div class="bg-black p-1 rounded-md font-semibold font-sans text-xs mx-1 text-white">Name</div>
                <div>{{ fullName }}</div>
              
            </div>
            <!-- <div class="text-black">{{ store.selectedUser.name }}</div>
            <div class="text-black">{{ store.selectedUser.id }}</div> -->
            <div class="bg-stone-100  h-full mt-5 border-y-1 border-black shadow-xl">

                <div :class="{'bg-white shadow-md  text-black':button.active, 'hover:bg-stone-200 text-gray-600':!button.active}" @click="navigate(button)" class="flex  justify-center items-center p-3 border cursor-pointer"  v-for="button in sideButtons" :key="button.name">

                 <div class="   font-bold font-sans ">{{button.label}}</div>
                </div>
               
            </div>


        </div>


        <div class="flex flex-col  grow">
            <div v-if="sideButtons[0].active">
                <ClassesView/>
            </div>
            <div v-if="sideButtons[1].active">
                <SubjectView :store="adminStore"/>
            </div>
            <div v-if="sideButtons[2].active">
                <WeeklyScheduleView/>
            </div>
            <div v-if="sideButtons[3].active">
                <CalendarView/>
            </div>
           
            
        </div>

    </div>
</template>

<script>

import { computed,ref } from 'vue'
import ClassesView from './user/ClassesView.vue'
import SubjectView from './user/SubjectView.vue'
import CalendarView from './user/CalendarView.vue'
import { useAdminStore } from '@/store/admin'
import WeeklyScheduleView from './user/WeeklyScheduleView.vue'
export default {
    props: ['user','store'],
    components:{
        ClassesView,
        SubjectView,
        CalendarView,
        WeeklyScheduleView
    },  
    setup(props) {

        const adminStore = useAdminStore()



     

        const fullName = computed(() => {
            if (props.store.selectedUser.user_profile) {

                return `${props.store.selectedUser.user_profile.firstname} ${props.store.selectedUser.user_profile.lastname}`
            }
        })






        const sideButtons = ref([
            {label: 'Classes', active:true},
            {label: 'Subject', active:false},
            {label: 'Schedules', active:false},
            {label: 'Calendar', active:false},          
            {label: 'Report', active:false},
        ])

        let activeButtom = sideButtons.value[0]

        const navigate=(button)=>{
          
           
            activeButtom.active = false
            
            button.active = true
            activeButtom = button 
            console.log(sideButtons)

        }

        return { 
            fullName, 
            sideButtons,
            navigate,
            adminStore,
            
        }

    }
}
</script>

<style></style>