<template>
  <div class="mt-4 ">
        <div class="font-semibold  ">Create New Subject</div>
        <div class="mb-4">
            <input type="text" v-model="subject.name" placeholder="Subject Name" class="input input-bordered input-primary w-full max-w-xs" />
        </div>
        <div>
            <input type="number" min="1" max="10" v-model="subject.unit" placeholder="Number of units" class="input input-bordered input-primary w-full max-w-xs" />
          
        </div>
        <div class=" w-full my-3 mb-5 ">
            
            <button @click="(event)=>onSave(event)" class="btn btn-active btn-accent btn-sm ">Save</button>
        </div>
       
       
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props:['store'],

    setup(props){
        const subject = ref({
            name : null,
            unit:1
        })

        const onSave = (event) => {
            
            if (!subject.value.name || subject.value.name.trim() === '') {
              
                event.preventDefault();
            } else {
                props.store.addSubject(subject)
            }


         
        }
        return {subject, onSave}
    }

}
</script>

<style>

</style>