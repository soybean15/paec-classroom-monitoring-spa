import { defineStore } from 'pinia'
import axios from 'axios'

export const useAcademicStore = defineStore('academics', {
    state: () => ({
        stateSubjects: {
            subjects: {},
            count: 0
        },
        stateCourses: {
            courses: {},
            count: 0
        },
        stateTab: {
            onCourse: true,
            label: 0
        },
        stateModal: {
            subject: false,

        },
        stateErrors: [],



    }),
    getters: {
        subjects: (state) => state.stateSubjects.subjects,
        courses: (state) => state.stateCourses.courses,
        tab: (state) => state.stateTab,
        modal: (state) => state.stateModal,
        errors: (state) => state.stateErrors,


    },
    actions: {
        async index() {
            const data = await axios.get('api/admin/academics');
            this.stateSubjects.subjects = data.data.subjects
            this.stateSubjects.count = data.data.subject_count
            this.stateCourses.courses = data.data.courses
            this.stateCourses.count = data.data.course_count

            console.log(this.stateSubjects)
            this.changeTab('Course')

        },
        changeTab(tabName) {

            if (tabName === 'Subject') {
                this.stateTab.onCourse = false
                this.stateTab.label = `${this.stateSubjects.count} ${tabName}(s)`
            } else {
                this.stateTab.onCourse = true
                this.stateTab.label = `${this.stateCourses.count} ${tabName}(s)`
            }

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

                this.stateCourses.courses.push(data.data.course);
                console.log(this.stateCourses)
            } catch (error) {

                if (error.response.status === 422) {
                    this.stateErrors = error.response.data


                }
            }


        },
        async addSubject(subject) {
            this.stateErrors = [];
            console.log(subject);
          
            try {
              const data = await axios.post('api/admin/academics/subject/add', {
                name: subject.value.name,
                unit: subject.value.unit,
                year_level: subject.value.yearLevel,
                semester: subject.value.semester,
                course_id: subject.value.course
              });
          
              this.stateSubjects.subjects.push(data.data.subject);
              console.log(this.stateSubjects);
            } catch (error) {
              console.log(error);
              if (error.response) {
                if (error.response.status === 422) {
                  this.stateErrors = error.response.data;
            
                }
              }
            }
          }
          ,
        async getSubjects(id){
            let path = `api/admin/academics/subject/${-1}`
            if(id){
                 path = `api/admin/academics/subject/${id}`
            }

            const data = await axios.get(path)
            this.stateSubjects.subjects = data.data.subjects
            
        },

        async getCourses(){
            const data = await axios.get('api/admin/academics/course')
            this.stateCourses.courses = data.data.courses
            console.log(this.stateCourses)
            
        }

    }


})