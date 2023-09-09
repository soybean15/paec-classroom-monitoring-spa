<template>
    <div class=" m-5 rounded-lg shadow-xl  overflow-hidden  ">
        <ul class="steps steps-vertical w-full ">


            <li class="step step-primary  text-black w-full hover:bg-transparent" v-for="item in userStore.classes" :key="item.id">
                <div class="flex text-md font-semibold">{{item[0].day}}</div>
               
            </li>
            <!-- <li class="step step-primary  text-black w-full hover:bg-transparent " v>
                <div class="bg-white w-full h-full flex flex-col justify-center  px-4">
                    <div class="flex text-md font-semibold">Math</div>
                    <div class="flex text-xs text-gray-600 ">Schedules</div>
                </div>
            </li>
            <li class="step step-primary  text-black w-full">
                <div class="bg-white w-full h-full flex flex-col justify-center px-4">
                    <div class="flex text-md font-semibold">English</div>
                    <div class="flex text-xs text-gray-600 ">Schedules</div>
                </div>
            </li>
            <li class="step step-primary  text-black w-full">
                <div class="bg-white w-full h-full flex flex-col justify-center px-4">
                    <div class="flex text-md font-semibold">Programming 1</div>
                    <div class="flex text-xs text-gray-600 ">Schedules</div>
                </div>
            </li>
 -->

        </ul>
    </div>
</template>

<script>
import { useUserStore } from '@/store/users'
import { onMounted } from 'vue'
export default {
    setup() {
        const userStore = useUserStore()

        onMounted(() => {
            userStore.getTeacherClasses()
        })

        return { userStore }
    }


}
</script>

<style></style>