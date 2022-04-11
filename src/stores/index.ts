import {defineStore} from 'pinia'

export const useLiquidityStore = defineStore({
    id: 'liquidity',
    state: () => ({
        activeTab: ''
    }),
    actions: {
        selectTab (tab: string) {
            this.activeTab = tab
        }
    },
    getters: {}
})