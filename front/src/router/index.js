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
    name: 'Programme',
    component: () => import( '../views/programme/Programme')
  },
  {
    path: '/personalDetails/:id',
    name: 'PersonalDetails',
    component: () => import( '../views/personalDetails/PersonalDetails')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
