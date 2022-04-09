<template>
    <div>
        <div class="flex items-center justify-between mb-8">
            <div>
                <h2 class="mb-1 text-2xl font-test-founders-semibold">All Pools</h2>
                <p>
                    Liquidity providers earn rewards trading fees in the pools.
                    <span
                        class="font-test-founders-bold border-b border-white"
                    >Learn More</span>
                </p>
            </div>
            <div class="space-x-3 text-xs">
                <button
                    class="font-sora font-semibold h-14 px-6 border border-brand-blue-4 rounded-md"
                >Create Pool</button>
                <button
                    class="font-sora font-semibold h-14 px-6 bg-brand-gray-5 rounded-md"
                >Import Pool</button>
            </div>
        </div>
        <div class="flex items-center justify-between mb-8">
            <div class="flex items-center space-x-4">
                <LiquiditySearchBox />
                <LiquidityPoolDropdown />
                <div class="flex items-center space-x-3 font-test-founders-medium">
                    <input class type="checkbox" name="terms" id="terms" />
                    <label for="terms">Only available assets</label>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <p class="font-test-founders-medium">Switch view:</p>
                <div
                    @click="selectView('table')"
                    :class="selectedView === 'table' ? 'w-10 h-10 bg-brand-gray-5 rounded-md' : ''"
                    class="flex items-center justify-center"
                >
                    <img src="../assets/table-view-icon.svg" alt="table view" />
                </div>
                <div
                    @click="selectView('box')"
                    :class="selectedView === 'box' ? 'w-10 h-10 bg-brand-gray-5 rounded-md' : ''"
                    class="flex items-center justify-center"
                >
                    <img src="../assets/box-view-icon.svg" alt="box view" />
                </div>
            </div>
        </div>
        <div v-show="selectedView == 'table'">
            <PoolsTableView :pools="poolsArr" />
        </div>
        <div v-show="selectedView == 'box'">
            <PoolsBoxView :pools="poolsArr" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LiquiditySearchBox from "../components/LiquiditySearchBox.vue"
import LiquidityPoolDropdown from "../components/LiquidityPoolDropdown.vue"
import PoolsTableView from "../components/PoolsTableView.vue"
import type PoolsTable from '@/types/PoolsTable'
import poolsImg1 from "../assets/pools-usdt-icon.png"
import poolsImg2 from "../assets/pools-eth-icon.png"
import poolsImg3 from "../assets/pools-bnb-icon.png"
import poolsImg4 from "../assets/pools-btc-icon.png"
import poolsImg5 from "../assets/pools-polkadot-icon.png"
import poolsImg6 from "../assets/pools-doge-icon.png"
import poolsImg7 from "../assets/pools-shiba-inu-icon.png"
import poolsImg8 from "../assets/pools-rose-icon.png"
import PoolsBoxView from "../components/PoolsBoxView.vue"

export default defineComponent({
    name: "LiquidityPool",
    components: { LiquiditySearchBox, LiquidityPoolDropdown, PoolsTableView, PoolsBoxView },
    setup() {
        const selectedView = ref('')
        const selectView = (tab: string) => {
            selectedView.value = tab
        }
        const poolsArr = ref<PoolsTable[]>([
            {
                img1: poolsImg1,
                img2: poolsImg2,
                alt1: "Usdt",
                alt2: "Eth",
                poolName: "USDT/ETH",
                liquidity: "5,876,870 USD",
                apy: "7.9%",
                volume: "432.985 USD",
                investmentCurrency: "6,870 USD",
                investmentCrypto: "6500 ATN"
            },
            {
                img1: poolsImg3,
                img2: poolsImg4,
                alt1: "bnb",
                alt2: "btc",
                poolName: "BNB/BTC",
                liquidity: "5,876,870 USD",
                apy: "7.9%",
                volume: "432.985 USD",
                investmentCurrency: "0.00 USD",
                investmentCrypto: "0 ATN"
            },
            {
                img1: poolsImg1,
                img2: poolsImg5,
                alt1: "Usdt",
                alt2: "dot",
                poolName: "USDT/DOT",
                liquidity: "5,876,870 USD",
                apy: "7.9%",
                volume: "432.985 USD",
                investmentCurrency: "6,870 USD",
                investmentCrypto: "6500 ATN"
            },
            {
                img1: poolsImg2,
                img2: poolsImg6,
                alt1: "eth",
                alt2: "doge",
                poolName: "ETH/DOGE",
                liquidity: "5,876,870 USD",
                apy: "7.9%",
                volume: "432.985 USD",
                investmentCurrency: "6,870 USD",
                investmentCrypto: "6500 ATN"
            },
            {
                img1: poolsImg7,
                img2: poolsImg2,
                alt1: "shib",
                alt2: "Eth",
                poolName: "SHIB/ETH",
                liquidity: "5,876,870 USD",
                apy: "7.9%",
                volume: "432.985 USD",
                investmentCurrency: "0.00 USD",
                investmentCrypto: "0 ATN"
            },
            {
                img1: poolsImg5,
                img2: poolsImg8,
                alt1: "dot",
                alt2: "rose",
                poolName: "DOT/ROSE",
                liquidity: "5,876,870 USD",
                apy: "7.9%",
                volume: "432.985 USD",
                investmentCurrency: "6,870 USD",
                investmentCrypto: "6500 ATN"
            },
            {
                img1: poolsImg4,
                img2: poolsImg6,
                alt1: "BTC",
                alt2: "doge",
                poolName: "BTC/DOGE",
                liquidity: "5,876,870 USD",
                apy: "7.9%",
                volume: "432.985 USD",
                investmentCurrency: "0.00 USD",
                investmentCrypto: "0 ATN"
            },
        ])
        return { poolsArr, selectView, selectedView }
    },
})
</script>
