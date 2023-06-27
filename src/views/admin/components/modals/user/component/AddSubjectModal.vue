<template>
    <div class=" flex flex-col w-full h-full bg-white p-2 ">
        {{ userStore.selectedUser.user_profile.firstname }}
        <div class="flex items-center p-2">
            <div class=" font-semibold text-black">Select Subject(s)</div>
            <div class="grow"></div>
            <div>
                <input type="text" placeholder="Seach"
                    class="input input-sm input-bordered input-primary bg-stone-100 w-full max-w-xs" />
            </div>

        </div>
        <div class="flex px-3 text-black items-center">
            <div>Filter</div>
            <div class="flex overflow-x-hidden grow" v-dragscroll="true">

                <div @click="academicsStore.getSubjects(null, settings)" class="p-1 bg-slate-200 mx-1 rounded-lg cursor-pointer">All</div>

                <div v-for="course in academicsStore.courses" :key="course.id">
                    <div @click="academicsStore.getSubjects(course.id,settings)" class="p-1 bg-slate-200 mx-1 rounded-lg cursor-pointer">
                        {{ course.name }}
                    </div>
                </div>




            </div>
        </div>
        <div class="h-72 overflow-auto text-black">

            <div class="bg-stone-200 m-2 p-2 shadow-lg rounded-md cursor-pointer" @click="onSelected(subject)"
                :class="{ 'bg-stone-300': subject.selected }" v-for="subject in academicsStore.subjects" :key="subject.id">
                <div class="flex">
                    <div class="font-semibold">{{ subject.name }}</div>
                    <div class="grow"></div>
                    <div class="text-gray-600 text-xs">Created at : {{ subject.formatted_date }} </div>
                </div>
                <div class="flex">
                    <div class="flex text-gray-600 text-xs ">
                        <div> {{ `Year Level: ${subject.year_level}` }}</div>
                        <div class="mx-5"> {{ `Semester: ${subject.semester} ` }}</div>
                    </div>
                    <div class="grow"></div>
                    <div class="text-gray-800 text-xs">Units: {{ subject.unit }}</div>
                </div>

            </div>

        </div>
        <div class="h-16 overflow-auto gap-0 flex flex-wrap pt-1">
            <div v-for="subject in selectedSubjects" :key="subject.id">

                <div class="badge badge-info gap-2 badge-sm mx-0.5">
                    <div @click="onRemove(subject)" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-4 h-4 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </div>

                    {{ subject.name }}

               
                </div>
            </div>
        </div>
        <div class="w-full flex pb-2">
            <div class="grow"></div>
            <div class="mx-4">
                <button @click="onSubmit" class="btn btn-success btn-xs mx-1">Submit</button>
                <button class="btn btn-error btn-xs mx-1">Close</button>
            </div>

        </div>


    </div>
</template>

<script>
import { useAcademicStore } from '@/store/academics'
import { dragscroll } from 'vue-dragscroll'
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/store/users'
export default {
    props:['settings'],
    directives: {
        dragscroll
    },
    setup(props) {
        const academicsStore = useAcademicStore()
        const userStore = useUserStore()
        onMounted(() => {
          
            academicsStore.getCourses()
        })

        const selectedSubjects = ref([])



        const onSelected = (subject) => {

            const index = selectedSubjects.value.findIndex((item) => item === subject);
            if (index === -1) {
                
                subject.selected = true;
                selectedSubjects.value.push(subject);
            } else {
             
                subject.selected = !subject.selected;
                selectedSubjects.value.splice(index, 1);
            }
           

        }

        const onRemove=(subject)=>{
            
            const index = selectedSubjects.value.findIndex((item) => item === subject);
            subject.selected = !subject.selected;
            selectedSubjects.value.splice(index, 1);
        }


        const onSubmit =()=>{
            userStore.addSubjectsOnTeacher(selectedSubjects.value,props.settings)
            selectedSubjects.value = []

          
  academicsStore.subjects.forEach((subject) => {
    subject.selected = false;
  });

        }


        return {
            academicsStore,
            onSelected,
            selectedSubjects,
            onRemove,
            userStore,
            onSubmit
         }
    }

}
</script>

<style></style>