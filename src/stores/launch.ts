import {defineStore} from 'pinia'

export const useLaunchStore = defineStore({
    id: 'launch',
    state: () => ({
        activeTab: 'launchpad'
    }),
    actions: {
        selectTab (tab: string) {
            this.activeTab = tab
        }
    },
    getters: {}
})