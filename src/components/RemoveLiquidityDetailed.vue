<template>
    <div class="my-10">
        <div
            class="max-w-xl mx-auto p-10 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5"
        >
            <h2 class="mb-6 text-2xl font-sora font-bold">Remove Liquidity</h2>
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img src="../assets/pools-bnb-icon.png" alt="doge" />
                        <img
                            class="transform -translate-x-4"
                            src="../assets/pools-btc-icon.png"
                            alt="btc"
                        />
                    </div>
                    <div class="font-test-founders-semibold">BNB/BTC</div>
                    <img class="ml-2" src="../assets/dropdown-arrow-icon.svg" alt="dropdown icon" />
                </div>
                <div
                    class="text-brand-blue-3 font-test-founders-semibold border-b border-brand-blue-3"
                >Detailed Mode</div>
            </div>
            <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-2xl">
                <div class="flex items-center justify-between mb-4">
                    <p>LP Amount</p>
                    <p>My Pool LP: 12.09</p>
                </div>
                <p class="text-3xl">8.43</p>
            </div>
            <h3 class="mb-6 font-semibold">To Receive</h3>
            <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-2xl">
                <div class="flex items-center justify-between mb-4">
                    <p>First Asset</p>
                    <p>Available : 50.43 BNB</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-3xl">50.43</p>
                    <div class="flex items-center space-x-4">
                        <p class="text-brand-blue-3 font-test-founders-semibold">MAX</p>
                        <div
                            class="flex items-center space-x-2 p-2 border border-brand-yellow-2 bg-brand-yellow-2 bg-opacity-10 rounded-full"
                        >
                            <img src="../assets/small-bnb-logo.png" alt="bnb logo" />
                            <p class="font-test-founders-semibold">BNB</p>
                            <img src="../assets/dropdown-arrow-icon.svg" alt="Arrow icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-2xl">
                <div class="flex items-center justify-between mb-4">
                    <p>Second Asset</p>
                    <p>Available : 1.43 BTC</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-3xl">1.09</p>
                    <div class="flex items-center space-x-4">
                        <p class="text-brand-blue-3 font-test-founders-semibold">MAX</p>
                        <div
                            class="flex items-center space-x-2 p-2 border border-brand-orange-1 bg-brand-orange-1 bg-opacity-10 rounded-full"
                        >
                            <img src="../assets/small-btc-logo.png" alt="usdt logo" />
                            <p class="font-test-founders-semibold">BTC</p>
                            <img src="../assets/dropdown-arrow-icon.svg" alt="Arrow icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-1 flex items-center justify-between">
                <p class="text-sm">Price :</p>
                <h2 class="text-lg font-test-founders-bold">1 BNB = 0.16 BTC</h2>
            </div>
            <button
                class="mt-8 w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-sora font-bold rounded-md"
            >Remove Liquidity</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "RemoveLiquidityDetailed",
    components: {},
    setup() {

        return {}
    },
})
</script>
