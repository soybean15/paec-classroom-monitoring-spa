<template>
    <div class="text-gray-500 font-bold">

        <slot></slot>
        <div class="flex flex-col">
            <div v-for="time in timeArray" :key="time">
                <div class="text-xxs text-gray-900 h-3.5 font-thin font-mono" v-if="hasTime"> {{ time }}</div>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['hasTime'],

    setup() {

        const startTime = new Date();
        startTime.setHours(7, 0, 0); // Set the start time to 7:00

        const endTime = new Date();
        endTime.setHours(21, 3, 0); // Set the end time to 12:00

        const timeArray = [];

        while (startTime <= endTime) {
            const timeString = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timeArray.push(timeString);

            startTime.setMinutes(startTime.getMinutes() + 30); // Increment time by 30 minutes
        }

        return { timeArray }
    }

}
</script>

<style></style>