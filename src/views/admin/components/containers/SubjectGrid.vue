<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 overflow-auto h-screen p-4">
            <div v-for="subject in subjects" :key="subject.id">

                <div class="card w-60 h-32 m-2 my-1 bg-base-100 shadow-xl image-full z-0">
                    <figure><img class="w-60 " :src="subject.image" alt="bg" /></figure>
                    <div class="card-body p-3  h-28">
                        <h2 class="card-title text-sm h-20 text-white"> {{ subject.name }}</h2>
                        <p class="text-xs">If a dog chews shoes whose shoes does he choose?</p>

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