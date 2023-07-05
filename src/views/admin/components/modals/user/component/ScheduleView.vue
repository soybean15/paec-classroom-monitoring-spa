<template>
    <div v-if="subject.schedules">

        <div class="flex items-center py-1" v-for="schedule in subject.schedules" :key="schedule.id">
            <div class="text-black text-xs font-bold mr-1 ml-2">{{ schedule.day }}</div>
            <div class="flex text-xs text-gray-500">{{ `(Time: ${schedule.start}-${schedule.end}) Duration:
                            ${duration(schedule.start, schedule.end)} Section ${schedule.section}` }}</div>
        </div>



    </div>
</template>

<script>
import { useScheduleStore } from '@/store/schedule';
import { computed, onMounted } from 'vue';
export default {
    props: ['subject'],
    setup(props) {
        const scheduleStore = useScheduleStore()


        const duration = (start, end) => {
            const [startHour, startMinute] = start.split(':').map(Number);
            const [endHour, endMinute] = end.split(':').map(Number);

            const durationHour = endHour - startHour;
            const durationMinute = endMinute - startMinute;

            return `${durationHour}.${durationMinute.toString().padStart(2, '0')}`;
        };



        return { scheduleStore, duration }


    }

}
</script>

<style></style>