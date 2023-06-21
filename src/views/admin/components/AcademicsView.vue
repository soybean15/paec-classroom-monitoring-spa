<template>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  overflow-auto h-screen ">
        <div v-for="subject in academicsStore.subjects" :key="subject.id">

            <div class="card w-60 h-52 m-5 bg-base-100 shadow-xl image-full">
                <figure><img class="w-60 " :src="subject.image" alt="bg" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-sm h-20"> {{ subject.name }}</h2>
                    <p class="text-xs">If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>
            <img />

        </div>
    </div>
</template>

<script>
import { useAcademicStore } from '@/store/academics';
import { onMounted } from 'vue';
export default {
    setup() {
        const academicsStore = useAcademicStore()
        onMounted(() => {
            academicsStore.index()
        })
        return { academicsStore }
    }

}
</script>

<style></style>