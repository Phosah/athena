<template>
    <div class="flex items-center justify-center">
        <div
            class="flex items-center justify-between space-x-2 w-96 h-14 p-2 bg-brand-gray-1 text-sm rounded-full"
        >
            <div
                @click="liquidity.selectTab('add')"
                :class="activeTab == 'add' ? 'h-10 bg-brand-gray-5 text-white font-test-founders-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Add Liquidity</button>
            </div>
            <div
                @click="liquidity.selectTab('claim')"
                :class="activeTab == 'claim' ? 'h-10 bg-brand-gray-5 text-white font-test-founders-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Claim Earnings</button>
            </div>
            <div
                @click="liquidity.selectTab('remove')"
                :class="activeTab == 'remove' ? 'h-10 bg-brand-gray-5 text-white font-test-founders-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Remove Liquidity</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useLiquidityStore } from '@/stores/index'
import { storeToRefs } from 'pinia'


export default defineComponent({
    name: "AddRemoveLiquidityButton",
    setup(props, { emit }) {
        const liquidity = useLiquidityStore()
        const { activeTab } = storeToRefs(liquidity)

        /*
        const selectedTab = ref('')
        const switchTab = (tab: string) => {
            emit("changeTab", tab)
            selectedTab.value = tab
        }
        */
        return { activeTab, liquidity }
    },
})
</script>
