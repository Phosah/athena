<template>
    <div>
        <AddRemoveLiquidityButton />
        <AddLiquidity />
        <ClaimEarnings />
        <RemoveLiquidity />
        <RemoveLiquidityDetailed />
        <LiquidityInfo />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddRemoveLiquidityButton from '../components/AddRemoveLiquidityButton.vue'
import AddLiquidity from '../components/AddLiquidity.vue'
import ClaimEarnings from '../components/ClaimEarnings.vue'
import RemoveLiquidity from '../components/RemoveLiquidity.vue'
import RemoveLiquidityDetailed from '../components/RemoveLiquidityDetailed.vue'
import LiquidityInfo from '../components/LiquidityInfo.vue'

export default defineComponent({
    setup() {
    },
    components: { AddRemoveLiquidityButton, AddLiquidity, ClaimEarnings, RemoveLiquidity, RemoveLiquidityDetailed, LiquidityInfo }
})
</script>
