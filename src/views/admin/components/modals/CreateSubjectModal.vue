<template>
    <div class="mt-4 flex flex-col px-10 ">
        <div class="font-semibold   ">Create New Subject</div>
        <div class="mb-1 flex items-center  ">
            <label class=" flex mr-5 w-40 text-sm">Subject Name</label>
            <input type="text" v-model="subject.name" placeholder=""
                class="input input-bordered input-sm input-primary w-full" />
        </div>

        <div class="flex items-center mb-1">
            <label class="w-40 flex mr-5 text-sm">Number of units</label>
            <input type="number" min="1" max="10" v-model="subject.unit" placeholder="Number of units"
                class="input input-bordered input-sm input-primary w-full" />
        </div>
        <div class="flex items-center mb-1">
            <label class=" w-40 flex mr-5 text-sm">Year Level</label>
            <div class="flex w-full">
                <select class="select select-primary select-sm w-full">
                <option disabled selected>Select year level</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
            </select>
            </div>

        </div>
        <div class="flex items-center mb-1">
            <label class=" w-40 flex mr-5 text-sm">Semester</label>
            <div class="flex w-full gap-4">
                <div class="flex">
                    <input type="radio" name="radio-2" class="radio radio-primary radio-sm" checked />
                    <label>1st semester</label>
                </div>

                <div class="flex">
                    <input type="radio" name="radio-2" class="radio radio-primary radio-sm" checked />
                    <label>2nd semester</label>
                </div>
            </div>

        </div>

        <div class="flex items-center mb-1">
            <label class=" w-40 flex mr-5 text-sm">Course</label>
            <input type="number" min="1" max="10" v-model="subject.unit" placeholder="Number of units"
                class="input input-bordered input-sm input-primary w-full" />
        </div>



        <div class=" w-full my-3 mb-5 ">

            <button @click="(event) => onSave(event)" class="btn btn-active btn-accent btn-sm ">Save</button>
        </div>


    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['store'],

    setup(props) {
        const subject = ref({
            name: null,
            unit: 1
        })

        const onSave = (event) => {

            if (!subject.value.name || subject.value.name.trim() === '') {

                event.preventDefault();
            } else {
                props.store.addSubject(subject)
            }



        }

        const yearLevel = [
            { label: "First Year", value: 1 },
            { label: "Second Year", value: 1 },
            { label: "Third Year", value: 1 },
            { label: "Fourth Year", value: 1 },
        ]
        return { subject, onSave, }
    }

}
</script>

<style></style>