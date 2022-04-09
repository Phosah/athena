<template>
    <div>
        <div
            class="flex items-center space-x-4 w-96 h-14 px-8 border border-brand-gray-3 border-opacity-10 rounded-sm"
        >
            <img src="../assets/search-icon.svg" alt="Search icon" />
            <input
                class="w-full h-full bg-transparent focus-within:outline-none placeholder:text-brand-gray-7 placeholder:text-opacity-60 placeholder:font-sora"
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
