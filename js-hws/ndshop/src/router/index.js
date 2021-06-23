import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/catalog',
    component: () => import('../views/Catalog.vue'),
    children: [
      {
        path: 'desktop',
        component: () => import('../views/products/Desktop.vue'),
      },
      {
        path: 'tab',
        component: () => import('../views/products/Tab.vue'),
      },
      {
        path: 'phone',
        component: () => import('../views/products/Phone.vue'),
      },
      {
        name: 'Card',
        path: 'card/:id',
        component: () => import('../views/products/Card.vue')
      }
    ]
  },
  {
    path: '/form',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/',
    component: () => import('../views/Main.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router