import { createRouter,createWebHashHistory,createWebHistory } from 'vue-router'

const HelloWorld = () => import('../components/HelloWorld.vue');
const NotFound = () => import('../views/404.vue');
const Login = () => import('../views/Login.vue');

const routes = [
  {path: "/", component: HelloWorld},
  {path: "/404", component: NotFound},
  {path: "/login", component: Login},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;