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
        <div class="flex px-3 text-black items-center">
            <div>Filter</div>
            <div class="flex flex-row-reverse grow">
                <select class="select select-primary select-sm w-28 mx-0.5 bg-stone-100 font-thin">
                    <option disabled selected>Semester</option>
                    <option>None</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
                <select class="select select-primary select-sm w-28 mx-0.5 bg-stone-100 font-thin">
                    <option disabled selected>Year Level</option>
                    <option>None</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
                <select class="select select-primary select-sm w-28 mx-0.5 bg-stone-100 font-thin">
                    <option disabled selected>Course</option>
                    <option>None</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>

            </div>
        </div>
        <div class="h-80 overflow-auto text-black">

            <div class="bg-stone-200 m-2 p-2 shadow-lg rounded-md cursor-pointer" @click="onSelected(subject)"
                :class="{ 'bg-stone-300': subject.selected }" v-for="subject in academicsStore.subjects" :key="subject.id">
                <div class="flex">
                    <div class="font-semibold">{{ subject.name }}</div>
                    <div class="grow"></div>
                    <div class="text-gray-600 text-xs">Created at : {{ subject.formatted_date }} </div>
                </div>
                <div class="flex">
                    <div class="flex text-gray-600 text-xs ">
                        <div  > {{ `Year Level: ${subject.year_level}` }}</div>
                        <div class="mx-5"> {{ `Semester: ${subject.semester} `}}</div>
                    </div>
                    <div class="grow"></div>
                    <div class="text-gray-800 text-xs">Units: {{ subject.unit }}</div>
                </div>
               
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

        

        const onSelected = (subject) => {
            
            if(!subject.selected){
                subject.selected =true
            }else{
                subject.selected =false
            }
            console.log(subject)
        

        }


        return { academicsStore, onSelected }
    }

}
</script>

<style></style>