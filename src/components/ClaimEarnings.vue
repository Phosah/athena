<template>
    <div class="my-10">
        <div
            class="max-w-xl mx-auto p-10 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5"
        >
            <h2 class="mb-6 text-2xl font-semibold">Claim Earnings</h2>
            <div class="flex items-center mb-6">
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
            <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-2xl">
                <div class="flex items-center justify-between mb-4">
                    <p>Amount</p>
                    <p>Earnings : 5043 ATN</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-3xl">50.43</p>
                    <div class="flex items-center space-x-4">
                        <p class="text-brand-blue-3 font-semibold">MAX</p>
                        <div
                            class="flex items-center space-x-2 p-2 border border-brand-blue-3 bg-brand-blue-3 bg-opacity-10 rounded-full"
                        >
                            <img src="../assets/small-atn-logo.png" alt="bnb logo" />
                            <p class="font-semibold">ATN</p>
                            <img src="../assets/dropdown-arrow-icon.svg" alt="Arrow icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="mb-3 text-base font-bold">Summary</h3>
                <div class="mb-3 flex items-center justify-between">
                    <p>Pooled BNB:</p>
                    <div class="flex items-center space-x-2">
                        <h2 class="font-semibold">241.84 BNB</h2>
                        <img src="../assets/small-bnb-logo.png" alt="btc logo" />
                    </div>
                </div>
                <div class="mb-3 flex items-center justify-between">
                    <p>Pooled BTC:</p>
                    <div class="flex items-center space-x-2">
                        <h2 class="font-semibold">1.34 BTC</h2>
                        <img src="../assets/small-btc-logo.png" alt="bnb logo" />
                    </div>
                </div>
                <div class="mb-1 flex items-center justify-between">
                    <p class="text-sm">My Pool LP:</p>
                    <h2 class="text-lg font-semibold">12.09</h2>
                </div>
                <div class="mb-1 flex items-center justify-between">
                    <p class="text-sm">Portion of pool :</p>
                    <h2 class="text-lg font-semibold">3.2%</h2>
                </div>
                <div class="mb-1 flex items-center justify-between">
                    <p class="text-sm">Total Yield :</p>
                    <h2 class="text-lg font-semibold">9.3%</h2>
                </div>
            </div>
            <button
                class="mt-8 w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-bold rounded-md"
            >Claim Rewards</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ClaimEarnings",
    components: {},
    setup() {

        return {}
    },
})
</script>
