import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Calc from '../views/Calc.vue'
import StepOne from '../views/StepOne.vue'
import StepTwo from '../views/StepTwo.vue'
import StepThree from '../views/StepThree.vue'
import StepFour from '../views/StepFour.vue'



const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/calc',
    name: 'Calc',
    component: Calc
  },
  {
    path: '/stepone',
    name: 'StepOne',
    component: StepOne
  },
  {
    path: '/steptwo',
    name: 'StepTwo',
    component: StepTwo
  },
  {
    path: '/stepthree',
    name: 'StepThree',
    component: StepThree
  },
  {
    path: '/stepfour',
    name: 'StepFour',
    component: StepFour
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
