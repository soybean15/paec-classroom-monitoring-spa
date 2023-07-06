<template>
    <div class="text-gray-500 font-bold day-border w-full">

        <slot></slot>
        <div class="flex flex-col">
            <div v-for="time in timeArray" :key="time">

                <div class="text-xxs text-gray-900  h-3.5 font-thin font-mono">
                    <div v-if="hasTime">{{ time.time }}</div>
                    <div v-else>

                        <div v-if="time.inRange">
                            <div class=" bg-red-700 h-3.5 w-full"> </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['hasTime', 'schedules'],

    setup(props) {

        const startTime = new Date();
        startTime.setHours(7, 0, 0); // Set the start time to 7:00

        const endTime = new Date();
        endTime.setHours(21, 3, 0); // Set the end time to 12:00

        const timeArray = [];

        while (startTime <= endTime) {
            const timeString = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timeArray.push({ time: timeString, inRange: null });

            startTime.setMinutes(startTime.getMinutes() + 30); // Increment time by 30 minutes
        }


        if (props.schedules) {
            props.schedules.forEach(it => {
                console.log(it.start);

                const start = it.start.substr(0, 2).padStart(2, '0');
                const minutes = it.start.substr(3);
                const end = it.end.substr(0, 2).padStart(2, '0');
                const end_minutes = it.end.substr(3);

                const startDate = new Date();
                startDate.setHours(parseInt(start), parseInt(minutes));
                const endDate = new Date();
                endDate.setHours(parseInt(end), parseInt(end_minutes));


                const options = { hour: '2-digit', minute: '2-digit', hour12: true };
                const startString = startDate.toLocaleTimeString([], options);
                const endString = endDate.toLocaleTimeString([], options);

                console.log('formatted:', startString); // Output: '07:00 PM'
                console.log('formatted:', endString)


                const startIndex = timeArray.findIndex(startDate => startDate.time === startString);
                const endIndex = timeArray.findIndex(endDate => endDate.time === endString);

                console.log('Start index:', startIndex);
                console.log('end index:', endIndex);

                for (let i = startIndex; i <= endIndex; i++) {
                    timeArray[i].inRange = true
                }
            });
        }


        console.log(timeArray)

        return { timeArray }
    }

}
</script>

<style>
.day-border{
    
    border-right-width: 0.1px;
    border-top-width: 0.1px;
border-bottom-width: 0.1px;
    border-color: rgb(97, 96, 96);
}
</style>