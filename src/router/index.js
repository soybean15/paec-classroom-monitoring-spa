import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegistrationView.vue'
import MainView from '../views/MainView.vue'

import AuthView from '../views/auth/AuthView.vue'
const routes = [
  {
    path: '/',
    name: 'main',
    redirect:'/',
    component: MainView,
    children:[
      {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
          {
            path: '/login',
            name: 'login',
            component: LoginView
          },
          {
            path: '/register',
            name: 'register',
            component: RegisterView
          },
          {
            path: '/forgot-password',
            name: 'forgot-password',
            component:() => import('@/views/auth/ForgotPasswordView')
          },
          {
            path: '/reset-password/:token',
            name: 'reset-password',
            component:() => import('@/views/auth/ResetPasswordView')
          },
       
        ]
      },
      {
        path: '/auth',
        name: 'auth',
        component: AuthView,
       
      },
      {
        path: '/user-profile',
        name: 'userProfile',
        component:() => import('../views/user/UserProfileView.vue')
      },
      {
        path: '/home',
        name: 'userHome',
        component:() => import('../views/user/UserHomeView.vue')
      },
      
      
    

    ]
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/dashboard',
    component: () => import('../views/admin/AdminView.vue'),
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: ()=>import('../views/admin/components/DashBoardView.vue')
      },
      {
        path: '/user',
        name: 'user',
     
        component: ()=>import('../views/admin/components/FacultyView.vue'),
        
        
      },
      {
        path: '/report',
        name: 'report',
        component: ()=>import('../views/admin/components/ReportView.vue')
      },
      {
        path: '/academics',
        name: 'academics',
        component: ()=>import('../views/admin/components/AcademicsView.vue')
      },
      {
        path: '/settings',
        name: 'settings',
        component: ()=>import('../views/admin/components/SettingsView.vue')
      },
    ]
   
  },
  
 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
