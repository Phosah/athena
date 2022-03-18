<template>
    <div class="my-10">
        <div
            class="max-w-xl mx-auto p-10 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5"
        >
            <h2 class="mb-6 text-2xl font-semibold">Remove Liquidity</h2>
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
                    <div class="font-semibold">BNB/BTC</div>
                    <img class="ml-2" src="../assets/dropdown-arrow-icon.svg" alt="dropdown icon" />
                </div>
                <div
                    class="text-brand-blue-3 font-semibold border-b border-brand-blue-3"
                >Detailed Mode</div>
            </div>
            <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-2xl">
                <div class="flex items-center justify-between mb-4">
                    <p>LP Amount</p>
                    <p>My Pool LP: 12.09</p>
                </div>
                <p class="text-3xl">8.43</p>
            </div>
            <div class="mb-10">
                <div class="mb-2 h-2 w-full bg-brand-gray-5 rounded-full">
                    <div
                        class="h-2 w-1/2 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 rounded-full"
                    ></div>
                </div>
                <div class="flex items-center justify-between text-[#909090]">
                    <p>0%</p>
                    <p>25%</p>
                    <p>50%</p>
                    <p>75%</p>
                    <p>100%</p>
                </div>
            </div>
            <div>
                <h3 class="mb-3 text-base font-bold">Summary</h3>
                <div class="mb-3 flex items-center justify-between">
                    <p>BNB Received:</p>
                    <div class="flex items-center space-x-2">
                        <h2 class="font-semibold">241.84 BNB</h2>
                        <img src="../assets/small-bnb-logo.png" alt="btc logo" />
                    </div>
                </div>
                <div class="mb-3 flex items-center justify-between">
                    <p>BTC Received:</p>
                    <div class="flex items-center space-x-2">
                        <h2 class="font-semibold">1.34 BTC</h2>
                        <img src="../assets/small-btc-logo.png" alt="bnb logo" />
                    </div>
                </div>
                <div class="mb-1 flex items-center justify-between">
                    <p class="text-sm">Price</p>
                    <h2 class="text-lg font-semibold">1 BNB = 0.16 BTC</h2>
                </div>
            </div>
            <button
                class="mt-8 w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-bold rounded-md"
            >Remove Liquidity</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "RemoveLiquidity",
    components: {},
    setup() {

        return {}
    },
})
</script>
