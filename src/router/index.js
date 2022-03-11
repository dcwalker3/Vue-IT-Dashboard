import { createRouter, createWebHistory } from 'vue-router'

// View imports
import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import SignupView from "@/views/SignupView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
