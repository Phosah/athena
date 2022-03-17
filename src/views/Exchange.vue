<template>
    <div>
        <SwapAndBridgeButton />
        <Swap />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SwapAndBridgeButton from '../components/SwapAndBridgeButton.vue'
import Swap from '../components/Swap.vue'


export default defineComponent({
    setup() {
    },
    components: { SwapAndBridgeButton, Swap }
})
</script>
