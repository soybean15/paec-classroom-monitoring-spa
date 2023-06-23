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

            <div class="bg-stone-200 h-full mt-5">

                <div class="flex justify-center items-center p-3 border bg-white shadow-md">

                    <div class="text-black   font-bold font-sans ">CLASSES</div>
                </div>
                <div class="flex justify-center items-center p-3 border  ">
                    <div class="text-black    font-bold font-sans">Subjects</div>
                </div>
                <div class="flex justify-center items-center p-3 border">
                    <div class="text-black    font-bold font-sans">Calendar</div>
                </div>
                <div class="flex justify-center items-center p-3 border">
                    <div class="text-black    font-bold font-sans">Report</div>
                </div>
            </div>


        </div>


        <div class="  grow">
            <div class=" m-5 rounded-lg shadow-xl overflow-hidden">
                <ul class="steps steps-vertical w-full ">
                    <li class="step step-primary  text-black w-full">
                        <div class="bg-white w-full h-full flex flex-col justify-center px-4">
                            <div class="flex text-md font-semibold">Math</div>
                            <div  class="flex text-xs text-gray-600 ">Schedules</div>
                        </div>
                    </li>
                    <li class="step step-primary  text-black w-full">
                        <div class="bg-white w-full h-full flex flex-col justify-center px-4">
                            <div class="flex text-md font-semibold">English</div>
                            <div  class="flex text-xs text-gray-600 ">Schedules</div>
                        </div>
                    </li>
                    <li class="step step-primary  text-black w-full">
                        <div class="bg-white w-full h-full flex flex-col justify-center px-4">
                            <div class="flex text-md font-semibold">Programming 1</div>
                            <div  class="flex text-xs text-gray-600 ">Schedules</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['user'],
    setup(props) {

        const fullName = computed(() => {
            if (props.user.user_profile) {

                return `${props.user.user_profile.firstname} ${props.user.user_profile.lastname}`
            }
        })

        return { fullName }

    }
}
</script>

<style></style>