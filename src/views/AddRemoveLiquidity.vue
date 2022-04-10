<template>
    <div>
        <AddRemoveLiquidityButton @changeTab="selectTab" />

        <AddLiquidity v-show="activeTab == 'add'" @changeTab="showTab" />
        <ClaimEarnings v-show="selectedTab == 'claim'" @changeTab="showTab" />
        <RemoveLiquidity v-show="selectedTab == 'remove'" @changeTab="showTab" />
        <RemoveLiquidityDetailed v-show="selectedTab == 'remove'" />
        <LiquidityInfo />
        <div>{{ activeTab }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AddRemoveLiquidityButton from '../components/AddRemoveLiquidityButton.vue'
import AddLiquidity from '../components/AddLiquidity.vue'
import ClaimEarnings from '../components/ClaimEarnings.vue'
import RemoveLiquidity from '../components/RemoveLiquidity.vue'
import RemoveLiquidityDetailed from '../components/RemoveLiquidityDetailed.vue'
import LiquidityInfo from '../components/LiquidityInfo.vue'
import { useLiquidityStore } from '@/stores/index'
import { storeToRefs } from 'pinia'

export default defineComponent({
    components: { AddRemoveLiquidityButton, AddLiquidity, ClaimEarnings, RemoveLiquidity, RemoveLiquidityDetailed, LiquidityInfo },
    setup() {
        const liquidity = useLiquidityStore()
        const { activeTab } = liquidity

        const selectedTab = ref('')
        const selectTab = (tab: string) => {
            selectedTab.value = tab
        }
        const showTab = (tab: string) => {
            if (tab === 'add') {
                selectedTab.value = 'add'
            } else if (tab == 'remove') {
                selectedTab.value = 'remove'
            } else if (tab == 'claim') {
                selectedTab.value = 'claim'
            }
            console.log("clicked");

            console.log(selectedTab.value)
        }
        return { selectedTab, activeTab, selectTab, showTab }
    },
})
</script>
