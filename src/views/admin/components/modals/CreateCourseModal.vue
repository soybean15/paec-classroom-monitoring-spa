<template>
    <div class="mt-4 ">
        <div class="font-semibold  ">Create New Course</div>

        <div v-if="store.errors.errors"> 
            <span class="label-text text-red-400" v-if="store.errors.errors.name"> {{ store.errors.errors.name[0] }} </span>
        </div>
        <div class="mb-4">
            <input type="text" v-model="course.name" placeholder="Course Name"
                class="input input-bordered input-primary w-full max-w-xs" />
        </div>
        <div>
            <textarea v-model="course.description" class="textarea textarea-primary w-full  max-w-xs"
                placeholder="Description"></textarea>

        </div>
        <div class=" w-full my-3 mb-5 ">

            <button @click="(event) => onSave(event)" class="btn btn-active btn-accent btn-sm ">Save</button>
        </div>


    </div>
</template>

<script>
import { onUnmounted, ref } from 'vue'


export default {
    props: ['store'],

    setup(props) {

        const course = ref({
            name: null,
            description: null
        })
        onUnmounted(() => {
            console.log('unmounter')
        })


        const onSave = (event) => {
            console.log(course.value.name )
            
            if (!course.value.name || course.value.name.trim() === '') {
              
                event.preventDefault();
            } 
                props.store.addCourse(course)
            

         
        }

        return { course, onSave }

    }

}
</script>

<style></style>