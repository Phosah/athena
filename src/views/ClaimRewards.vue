<template>
    <div>
        <div class="my-10 max-w-lg mx-auto flex items-center space-x-12 justify-between">
            <div
                class="flex-1 px-6 pt-4 pb-6 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5"
            >
                <div class="flex justify-end">
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <div class="mb-6">
                    <h2 class="mb-3 text-2xl font-semibold">Claim Rewards</h2>
                    <p
                        class="w-9/12 text-sm"
                    >Once claimed, your rewards would be transferred to your wallet and can be traded</p>
                </div>
                <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-md">
                    <div class="flex items-center justify-between mb-4">
                        <p>Amount</p>
                        <p>Available : 50,043 ATN</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-3xl">10,000</p>
                        <div class="flex items-center space-x-4">
                            <p class="text-brand-blue-3 font-semibold text-sm">ALLOWED MAX</p>
                            <div
                                class="flex items-center space-x-2 p-2 border border-brand-blue-3 bg-brand-blue-3 bg-opacity-10 rounded-full"
                            >
                                <img src="../assets/small-atn-logo.png" alt="atn logo" />
                                <p class="font-semibold">ATN</p>
                                <img src="../assets/dropdown-arrow-icon.svg" alt="Arrow icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-bold rounded-md"
                >Invest Now</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ClaimRewards",
    setup() {

    },
})
</script>
