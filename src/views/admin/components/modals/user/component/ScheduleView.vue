<template>
    <div v-if="subject.schedules">

        <div class="flex items-center py-1" v-for="schedule in subject.schedules" :key="schedule.id">
            <div class="text-black text-xs font-bold mr-1 ml-2">{{ schedule.day }}</div>
            <div class="flex text-xs text-gray-500">{{ `(Time: ${schedule.start}-${schedule.end}) Duration: ${duration} Section ${schedule.section}` }}</div>
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


        const duration = computed(() => {
            const startTime = new Date(`2000-01-01T18:00`);
            const endTime = new Date(`2000-01-01T19:30`);

            const durationInMinutes = (endTime - startTime) / (1000 * 60);
            return `${Math.floor(durationInMinutes / 60)}.${durationInMinutes % 60 < 10 ? '0' : ''}${durationInMinutes % 60}`;
        });


        return { scheduleStore, duration }


    }

}
</script>

<style></style>