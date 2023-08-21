import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'customers',
        name: 'customers',
        component: () => import('pages/CustomersPage.vue')
      },
      {
        path: 'library',
        name: 'library',
        component: () => import('pages/LibraryPage.vue')},
      {
        path: 'settings',
        name: 'settings',
        component: () => import('pages/SettingsPage.vue')},
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('pages/CalendarPage.vue')},
      {
        path: 'cards',
        name: 'cards',
        component: () => import('pages/CardsPage.vue')},
      {
        path: 'charts',
        name: 'charts',
        component: () => import('pages/ChartsPage.vue')},
    ],
  },

  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/LoginPage.vue')},
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
