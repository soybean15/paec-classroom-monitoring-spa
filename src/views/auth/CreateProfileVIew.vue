<template>
    <div class=" flex container  rounded-md shadow-xl border-solid border-2 ">
        <div class="flex-grow ">
            <!-- Photo here -->

        </div>
        <div class="p-6 bg-slate-50">
            <div class="    pb-4 ">

                <div>
                    <div class="title text-lg font-bold ">
                        Profile
                        <hr>
                        <div class="flex justify-center  items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-20">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>
                </div>


                <!-- Details section -->

                <form>
                    <div class="flex flex-col">


                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">First Name</span>
                            <input type="text" placeholder="" required
                                class=" rounded-sm w-full border-2  ">
                        </div>

                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">MIddle Name </span>
                            <input type="text" placeholder="" required
                                class=" rounded-sm w-full border-2  ">
                        </div>

                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold ">Last Name</span>
                            <input type="text" placeholder="" required
                                class=" rounded-sm w-full border-2  ">
                        </div>


                        <!-- Gender section -->
                        <div class=" flex w-full p-2">

                            <span class="flex font-semibold w-40 ">Gender</span>
                            <div class=" flex  w-full gap-6">
                                <div>
                                    <input type="radio">
                                    <span class="gender ">Male</span>
                                </div>

                                <div>
                                    <input type="radio">
                                    <span class="gender">Female</span>

                                </div>
                            </div>
                        </div>




                        <!-- Details section -->
                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">Birthday</span>
                            <input type="date" placeholder="" required
                                class=" rounded-sm w-full border-2  ">
                        </div>


                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">Contact</span>
                            <input type="text" placeholder="" required
                                class=" rounded-sm w-full border-2  ">
                        </div>

                        <div class="flex w-full p-2">
                            <span class="w-40 flex font-semibold">Address</span>
                            <textarea type="text" placeholder="" required
                                class=" rounded-sm w-full border-2  "></textarea>
                        </div>

                        <!-- Button -->
                        <div class="  flex w-full mt-5">
                            <div
                                class="bg-gradient-to-bl from-blue-600 via-sky-300 to-cyan-400 h-10  rounded-full w-full mx-5 flex items-center justify-center text-white text-lg">
                                <input type="submit" value="Register" >
                            </div>
                        </div>





                    </div>


                </form>
            </div>

        </div>





    </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    width: 90%;
margin: auto;   
 border: 1px solid black;
}
</style>