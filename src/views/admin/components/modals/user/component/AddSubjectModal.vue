<template>
    <div class=" flex flex-col w-full h-full bg-white p-2">
        <div class="flex items-center p-2">
            <div class=" font-semibold text-black">Select Subject(s)</div>
            <div class="grow"></div>
            <div>
                <input type="text" placeholder="Seach"
                    class="input input-sm input-bordered input-primary bg-stone-100 w-full max-w-xs" />
            </div>

        </div>
        <div class="h-80 overflow-auto text-black">

            <div class="bg-stone-200 m-2 p-2 shadow-lg rounded-md cursor-pointer" v-for="subject in academicsStore.subjects" :key="subject.id">
                <div class="flex">
                    <div class="font-semibold">{{ subject.name }}</div>
                    <div class="grow"></div>
                    <div class="text-gray-600 text-xs">Created at : {{ subject.formatted_date }} </div>
                </div>
                <div class="flex">Units: {{subject.unit}}</div>
            </div>

        </div>
        <button class="btn btn-success">Submit</button>
    </div>
</template>

<script>
import { useAcademicStore } from '@/store/academics'
import { onMounted } from 'vue'
export default {
    setup() {
        const academicsStore = useAcademicStore()
        onMounted(() => {
            academicsStore.getSubjects()
        })

        return { academicsStore }
    }

}
</script>

<style></style>