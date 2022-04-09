<template>
    <div>
        <SwapAndBridgeButton @changeTab="selectTab" />
        <div v-show="selectedTab === 'swap'">
            <Swap />
        </div>
        <div v-show="selectedTab === 'bridge'">
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
        const selectedTab = ref('swap')
        const selectTab = (tab: string) => {
            selectedTab.value = tab
            console.log("clicked", selectedTab.value)

        }
        return { selectedTab, selectTab }
    },
})
</script>
