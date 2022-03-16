<template>
    <div class="mb-3">
        <p class="mb-2 text-sm text-brand-gray-2">Total balance:</p>
        <div class="flex items-center space-x-4">
            <h2 class="text-2xl font-semibold">$45,000.15</h2>
            <div class="flex items-center space-x-1">
                <img src="../assets/up-arrow-icon.svg" alt="Up arrow" />
                <p>15.5%</p>
            </div>
        </div>
    </div>
    <div>
        <img src="../assets/total-balance-graph.png" alt="Total balance graph" />
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
