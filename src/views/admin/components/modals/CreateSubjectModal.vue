<template>
  <div class="mt-4 ">
        <div class="font-semibold  ">Create New Subject</div>
        <div class="mb-4">
            <input type="text" placeholder="Subject Name" class="input input-bordered input-primary w-full max-w-xs" />
        </div>
        <div>
            <input type="number" placeholder="Number of units" class="input input-bordered input-primary w-full max-w-xs" />
          
        </div>
        <div class=" w-full my-3 mb-5 ">
            
            <button class="btn btn-active btn-accent btn-sm ">Save</button>
        </div>
       
       
    </div>
</template>

<script>
export default {
    props:['store'],

}
</script>

<style>

</style>