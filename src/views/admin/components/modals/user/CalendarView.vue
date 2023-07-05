<template>
    <div class="w-full">


        <div class="flex p-1 mt-5 grow flex-col  w-full  h-96 border">

            <div class="flex">
                <div class="flex h-10 w-128 overflow-x-hidden gradient-bg " v-dragscroll="true">
                    <div v-for="(month, index) in months" :key="month" class="p-1 cursor-pointer text-gray-600"
                        :class="{ 'text-white border-b-2 border-slate-600': current.dayjs.value.$M === index }">

                        <div @click="set('month', index)" class="p-1 cursor-pointer font-mono">{{
                            readableMonths(month) }}
                        </div>

                    </div>
                </div>
                <div class="grow"></div>


                <div class="flex items-center">
                    <div @click.prevent="set('year', 'decrement')" class="text-2xl text-black cursor-pointer">
                        <svg fill="#2ec27e" height="15px" width="15px" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <path
                                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M313.749,347.584 c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251L176.917,271.083 c-8.341-8.341-8.341-21.824,0-30.165l106.667-106.667c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165L222.165,256 L313.749,347.584z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class="text-gray-500 font-semibold px-2">{{ current.dayjs.value.$y }}</div>

                    <div @click.prevent="set('year', 'add')" class="text-2xl text-black cursor-pointer">
                        <svg fill="#2ec27e" height="15px" width="15px" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <path
                                            d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.616,256-256S397.385,0,256,0z M346.899,280.959 l-85.594,85.594c-13.783,13.784-36.132,13.784-49.917,0c-13.784-13.784-13.784-36.133,0-49.917L272.023,256l-60.635-60.635 c-13.784-13.784-13.784-36.133,0-49.917s36.134-13.784,49.917,0l85.594,85.594C360.683,244.825,360.683,267.175,346.899,280.959z">
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>


                </div>


            </div>



            <div class="grid grid-cols-7 mt-1 gap-0 w-full font-bold text-black">
                <div v-for="day in weeks" :key="day">
                    {{ day }}</div>

            </div>





            <section class="grid grid-cols-7 mt-1 gap-0 w-full h-full text-black">
                <div v-for="{ date, isCurrent, key, isToday } in dates" :key="key" :disabled="!isCurrent" :class="{
                    'bg-indigo-400': isToday,
                    'bg-indigo-300': dateIsSelected(date).isSelected,
                    'text-red-500': dateIsSelected(date).isSunday

                }" @click.prevent="selectedDate = date" class="h-12 w-full rounded-lg cursor-pointer">
                    <span class="font-bold" v-text="date.format('D')"></span>
                </div>
            </section>
        </div>

    </div>
</template>

<script>
import { dragscroll } from 'vue-dragscroll'
import { useCalendar } from "vue3-calendar-composable";
import { computed, ref } from "vue"
export default {
    directives: {
        dragscroll
    },
    setup() {
        const { dates, months, current, set, format } = useCalendar();



        const selectedDate = ref(current.dayjs.value);


        const dateIsSelected = (date) => {


            const isSelected = date.format("DD-MM-YYYY") === selectedDate.value.format("DD-MM-YYYY");
            const isSunday = date.$W === 0;


            return {
                isSelected,
                isSunday
            };
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

        const weeks = [

            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ]

        return {
            dates,
            set,
            dateIsSelected,
            selectedDate,
            months,
            readableMonths,
            current,
            weeks,

        }
    }

}
</script>

<style>
.gradient-bg {
  background: linear-gradient(to left, transparent, rgb(31, 182, 86));
}



</style>