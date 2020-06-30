import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/expert',
    name: 'Expert',
    component: () => import('../views/expert/Expert')
  },{
    path: '/match',
    name: 'Match',
    component: () => import('../views/match/Match')
  },{
    path: '/digitalColor',
    name: 'DigitalColor',
    component: () => import('../views/digitalColor/DigitalColor')
  },{
    path: '/my',
    name: ' My',
    component: () => import( '../views/my/My')
  },{
    path: '/programme',
    name: ' programme',
    component: () => import( '../views/programme/Programme')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
