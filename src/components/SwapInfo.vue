<template>
    <div class="my-10">
        <div
            class="max-w-xl mx-auto p-6 pb-12 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5"
        >
            <div class="flex justify-end mb-4">
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
            <div class="flex justify-center mb-6">
                <img src="../assets/swap-success-icon.png" alt="Swap success" />
            </div>
            <div class="w-9/12 mx-auto">
                <div class="mb-8 text-center">
                    <h2 class="mb-6 text-2xl font-test-founders-bold">Swap Successful</h2>
                    <p
                        class
                    >The transaction has been successfully processed in the liquidity pool. The transfer may still be in process. Please check the transaction record later.</p>
                </div>
                <div class="flex items-center space-x-6">
                    <button
                        class="flex-1 py-4 bg-[#2F2F36] font-test-founders-bold rounded-md"
                    >Make a swap</button>
                    <button
                        class="flex-1 py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-test-founders-bold rounded-md"
                    >View history</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SwapInfo",
    components: {},
    setup() {

        return {}
    },
})
</script>
