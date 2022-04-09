<template>
    <div class="flex items-center justify-center">
        <div
            class="flex items-center justify-between space-x-2 w-80 h-14 p-2 bg-brand-gray-1 text-sm rounded-full"
        >
            <div
                @click="switchTab('swap')"
                :class="selectedTab === 'swap' ? 'h-10 bg-brand-gray-5 text-white font-test-founders-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Swap</button>
            </div>
            <div
                @click="switchTab('bridge')"
                :class="selectedTab === 'bridge' ? 'h-10 bg-brand-gray-5 text-white font-test-founders-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Bridge</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineEmits, ref } from 'vue'

export default defineComponent({
    name: "SwapAndBridgeButton",

    setup(props, { emit }) {
        const selectedTab = ref('swap')
        const switchTab = (tab: string) => {
            emit("changeTab", tab)
            selectedTab.value = tab
        }

        return { selectedTab, switchTab }
    },
})
</script>
