<template>
    <div class="flex justify-center w-full p-20">

        <div class="flex flex-col">
            <div class="text-[25px] font-bold">Time in</div>
            
        <div class="rounded-full relative  w-64 h-64 bg-white p-2">
            
            <div class="absolute  w-60  h-60 bg-yellow-400 hover:bg-yellow-300 cursor-pointer rounded-full p-4 flex flex-col items-center  justify-center">
                <div class="text-[50px] py-1 font-bold">4:58</div>
                <div class="text-md font-bold py-1">Mathermatics</div>
                <div class="text-[15px] font-bold py-1">(3:00pm-5:00pm)</div>
            </div>    
        </div>
        </div>


    </div>
  
</template>

<script>
import { useAuthStore } from "@/store/auth";
import { onMounted } from "vue";
export default {
    setup(){
        const authStore = useAuthStore()
        onMounted(() => {
            authStore.getUser()
        })
        //
    }

}
</script>

<style>

</style>