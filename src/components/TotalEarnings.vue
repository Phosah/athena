<template>
    <div class="mb-8">
        <p class="mb-3 font-test-founders-medium text-brand-gray-2">Total earnings:</p>
        <div class="flex items-end space-x-1">
            <h2 class="text-3xl font-test-founders-bold">56,000 ATH</h2>
            <p class="text-sm text-brand-gray-2">~$4,000</p>
        </div>
    </div>
    <div class="text-sm">
        <div class="mb-3">
            <div class="flex items-center justify-between mb-1">
                <p>Farms</p>
                <p class="font-test-founders-semibold">12,599 ATH</p>
            </div>
            <div class="flex items-center space-x-2">
                <div class="w-1/3 h-2 bg-brand-green-1 rounded-full"></div>
                <p class="text-xs text-white opacity-40">27%</p>
                <div class="flex-1 h-2 bg-brand-gray-1 rounded-full"></div>
            </div>
        </div>
        <div class="mb-3">
            <div class="flex items-center justify-between mb-1">
                <p>Pool</p>
                <p class="font-test-founders-semibold">5,760 ATH</p>
            </div>
            <div class="flex items-center space-x-2">
                <div class="w-2/12 h-2 bg-brand-blue-1 rounded-full"></div>
                <p class="text-xs text-white opacity-40">8%</p>
                <div class="flex-1 h-2 bg-brand-gray-1 rounded-full"></div>
            </div>
        </div>
        <div class="mb-3">
            <div class="flex items-center justify-between mb-1">
                <p>Stake</p>
                <p class="font-test-founders-semibold">35,000 ATH</p>
            </div>
            <div class="flex items-center space-x-2">
                <div class="w-2/3 h-2 bg-brand-yellow-1 rounded-full"></div>
                <p class="text-xs text-white opacity-40">35%</p>
                <div class="flex-1 h-2 bg-brand-gray-1 rounded-full"></div>
            </div>
        </div>
        <div class="mb-6">
            <div class="flex items-center justify-between mb-1">
                <p>Bond</p>
                <p class="font-test-founders-semibold">15,000 ATH</p>
            </div>
            <div class="flex items-center space-x-2">
                <div class="w-2/4 h-2 bg-brand-red-1 rounded-full"></div>
                <p class="text-xs text-white opacity-40">30%</p>
                <div class="flex-1 h-2 bg-brand-gray-1 rounded-full"></div>
            </div>
        </div>
        <button
            class="font-sora w-full mt-3 py-3 px-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 text-base text-[#001540] font-semibold rounded-md"
        >Claim Earnings</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "TotalEarnings",
    setup() {

    },
})
</script>
