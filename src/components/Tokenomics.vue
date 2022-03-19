<template>
    <div>
        <h2 class="mb-6 font-bold text-xl">Tokenomics</h2>
        <div class="mb-6 flex items-center justify-between space-x-3">
            <p class="text-sm text-brand-gray-2">Sale Price</p>
            <h3 class="font-bold text-base">1 C98 = 0.006 CVR</h3>
        </div>
        <div class="mb-6 flex items-center justify-between space-x-3">
            <p class="text-sm text-brand-gray-2">Token Allocation</p>
            <h3 class="font-bold text-base">300,000,000 CVR</h3>
        </div>
        <div class="mb-6 flex items-center justify-between space-x-3">
            <p class="text-sm text-brand-gray-2">Minimum Allocation</p>
            <h3 class="font-bold text-base">0.02 ATN</h3>
        </div>
        <div class="mb-6 flex items-center justify-between space-x-3">
            <p class="text-sm text-brand-gray-2">Maximum Allocation</p>
            <h3 class="font-bold text-base">200 ATN</h3>
        </div>
        <div class="mb-6 flex items-center justify-between space-x-3">
            <p class="text-sm text-brand-gray-2">Initial Market Cap</p>
            <h3 class="font-bold text-base">0.078 USD</h3>
        </div>
        <div class="mb-6 flex items-center justify-between space-x-3">
            <p class="text-sm text-brand-gray-2">Initial Token Circulation</p>
            <h3 class="font-bold text-base">1,990,00900 CVR</h3>
        </div>
        <button
            class="mt-8 w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-bold rounded-md"
        >Invest in Project</button>
        <div class="my-12">
            <h2 class="mb-6 text-xl font-bold">Social Channels</h2>
            <div class="flex items-center space-x-5">
                <img src="../assets/twitter-icon.svg" alt="Twitter" />
                <img src="../assets/medium-icon.svg" alt="Medium" />
                <img src="../assets/telegram-icon.svg" alt="Telegram" />
                <img src="../assets/discord-icon.svg" alt="Discord" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Tokenomics",
    setup() {

    },
})
</script>
