<template>
    <div>
        <AddRemoveLiquidityButton @changeTab="selectTab" />

        <AddLiquidity v-show="selectedTab == 'add'" @changeTab="selectTab" />
        <ClaimEarnings v-show="selectedTab == 'claim'" @changeTab="selectTab" />
        <RemoveLiquidity v-show="selectedTab == 'remove'" @changeTab="selectTab" />
        <RemoveLiquidityDetailed v-show="selectedTab == 'remove'" />
        <LiquidityInfo />
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

export default defineComponent({
    setup() {
        const selectedTab = ref('')
        const selectTab = (tab: string) => {
            selectedTab.value = tab
        }
        return { selectedTab, selectTab }
    },
    components: { AddRemoveLiquidityButton, AddLiquidity, ClaimEarnings, RemoveLiquidity, RemoveLiquidityDetailed, LiquidityInfo }
})
</script>
