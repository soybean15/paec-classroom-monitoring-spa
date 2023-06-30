<template>
    <div class="collapse px-3 m-0  hover:bg-gray-100">
        <input type="checkbox" class="p-0 m-0" />
        <div class="flex items-center collapse-title text-xs text-gray-600 pl-0 m-0   font-medium">
            <img class="w-5 mr-1" src="@/assets/icons/add.svg" />
            Add Schedule
        </div>
        <div class="collapse-content  ">
            <select  v-model="scheduleForm.day" class="select  w-full bg-slate-50 text-gray-500 border-gray-200 select-xs max-w-xs my-0.5">
                <option disabled selected>Select Day</option>
                <option v-for="day in weekdays" :key="day.value" :value="day.value">{{ day.label }}</option>
            </select>
            <div class=" text-gray-500 my-0.5 flex">
                <div class="mx-1">
                    <span>Start: </span>
                    <input  v-model="scheduleForm.start" type="time" placeholder="Type here"
                        class="input input-xs  w-full max-w-xs border-gray-200 bg-slate-50" />

                </div>
                <div class="mx-1">
                    <span>End: </span>
                    <input  v-model="scheduleForm.end" type="time" placeholder="Type here"
                        class="input input-xs  w-full max-w-xs border-gray-200 bg-slate-50" />

                </div>




            </div>


            <div class=" text-gray-500 my-0.5 flex">
                <div class="mx-1">
                    <span>Room: </span>


                    <select v-model="scheduleForm.room"
                        class="select  w-full bg-slate-50 text-gray-500 border-gray-200 select-xs max-w-xs my-0.5">
                        <option disabled selected>Select Room</option>
                        <option v-for="room in adminStore.rooms" :key="room.id" :value="room.id">{{ room.name }}</option>

                    </select>


                </div>
                <div class="mx-1">

                </div>




            </div>

            <div class=" text-gray-500 my-0.5 flex items-center">
                <div class="mx-1">
                    <span>Section: </span>
                    <div class=" flex mx-1 items-center">
                        <span>{{ sectionPrefix }} </span>
                        <input v-model="scheduleForm.section" type="text" placeholder=""
                            class="input input-xs  w-10 max-w-xs  border-gray-200 bg-slate-50"  />

                    </div>


                </div>





            </div>
            <div class="text-xs text-red-500" v-if="scheduleStore.errors.errors">
                <div  v-if="scheduleStore.errors.errors.day">{{`*${scheduleStore.errors.errors.day[0]}` }}</div>
                <div v-if="scheduleStore.errors.errors.start">{{ `*${scheduleStore.errors.errors.start[0]}`}}</div>
                <div v-if="scheduleStore.errors.errors.end">{{ `*${scheduleStore.errors.errors.end[0]}` }}</div>
            
            </div>

            <button @click.prevent="scheduleStore.addSchedule(scheduleForm)" class="btn btn-sm btn-success">Add</button>


        </div>
    </div>
</template>

<script>
import { useAdminStore } from '@/store/admin'
import { computed ,ref} from 'vue'
import {useScheduleStore} from '@/store/schedule'
export default {
    props: ['subject'],

    setup(props) {

        

        const adminStore = useAdminStore()
        const scheduleStore = useScheduleStore()
        const weekdays = [
            { value: 1, label: 'Monday' },
            { value: 2, label: 'Tuesday' },
            { value: 3, label: 'Wednesday' },
            { value: 4, label: 'Thursday' },
            { value: 5, label: 'Friday' },
            { value: 6, label: 'Saturday' },
        ]

        const sectionPrefix = computed(() => {
            return `${props.subject.course_name}-${props.subject.year_level}`
        })


        const scheduleForm = ref({
            day: null,
            start: null,
            end: null,
            room: null,
            prefix: sectionPrefix,
            section: null,
            subject_teacher_id:props.subject.pivot_id
        })

        const onClick = () => {
            console.log(scheduleForm.value)
        }

        return {
            weekdays,
            adminStore,
            sectionPrefix,
            scheduleForm,
            onClick,
            scheduleStore

        }
    }

}
</script>

<style></style>