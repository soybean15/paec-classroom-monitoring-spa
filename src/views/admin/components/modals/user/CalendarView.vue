<template>
   
    <div class="flex  w-full"> <div class="text-black">{{ current }}</div>
        
        <div class="flex  grow flex-col  w-128 border">
            <div class="flex overflow-x-auto h-10  ">
                <div class="p-1" v-for="(month, index) in months" :key="month" :class="{ 'p-1 cursor-pointer text-green-600': true, 'bg-yellow-200': index + 1 === current.month }">

                    <div @click="set('month',index+1)" class="p-1 cursor-pointer text-green-600">{{ readableMonths(month) }}</div>

                </div>
            </div>

            <div class="flex">
                <button @click.prevent="set('month', 'decrement')">Previous</button>
                <div class="grow"></div>
                <button @click.prevent="set('month', 'add')">Next</button>
            </div>

            
            <section class="grid grid-cols-7 gap-0 w-full h-full text-black">
                <div v-for="{ date, isCurrent, key, isToday } in dates" :key="key" :disabled="!isCurrent" :class="{
                    '!bg-indigo-400': isToday,
                    '!bg-blue-800': dateIsSelected(date),

                }" @click.prevent="selectedDate = date" class="h-16 w-full ">
                    <span class="font-bold" v-text="date.format('D')"></span>
                </div>
            </section>
        </div>
        <div class="w-40">Hello</div>
    </div>
</template>

<script>
import { useCalendar } from "vue3-calendar-composable";
import { computed, ref } from "vue"
export default {
    setup() {
        const { dates, months, current, set, format } = useCalendar();



        const selectedDate = ref(current.dayjs.value);

        console.log(selectedDate.value)

        const dateIsSelected = (date) => {

            return date.format("DD-MM-YYYY") === selectedDate.value.format("DD-MM-YYYY");
        };

        const readableMonths = computed(() => {
            return (timestamp) => {
                const date = new Date(timestamp);
                const monthNames = [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ];
                const monthIndex = date.getMonth();
                return monthNames[monthIndex];
            };
        })


        return {
            dates,
            set,
            dateIsSelected,
            selectedDate,
            months,
            readableMonths,current
        }
    }

}
</script>

<style></style>