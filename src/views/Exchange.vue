<template>
    <div>
        <SwapAndBridgeButton />
        <Swap />
        <SwapInfo />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SwapAndBridgeButton from '../components/SwapAndBridgeButton.vue'
import Swap from '../components/Swap.vue'
import SwapInfo from '../components/SwapInfo.vue'


export default defineComponent({
    setup() {
    },
    components: { SwapAndBridgeButton, Swap, SwapInfo }
})
</script>
