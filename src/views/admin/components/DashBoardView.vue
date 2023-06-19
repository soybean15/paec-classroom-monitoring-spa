<template>
 <div>



 </div>
</template>

<script>
import { useAdminStore } from '@/store/admin';
export default {
  setup(){
    const adminStore = useAdminStore()
    return {adminStore}

  }

}
</script>

<style>

</style>