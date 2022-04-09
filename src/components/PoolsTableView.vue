<template>
    <div class="font-test-founders-semibold">
        <div class="flex items-center mb-8">
            <div class="flex-1 flex items-center">
                <p>Pool</p>
                <img src="../assets/selector-icon.svg" alt="Selector icon" />
            </div>
            <div class="flex-1 flex items-center">
                <p>Liquidity</p>
                <img src="../assets/selector-icon.svg" alt="Selector icon" />
            </div>
            <div class="w-28 flex items-center">
                <p>APY</p>
                <img src="../assets/selector-icon.svg" alt="Selector icon" />
            </div>
            <div class="flex-1">Volume (24hr)</div>
            <div class="flex-1 flex items-center">
                <p>Investment</p>
                <img src="../assets/selector-icon.svg" alt="Selector icon" />
            </div>
            <div class="flex-1">Action</div>
        </div>
        <div v-for="(pool, ix) in pools" :key="ix">
            <div class="flex items-center mb-10">
                <div class="flex-1 flex items-center">
                    <div class="flex items-center">
                        <img :src="pool.img1" :alt="pool.alt1" />
                        <img class="transform -translate-x-4" :src="pool.img2" :alt="pool.alt2" />
                    </div>
                    <div class="text-lg">{{ pool.poolName }}</div>
                </div>
                <div class="flex-1">{{ pool.liquidity }}</div>
                <div class="w-28">{{ pool.apy }}</div>
                <div class="flex-1">{{ pool.volume }}</div>
                <div class="flex-1">
                    <p>{{ pool.investmentCurrency }}</p>
                    <p
                        class="text-brand-gray-2 text-sm font-bold"
                    >Earned: {{ pool.investmentCrypto }}</p>
                </div>
                <div class="flex-1 flex items-center space-x-4">
                    <div
                        class="w-10 h-10 flex items-center justify-center bg-brand-gray-5 rounded-full"
                    >
                        <img src="../assets/plus-icon.svg" alt="Plus icon" />
                    </div>
                    <div
                        class="w-10 h-10 flex items-center justify-center bg-brand-gray-5 rounded-full"
                    >
                        <img src="../assets/minus-icon.svg" alt="Minus icon" />
                    </div>
                    <div
                        class="w-10 h-10 flex items-center justify-center bg-brand-gray-5 rounded-full"
                    >
                        <img src="../assets/download-icon.svg" alt="Download icon" />
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
    name: "PoolsTableView",
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
