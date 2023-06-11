<template>
    <div class=" flex container ">
        <div class="flex-grow">
            <!-- Photo here -->

        </div>
        <div>
            <div class="  bg-slate-50 p-6 rounded-md shadow-xl border-solid border-2  ">

                <div>
                    <div class="title text-4xl ">
                        Profile
                        <hr>
                        <div class="flex justify-center pt-10 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-28 md:w-40">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>
                </div>


                <!-- Details section -->

                <form>
                    <div class="flex flex-col">


                        <div class="flex input-box ">
                            <span class="w-40 flex font-semibold">Full Name</span>
                            <input type="text" placeholder="Enter your name" required
                                class=" rounded-sm w-full border-2  ">
                        </div>

                        <div class="input-box w-2/3 my-2 ">
                            <span class=" font-semibold">Middle Name</span>
                            <input type="text" placeholder="Enter your name" required
                                class=" rounded-sm  border-2 py-1 pr-32">
                        </div>

                        <div class="input-box  w-2/3 my-2">
                            <span class=" font-semibold">Last Name</span>
                            <input type="text" placeholder="Enter your name" required
                                class=" rounded-sm border-2 py-1 pr-32">
                        </div>

                        <!-- Gender section -->
                        <div class="input-box  w-2/3">
                            <span class=" font-semibold">Gender</span>
                            <div class=" flex flex-col ">
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
                        <div class="input-box  w-2/3 my-2">
                            <span class=" font-semibold">Birthday</span>
                            <input type="date" placeholder="Enter your Birthdate" required
                                class=" rounded-sm border-2 py-1 pr-14">
                        </div>

                        <div class="input-box  w-2/3 my-2">
                            <span class=" font-semibold">Contact</span>
                            <input type="text" placeholder="Enter your number" required
                                class=" rounded-sm border-2 py-1 pr-32">
                        </div>

                        <div class="input-box  w-2/3 my-2">
                            <span class=" font-semibold">Address</span>
                            <textarea type="textarea" placeholder="Enter your address" required
                                class=" rounded-sm border-2 py-1 pr-32"></textarea>
                        </div>

                        <!-- Button -->
                        <div class=" mt-10 ml-24 items-center">
                            <div
                                class="button bg-gradient-to-bl from-blue-600 via-sky-300 to-cyan-400 h-10 px-10 rounded-full flex items-center ">
                                <input type="submit" value="Register">
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