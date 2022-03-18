<template>
    <div>
        <SwapAndBridgeButton />
        <div v-if="swap">
            <Swap />
        </div>
        <div v-if="bridge">
            <Bridge />
        </div>
        <SwapInfo />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SwapAndBridgeButton from '../components/SwapAndBridgeButton.vue'
import Swap from '../components/Swap.vue'
import SwapInfo from '../components/SwapInfo.vue'
import Bridge from '../components/Bridge.vue'


export default defineComponent({
    components: { SwapAndBridgeButton, Swap, SwapInfo, Bridge },
    setup() {
        const bridge = ref(true)
        const swap = ref(false)
        return { swap, bridge }
    },
})
</script>
