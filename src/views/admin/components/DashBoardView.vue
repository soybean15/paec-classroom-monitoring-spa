<template>
  <div class="flex h-screen bg-white w-full">
    <div class="w-full ">
      <div class="text-black flex p-3 font-semibold text-lg">Dashboard</div>
      <div class="flex gap-3 mx-5">

        <div class="relative shadow-lg bg-violet-500 h-32 rounded-lg">
          <figure class="z-0 w-52 h-32"><img class="rounded-md object-center w-52 h-32" src="@/assets/img/teacher.jpg" alt="Shoes" /></figure>
          <div class="bg-gradient-to-r from-gray-500 to-transparent h-full w-full rounded-s-lg absolute top-0 z-10"></div>

          <div  class="absolute z-20 top-0 p-3">
            <div class="stat-figure text-secondary">
              
            </div>
            <div class="stat-title text-white">Teachers</div>
            <div class="stat-value text-white">31</div>
            <div class="stat-desc text-white">Jan 1st - Feb 1st</div>
          </div>

        </div>

        <div class="relative shadow-lg bg-violet-500 h-32 rounded-lg">
          <figure class="z-0 w-52 h-32"><img class="rounded-md object-center w-52 h-32" src="@/assets/img/student.jpg" alt="Shoes" /></figure>
          <div class="bg-gradient-to-r from-gray-500 to-transparent h-full w-full rounded-s-lg absolute top-0 z-10"></div>

          <div  class="absolute z-20 top-0 p-3">
            <div class="stat-figure text-secondary">
              
            </div>
            <div class="stat-title text-white">Students</div>
            <div class="stat-value text-white">12</div>
            <div class="stat-desc text-white">Jan 1st - Feb 1st</div>
          </div>

        </div>
       
        <div class="relative shadow-lg bg-violet-500 h-32 rounded-lg">
          <figure class="z-0 w-52 h-32"><img class="rounded-md object-center w-52 h-32" src="@/assets/img/graduate.jpg" alt="Shoes" /></figure>
          <div class="bg-gradient-to-r from-gray-500 to-transparent h-full w-full rounded-s-lg absolute top-0 z-10"></div>

          <div  class="absolute z-20 top-0 p-3">
            <div class="stat-figure text-secondary">
              
            </div>
            <div class="stat-title text-white">Courses</div>
            <div class="stat-value text-white">12</div>
            <div class="stat-desc text-white">Jan 1st - Feb 1st</div>
          </div>

        </div>

        <div class="relative shadow-lg bg-violet-500 h-32 rounded-lg">
          <figure class="z-0 w-52 h-32"><img class="rounded-md object-center w-52 h-32" src="@/assets/img/books.jpg" alt="Shoes" /></figure>
          <div class="bg-gradient-to-r from-gray-500 to-transparent h-full w-full rounded-s-lg absolute top-0 z-10"></div>

          <div  class="absolute z-20 top-0 p-3">
            <div class="stat-figure text-secondary">
              
            </div>
            <div class="stat-title text-white">Subjects</div>
            <div class="stat-value text-white">12</div>
            <div class="stat-desc text-white">Jan 1st - Feb 1st</div>
          </div>

        </div>


      </div>

    </div>
    <div class="w-128 border-s-2">
      <div class="flex text-black p-3">Summary</div>
    </div>

  </div>
</template>

<script>

export default {
  setup() {

  }

}
</script>

<style></style>