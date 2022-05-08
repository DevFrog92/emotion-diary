import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// routes에서 lazy loading시 function arrow에서 {}로 컴포넌트를 감싸면 안된다.
// wrapping되어서 반환되기 때문이다.

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
