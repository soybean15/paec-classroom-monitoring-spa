<template>
  
</template>

<script>
import { useScheduleStore } from '@/store/schedule';
import { onMounted } from 'vue';
export default {
    props:['subject'],
    setup(props){
        const scheduleStore = useScheduleStore()
        
        onMounted(()=>{
            scheduleStore.getSchedules(props.subject.pivot_id)
        })



    }

}
</script>

<style>

</style>