<template>
    <div class="flex items-center justify-center">
        <div
            class="flex items-center justify-between space-x-2 w-96 h-14 p-2 bg-brand-gray-1 text-sm rounded-full"
        >
            <div
                @click="switchTab('add')"
                :class="selectedTab == 'add' ? 'h-10 bg-brand-gray-5 text-white font-test-founders-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Add Liquidity</button>
            </div>
            <div
                @click="switchTab('claim')"
                :class="selectedTab == 'claim' ? 'h-10 bg-brand-gray-5 text-white font-test-founders-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Claim Earnings</button>
            </div>
            <div
                @click="switchTab('remove')"
                :class="selectedTab == 'remove' ? 'h-10 bg-brand-gray-5 text-white font-test-founders-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Remove Liquidity</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "AddRemoveLiquidityButton",
    setup(props, { emit }) {
        const selectedTab = ref('')
        const switchTab = (tab: string) => {
            emit("changeTab", tab)
            selectedTab.value = tab
            console.log(selectedTab.value)
        }
        return { selectedTab, switchTab }
    },
})
</script>
