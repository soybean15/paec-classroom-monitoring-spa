<template>
    <div class="w-full h-full overflow-auto p-3">
        <div class="w-full justify-between flex ">
            <div class="" v-for="day in weekdays" :key="day">
                <DayComponent  :hasTime="day==='Time'">{{ day }}</DayComponent>
                
            </div>
        </div>
    </div>
</template>

<script>
import DayComponent from './component/DayComponent'
import { useScheduleStore } from '@/store/schedule'

export default {
    components:{
        DayComponent
    },

    setup() {
        const scheduleStore = useScheduleStore()
        scheduleStore.getSchedules()
        console.log(scheduleStore.subjects)

        const weekdays = [
            'Time',
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]



     
        return { 
            weekdays,
             }

    }
}
</script>

<style></style>