<template>
    <div class="w-full h-full overflow-auto  p-3">
        <div class="grid grid-flow-col justify-stretch ">
            <div class="" v-for="day in weekdays" :key="day">
                <DayComponent :schedules="day.schedules" :hasTime="day.day === 'Time'">{{ day.day }}</DayComponent>

            </div>
        </div>
    </div>
</template>

<script>
import DayComponent from './component/DayComponent'
import { useScheduleStore } from '@/store/schedule'

function extractSchedules(subjects) {
    let schedules = {
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],

    }



    subjects.forEach(subject => {

        let item = JSON.parse(JSON.stringify(subject.schedules))


        item.forEach(schedule => {
            schedule.subject = subject
            schedules[schedule.day].push(schedule)
            console.log(schedule.day)
        })



    });


    return schedules

}

export default {
    components: {
        DayComponent
    },

    setup() {
        const scheduleStore = useScheduleStore()
        scheduleStore.getSchedules()
        console.log(scheduleStore.subjects)

        const schedules = extractSchedules(scheduleStore.subjects)

        const weekdays = [
            { day: 'Time', schedules: null },
            { day: 'Sun', schedules: schedules['Sunday'] },
            { day: 'Mon', schedules: schedules['Monday'] },
            { day: 'Tue', schedules: schedules['Tuesday'] },
            { day: 'Wed', schedules: schedules['Wednesday'] },
            { day: 'Thu', schedules: schedules['Thursday'] },
            { day: 'Fri', schedules: schedules['Friday'] },
            { day: 'Sat', schedules: schedules['Saturday'] }
        ];

        console.log(weekdays);




        return {
            weekdays,
        }

    }
}
</script>

<style></style>