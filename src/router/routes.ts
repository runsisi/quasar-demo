import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'customers', component: () => import('pages/CustomersPage.vue') },
      { path: 'library', component: () => import('pages/IndexPage.vue') },
      { path: 'settings', component: () => import('pages/IndexPage.vue') },
      { path: 'calendar', component: () => import('pages/IndexPage.vue') },
      { path: 'cards', component: () => import('pages/IndexPage.vue') },
      { path: 'charts', component: () => import('pages/IndexPage.vue') },
    ],
  },

  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
