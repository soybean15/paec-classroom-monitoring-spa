import {defineStore} from 'pinia'


export const useNavStore = defineStore('nav',{
    state:()=>({
        stateShowAuth: true
        
    }),
    getters:{
        showAuth:(state)=>state.stateShowAuth
       
    },
    actions:{
        handleShowAuth(){
            this.stateShowAuth = false // State update after 1 second delay

        }
     
    }


})