<template>
<div class="body">
  
  <router-view/>
  
</div>

</template>

<script>
import { useAuthStore } from './store/auth';
import HomeViewVue from './views/HomeView.vue';
export default{
  components:{
    HomeViewVue
  },
  setup(){

    const authStore = useAuthStore()
    authStore.getUser()

  }
}

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0472e0;
 
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: hsl(153, 47%, 49%);
}
.bg-primary{
  @apply bg-green-600;
}
._bg-secondary{
  @apply bg-green-700;
}

</style>
