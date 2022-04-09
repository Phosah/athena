<template>
    <div>
        <div
            class="flex items-center space-x-4 w-[600px] h-14 px-8 border border-brand-gray-3 rounded-md"
        >
            <img src="../assets/search-icon.svg" alt="Search icon" />
            <input
                class="w-full h-full bg-transparent focus-within:outline-none placeholder:text-brand-gray-7 placeholder:text-opacity-60 placeholder:font-sora"
                type="text"
                placeholder="Search by token name, symbol, pair contract or token"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SearchBox",
    setup() {

    },
})
</script>
