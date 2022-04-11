import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CollectWallet from '../views/ConnectWallet.vue'
import Exchange from '../views/Exchange.vue'
import LiquidityPool from '../views/LiquidityPool.vue'
import AddRemoveLiquidity from '../views/AddRemoveLiquidity.vue'
import Projects from '../views/Projects.vue'
import OlderProjects from '../views/OlderProjects.vue'
import LaunchpadSingleProject from '../views/LaunchpadSingleProject.vue'
import InvestInProject from '../views/InvestInProject.vue'
import LaunchpoolSingleProject from '../views/LaunchpoolSingleProject.vue'
import ClaimRewards from '../views/ClaimRewards.vue'
import SwapSuccessful from '../views/SwapSuccessful.vue'
import Farm from '../views/Farm.vue'
import ConfirmInvestment from '../views/ConfirmInvestment.vue'

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
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/olderprojects',
      name: 'OlderProjects',
      component: OlderProjects
    },
    {
      path: '/launchpadsingleproject',
      name: 'LaunchpadSingleProject',
      component: LaunchpadSingleProject
    },
    {
      path: '/investinproject',
      name: 'InvestInProject',
      component: InvestInProject
    },
    {
      path: '/launchpoolsingleproject',
      name: 'LaunchpoolSingleProject',
      component: LaunchpoolSingleProject
    },
    {
      path: '/claimrewards',
      name: 'ClaimRewards',
      component: ClaimRewards
    },
    {
      path: '/swapsuccessful',
      name: 'SwapSuccessful',
      component: SwapSuccessful
    },
    {
      path: '/farm',
      name: 'Farm',
      component: Farm
    },
    {
      path: '/confirminvestment',
      name: 'ConfirmInvestment',
      component: ConfirmInvestment
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