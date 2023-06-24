<template>
    <div class=" flex bg-stone-200 h-full w-full  ">
        <div class=" flex flex-col border-r-2 w-56 shadow-lg bg-white">
            <div class="flex justify-center  p-5 pb-3">
                <img class="w-32" :src="user.user_profile.image">
            </div>
            <div class="flex  items-center justify-center text-black font-semibold w-full">
                <div class="bg-black p-1 rounded-md font-semibold font-sans text-xs mx-1 text-white">Name</div>
                <div>{{ fullName }}</div>
            </div>

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
                <SubjectView/>
            </div>
           
            
        </div>

    </div>
</template>

<script>

import { computed,ref } from 'vue'
import ClassesView from './user/ClassesView.vue'
import SubjectView from './user/SubjectView.vue'
export default {
    props: ['user'],
    components:{
        ClassesView,
        SubjectView
    },  
    setup(props) {

        const fullName = computed(() => {
            if (props.user.user_profile) {

                return `${props.user.user_profile.firstname} ${props.user.user_profile.lastname}`
            }
        })


        const sideButtons = ref([
            {label: 'Classes', active:true},
            {label: 'Subject', active:false},
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

        return { fullName, sideButtons,navigate }

    }
}
</script>

<style></style>