<template>
<div class="body">
  
  <router-view/>

  uncomment this
  <AdminView/>
  
</div>

</template>

<script>
import AdminView from './views/admin/AdminView.vue';
import { useAuthStore } from './store/auth';
import HomeViewVue from './views/HomeView.vue';
export default{
  components:{
    HomeViewVue,
    AdminView
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
  @apply bg-white;
}
.bg-secondary{
  @apply bg-white;
}
.bg-secondary-variant{
  @apply bg-blue-900
}
.text-color{
  @apply text-black
}
.input-text{
  @apply text-black
}
.focus-ring{
  @apply focus:ring-blue-500
}
.focus-border{
  @apply focus:border-blue-500
}
.input-border{
  @apply border-gray-300
}



</style>
