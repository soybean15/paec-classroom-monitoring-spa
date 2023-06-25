<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 overflow-auto h-screen p-4">
            <div v-for="subject in subjects" :key="subject.id">

                <div class="card w-60 h-32 m-2 my-1 bg-base-100 shadow-xl image-full z-0">
                    <figure><img class="w-60 " :src="subject.image" alt="bg" /></figure>
                    <div class="card-body p-3 gap-0.5  h-28">
                        <h2 class="card-title text-sm h-10 text-white m-0 pb-0 text-left "> {{ subject.name }}</h2>
                        <div class="text-xs text-blue-200 flex ">Unit: <div class="font-bold text-white" >{{ subject.unit }}</div></div>
                        <div class="text-xs text-blue-200  flex ">Year Level: <div class="font-bold text-white">{{ subject.year_level }}</div></div>
                        <div class="text-xs text-blue-200  flex ">Semester: <div class="font-bold text-white">{{ subject.semester }}</div></div>
                        <div class="text-xs text-blue-200  flex ">Category: <div class="font-bold text-white">{{ subject.course_name }}</div></div>
                    </div>
                </div>
                <img />

            </div>
        </div>
</template>

<script>
export default {
    props:['subjects']

}
</script>

<style>

</style>