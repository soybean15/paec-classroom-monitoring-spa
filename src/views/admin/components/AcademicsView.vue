<template>
    <div class="bg-white p-3 z-0">
        <div class="flex flex-row-reverse p-3">
            <button class="btn btn-active btn-primary btn-sm">Search</button>
            <input type="text" placeholder="Search" class="input input-bordered input-info input-sm w-full bg-slate-100 mx-3 max-w-xs" />

        </div>
        <div class="flex  items-center">
            <div>
                <div class="tabs ">
                    <a class="tab text-lg tab-active text-gray-700">Courses</a>

                    <a class="tab text-lg text-gray-700">Subjects</a>
                </div>

            </div>
            <div class="flex grow"></div>
            <div class="text-black  font-bold mx-3" >35 Subjects</div>
            <div class="mx-3">
                <select class="select select-primary bg-slate-50 text-black w-full max-w-xs ">
                    <option disabled selected>Filter</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
            </div>

        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 overflow-auto h-screen p-4">
            <div v-for="subject in academicsStore.subjects" :key="subject.id">

                <div class="card w-60 h-32 m-2 bg-base-100 shadow-xl image-full z-0">
                    <figure><img class="w-60 " :src="subject.image" alt="bg" /></figure>
                    <div class="card-body p-3  h-28">
                        <h2 class="card-title text-sm h-20"> {{ subject.name }}</h2>
                        <p class="text-xs">If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <img />

            </div>
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