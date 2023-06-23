import { defineStore } from 'pinia'
import axios from 'axios'

export const useAcademicStore = defineStore('academics', {
    state: () => ({
        stateSubjects: {},
        stateCourses: {},
        stateTab: {
            onCourse: true,
            itemCount: 0
        },
        stateModal: {
            subject: false,

        },
        stateErrors: []

    }),
    getters: {
        subjects: (state) => state.stateSubjects,
        courses: (state) => state.stateCourses,
        tab: (state) => state.stateTab,
        modal: (state) => state.stateModal,
        errors: (state) => state.stateErrors

    },
    actions: {
        async index() {
            const data = await axios.get('api/admin/academics');
            this.stateSubjects = data.data.subjects
            this.stateCourses = data.data.courses
            console.log(this.stateSubjects)

        },
        changeTab(tabName) {
            this.stateTab.onCourse = tabName === 'Subject' ? false : true;
            console.log(this.stateTab)
        },
        openCreateModal(modalName) {
            if (modalName === "Subject") {

                this.stateModal.subject = true

            } else {

                this.stateModal.subject = false

            }

        },
        async addCourse(course) {

            this.stateErrors = []

            try {
                const data = await axios.post('api/admin/academics/course/add ', {
                    name: course.value.name,
                    description: course.value.description
                })

                this.stateCourses.push(data.data.course);
                console.log(this.stateCourses)
            } catch (error) {

                if (error.response.status === 422) {
                    this.stateErrors = error.response.data


                }
            }


        },
        async addSubject(subject) {

            this.stateErrors = []

            try {
                const data = await axios.post('api/admin/academics/subject/add ', {
                    name: subject.value.name,
                    unit: subject.value.unit
                })

                this.stateSubjects.push(data.data.subject);
                console.log(this.stateSubjects)
            } catch (error) {

                if (error.response.status === 422) {
                    this.stateErrors = error.response.data


                }
            }


        }

    }


})