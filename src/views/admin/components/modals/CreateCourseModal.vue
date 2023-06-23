<template>
    <div class="mt-4 ">
        <div class="font-semibold  ">Create New Course</div>
        <div class="mb-4">
            <input type="text" v-model="course.name" placeholder="Course Name" class="input input-bordered input-primary w-full max-w-xs" />
        </div>
        <div>
            <textarea v-model="course.description" class="textarea textarea-primary w-full  max-w-xs" placeholder="Bio"></textarea>
          
        </div>
        <div class=" w-full my-3 mb-5 ">
            
            <button @click.prevent="store.addCourse(course)" class="btn btn-active btn-accent btn-sm ">Save</button>
        </div>
       
       
    </div>
  
</template>

<script>
import { onUnmounted, ref } from 'vue'
export default {
    props:['store'],

    setup(){

        const course = ref({
            name:null,
            description:null
        })
        onUnmounted(()=>{
            console.log('unmounter')
        })

        return {course}

    }

}
</script>

<style>

</style>