<template>
    <div class="mb-3">
        <p class="mb-2 font-test-founders-medium text-brand-gray-2">Total balance:</p>
        <div class="flex items-center space-x-4">
            <h2 class="text-3xl font-test-founders-bold">$45,000.15</h2>
            <div class="flex items-center space-x-1">
                <img src="../assets/up-arrow-icon.svg" alt="Up arrow" />
                <p class="font-test-founders-medium text-brand-green-5">15.5%</p>
            </div>
        </div>
    </div>
    <div>
        <img class="w-full" src="../assets/total-balance-graph.png" alt="Total balance graph" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "TotalBalance",
    setup() {

    },
})
</script>
