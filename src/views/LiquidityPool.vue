<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <div>
                <h2 class="mb-1 text-lg font-bold">All Pools</h2>
                <p>
                    Liquidity providers earn rewards trading fees in the pools.
                    <span
                        class="font-bold border-b border-white"
                    >Learn More</span>
                </p>
            </div>
            <div class="space-x-3">
                <button class="h-14 px-6 border border-brand-blue-4 rounded-md">Create Pool</button>
                <button class="h-14 px-6 bg-brand-gray-5 rounded-md">Import Pool</button>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4 mb-8">
                <LiquiditySearchBox />
                <LiquidityPoolDropdown />
                <div class="flex items-center space-x-3 font-semibold">
                    <input class type="checkbox" name="terms" id="terms" />
                    <label for="terms">Only available assets</label>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <p>Switch view:</p>
                <div class="w-10 h-10 flex items-center justify-center bg-brand-gray-5 rounded-md">
                    <img src="../assets/table-view-icon.svg" alt="table view" />
                </div>
                <img src="../assets/box-view-icon.svg" alt="box view" />
            </div>
        </div>
        <PoolsTableView />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LiquiditySearchBox from "../components/LiquiditySearchBox.vue"
import LiquidityPoolDropdown from "../components/LiquidityPoolDropdown.vue"
import PoolsTableView from "../components/PoolsTableView.vue"

export default defineComponent({
    name: "LiquidityPool",
    components: { LiquiditySearchBox, LiquidityPoolDropdown, PoolsTableView },
    setup() {

    },
})
</script>
