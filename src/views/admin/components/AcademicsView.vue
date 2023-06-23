<template>
    <div class="bg-white  z-0">
        <div class="flex items-center py-1 px-3 shadow-lg">
           
            <input type="text" placeholder="Search"
                class="input input-bordered input-info input-sm w-full bg-slate-100 mx-1 max-w-xs" />
                <button class="btn btn-active btn-primary btn-sm">Search</button>
            <div class="flex grow"></div>
            
            <div class="">
                <div class="dropdown dropdown-bottom dropdown-end">
                    <label tabindex="0" class="btn m-1 btn-success btn-sm ">Create
                        <div class=""><svg fill="#00000" height="14px" width="14px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 330 330" xml:space="preserve">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path id="XMLID_225_"
                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z">
                                    </path>
                                </g>
                            </svg></div>
                    </label>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-emerald-500 rounded-box w-52">
                        <li class="hover:bg-emerald-700"><a  onclick="my_modal_3.showModal()" @click="academicsStore.openCreateModal('Course',)">Course</a></li>
                        <li class="hover:bg-emerald-700"><a  onclick="my_modal_3.showModal()"  @click="academicsStore.openCreateModal('Subject')">Subject</a></li>
                    </ul>
                </div>


            </div>

        </div>

        <div class="flex p-3 pb-0 items-center shadow-sm">
            <div>
                <div class="tabs ">
                    <a class="tab " @click="academicsStore.changeTab('Course')" :class="{ 'tab-active': academicsStore.tab.onCourse }">Courses</a>

                    <a class="tab" @click="academicsStore.changeTab('Subject')"  :class="{ 'tab-active': !academicsStore.tab.onCourse }">Subjects</a>
                </div>

            </div>
            <div class="flex grow"></div>
            <div class="text-black  font-bold mx-3">35 Subjects</div>
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


        <div>
            <div v-if="academicsStore.tab.onCourse ">
                <CoursesGrid :courses ='academicsStore.courses'/>
            </div>
            <div  v-if="!academicsStore.tab.onCourse ">
                <SubjectGrid :subjects = 'academicsStore.subjects'/>  
            </div>
           
           
            
        </div>
        

    </div>

    <ModalView>
    <div v-if="academicsStore.modal.subject">
        <CreateSubjectModalVue :store= 'academicsStore'/>
     
    </div>
    <div  v-else>
        <CreateCourseModal :store='academicsStore'/>
    </div>
</ModalView>
</template>

<script>
import { useAcademicStore } from '@/store/academics';
import { onMounted } from 'vue';
import SubjectGrid from './containers/SubjectGrid'
import CoursesGrid from './containers/CoursesGrid.vue'
import ModalView from '@/views/components/ModalView.vue'
import CreateCourseModal from './modals/CreateCourseModal.vue'
import CreateSubjectModalVue from './modals/CreateSubjectModal.vue';

export default {
    components:{
        SubjectGrid,
        CoursesGrid,
        ModalView,
        CreateCourseModal,
        CreateSubjectModalVue
    },
    setup() {
        const academicsStore = useAcademicStore()
        onMounted(() => {
            academicsStore.index()
        })
        return { academicsStore }
    }

}
</script>

<style>
.tab-active {

    font-weight: bold;
    @apply text-zinc-600;
}
</style>