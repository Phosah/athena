<template>
    <div class="grid grid-cols-3 gap-8">
        <div v-for="(pool, ix) in pools" :key="ix">
            <div class="p-6 border border-brand-gray-3 border-opacity-10 rounded-md text-sm">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <img :src="pool.img1" :alt="pool.alt1" />
                            <img class="transform -translate-x-4" :src="pool.img2" :alt="pool.alt2" />
                        </div>
                        <div class="font-bold">{{ pool.poolName }}</div>
                    </div>
                    <div>
                        APY:
                        <span class="font-bold">{{ pool.apy }}</span>
                    </div>
                </div>
                <div class="my-6 border-b border-brand-gray-3 opacity-10"></div>
                <div class="flex items-center justify-between mb-6">
                    <p class="text-brand-gray-3">Total Liquidity</p>
                    <h3 class="font-bold">{{ pool.liquidity }}</h3>
                </div>
                <div class="flex items-center justify-between mb-6">
                    <p class="text-brand-gray-3">My Investment</p>
                    <h3 class="font-bold">{{ pool.investmentCurrency }}</h3>
                </div>
                <div class="flex items-center justify-between mb-6">
                    <p class="text-brand-gray-3">Earned</p>
                    <h3 class="font-bold">{{ pool.investmentCrypto }}</h3>
                </div>
                <div class="flex items-center space-x-4 justify-between mb-6">
                    <button class="flex-auto h-14 px-6 bg-brand-gray-5 rounded-md">Remove</button>
                    <button
                        class="flex-auto h-14 px-6 border border-brand-blue-4 rounded-md"
                    >Claim Earnings</button>
                </div>
                <button
                    class="mb-6 w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-bold rounded-md"
                >Add Liquidity</button>
                <div>
                    <div class="flex items-center justify-center space-x-4">
                        <p>More Details</p>
                        <img src="../assets/dropdown-arrow-icon.svg" alt="Dropdown icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type PoolsTable from '@/types/PoolsTable'
import type { PropType } from 'vue'

export default defineComponent({
    name: "PoolsBoxView",
    props: {
        pools: {
            type: Array as PropType<PoolsTable[]>,
            required: true
        }
    },
    setup(props) {

    },
})
</script>
