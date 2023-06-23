import {defineStore} from 'pinia'
import axios from 'axios'

export const useAcademicStore = defineStore('academics',{
    state:()=>({
        stateSubjects:{},
        stateCourses:{},
        stateTab:{
            onCourse:true,
            itemCount:0
        },
        stateModal:{
            subject:false,
            
        }
        
    }),
    getters:{
        subjects:(state)=>state.stateSubjects,
        courses:(state)=>state.stateCourses,
        tab:(state)=>state.stateTab,
        modal:(state)=>state.stateModal
       
    },
    actions:{
       async index(){
            const data = await axios.get('api/admin/academics');
            this.stateSubjects =data.data.subjects
            this.stateCourses = data.data.courses
            console.log(this.stateSubjects)

        },
        changeTab(tabName){
            this.stateTab.onCourse = tabName === 'Subject' ? false : true;
            console.log(this.stateTab)           
        },
        openCreateModal(modalName){
            if(modalName === "Subject"){
             
                this.stateModal.subject  = true
               
            }else{
             
                this.stateModal.subject  = false
               
            }

        },
        async addCourse(course){
            const data = await axios.post('api/admin/academics/course/add ',{
                name : course.name,
                description: course.description
            })

            this.stateCourses.push(data.data);

        }
     
    }


})