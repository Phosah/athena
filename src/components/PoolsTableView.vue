<template>
    <div class="text-sm font-semibold">
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
        <div class="flex items-center">
            <div class="flex-1 flex items-center">
                <div class="flex items-center">
                    <img src="../assets/pools-usdt-icon.png" alt="Usdt" />
                    <img
                        class="transform -translate-x-4"
                        src="../assets/pools-eth-icon.png"
                        alt="Eth"
                    />
                </div>
                <div>USDT/ETH</div>
            </div>
            <div class="flex-1">5,876,870 USD</div>
            <div class="w-28">7.9%</div>
            <div class="flex-1">432.985 USD</div>
            <div class="flex-1">
                <p>6,870 USD</p>
                <p class="text-brand-gray-2 text-sm font-bold">Earned: 6500 ATN</p>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "PoolsTableView",
    setup() {

    },
})
</script>
