import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CollectWallet from '../views/ConnectWallet.vue'
import Exchange from '../views/Exchange.vue'
import LiquidityPool from '../views/LiquidityPool.vue'
import AddRemoveLiquidity from '../views/AddRemoveLiquidity.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/connectwallet',
      name: 'ConnectWallet',
      component: Exchange
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/liquiditypool',
      name: 'LiquidityPool',
      component: LiquidityPool
    },
    {
      path: '/addremoveliquidity',
      name: 'AddRemoveLiquidity',
      component: AddRemoveLiquidity
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   route level code-splitting
    //   this generates a separate chunk (About.[hash].js) for this route
    //   which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router