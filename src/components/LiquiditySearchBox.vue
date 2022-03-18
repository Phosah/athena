<template>
    <div>
        <div
            class="flex items-center space-x-4 w-80 h-14 px-8 border border-brand-gray-3 border-opacity-10 rounded-sm"
        >
            <img src="../assets/search-icon.svg" alt="Search icon" />
            <input
                class="w-full h-full bg-transparent focus-within:outline-none"
                type="text"
                placeholder="Search by token name or symbol"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LiquiditySearchBox",
    setup() {

    },
})
</script>
