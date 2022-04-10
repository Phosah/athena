<template>
    <div>
        <AddRemoveLiquidityButton />

        <AddLiquidity v-show="activeTab == 'add'" />
        <ClaimEarnings v-show="activeTab == 'claim'" />
        <RemoveLiquidity v-show="activeTab == 'remove'" />
        <RemoveLiquidityDetailed v-show="activeTab == 'remove'" />
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
        const { activeTab } = storeToRefs(liquidity)



        const selectedTab = ref('')
        const selectTab = (tab: string) => {
            selectedTab.value = tab
        }
        return { selectedTab, activeTab, selectTab }
    },
})
</script>
