<template>
    <div class="mt-4 flex flex-col px-10 ">
       
        <div class="font-semibold ">Create New Subject</div>

        <div v-if="store.errors.errors"> 
            <span class="label-text text-red-400" v-if="store.errors.errors.name"> {{ store.errors.errors.name[0] }} </span>
       </div>
        <div class="mb-1 flex items-center"  >
            
            <label class=" flex mr-5 w-40 text-sm">Subject Name</label>
            <input type="text" v-model="subject.name" placeholder=""
                class="input input-bordered input-sm input-primary w-full" />
        </div>
        <div class="mb-1 flex items-center"  >
            
            <label class=" flex mr-5 w-40 text-sm">Subject Code</label>
            <input type="text" v-model="subject.code" placeholder=""
                class="input input-bordered input-sm input-primary w-full" />
        </div>

     
        <div class="flex items-center mb-1">
            <label class="w-40 flex mr-5 text-sm">Number of units</label>
            <input type="number" min="1" max="10" v-model="subject.unit" placeholder="Number of units"
                class="input input-bordered input-sm input-primary w-full" />
        </div>


        <div v-if="store.errors.errors"> 
            <span class="label-text text-red-400" v-if="store.errors.errors.year_level"> {{ store.errors.errors.year_level[0] }} </span>
        </div>
        <div class="flex items-center mb-1">
            <label class=" w-40 flex mr-5 text-sm">Year Level</label>
            <div class="flex w-full">
                <select class="select select-primary select-sm w-full">
                    <option disabled selected>Select year level</option>
                    <option v-for="year in yearLevel" :key="year.value" @click="subject.yearLevel = year.value">
                        {{ year.label }}</option>

                </select>
            </div>
            <!-- hi -->

        </div>

        <div v-if="store.errors.errors"> 
            <span class="label-text text-red-400" v-if="store.errors.errors.semester"> {{ store.errors.errors.semester[0] }} </span>
        </div>
        <div class="flex items-center mb-1">
            <label class=" w-40 flex mr-5 text-sm">Semester</label>
            <div class="flex w-full gap-4">
                <div class="flex">
                    <input type="radio" name="radio-2" class="radio radio-primary radio-sm" value="1"  v-model="subject.semester" checked />
                    <label>1st semester</label>
                </div>

                <div class="flex">
                    <input type="radio" name="radio-2" class="radio radio-primary radio-sm" value="2" v-model="subject.semester"  />
                    <label>2nd semester</label>
                </div>
            </div>

        </div>

        <div class="flex items-center mb-1 ">
            <label class=" w-40 flex mr-5 text-sm">Course</label>
            <div class="flex flex-col  w-full">

                <input type="text" @input="selectCourse" id="search" placeholder="Type here..."
                    class="input input-bordered input-sm input-primary" v-model="searchTerm" list="searchCourses">


                <datalist class="text-sm text-black" id="searchCourses">

                    <option v-for="course in searchCourses" :key="course.id" :value="course.id">
                        {{ course.name }}
                    </option>
                </datalist>
                <!-- <div class="relative">

                <input type="text" id="search" placeholder="Type here..."
                    class="input input-bordered input-sm input-primary" v-model="searchTerm" list="searchCourses">


                <select class="text-sm text-black" >

                    <option v-for="course in searchCourses" :key="course.id">
                        {{ course.name }}
                    </option>
                </select>

                </div> -->






            </div>
        </div>



        <div class=" w-full my-3 mb-5 ">

            <button @click="(event) => onSave(event)" class="btn btn-active btn-accent btn-sm ">Save</button>
        </div>


    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';


export default {
    props: ['store'],

    setup(props) {
      
        const subject = ref({
            name: null,
            unit: 1,
            code:null,
            yearLevel: null,
            semester: 1,
            course: null

        })

        let _course = null



        const onSave = (event) => {

            if (!subject.value.name || subject.value.name.trim() === '' || subject.yearLevel) {

                event.preventDefault();
            } 
                props.store.addSubject(subject)
            



        }

        const yearLevel = [
            { label: "First Year", value: 1 },
            { label: "Second Year", value: 1 },
            { label: "Third Year", value: 1 },
            { label: "Fourth Year", value: 1 },
        ]


        let searchTerm = ref('')

        const searchCourses = computed(() => {
            if (searchTerm.value === '') {
                return props.store.courses
                //.map(course => "course.name");
            }

            let matches = 0

            return props.store.courses.filter(course => {
                if (
                    course.name.toLowerCase().includes(searchTerm.value.toLowerCase())
                    && matches < 10
                ) {
                    matches++
                    return course
                }
            })
        });


        const selectCourse = (e) => {
            console.log(e.data)
            let id = e.data

            subject.value.course = id
            _course = props.store.courses.find(course => course.id == id);
            console.log(_course)
            if (_course) {
                searchTerm.value = _course.name
            }


        }

        return {
            subject,
            onSave,
            yearLevel,
            searchTerm,
            searchCourses,
            selectCourse
        }
    }

}
</script>

<style></style>