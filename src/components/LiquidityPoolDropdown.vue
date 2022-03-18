<template>
    <div>
        <div
            class="flex items-center space-x-4 w-40 h-14 px-6 border border-brand-gray-3 border-opacity-10 rounded-sm"
        >
            <input
                class="w-full h-full bg-transparent focus-within:outline-none"
                type="text"
                placeholder="All Pools"
            />
            <img src="../assets/dropdown-arrow-icon.svg" alt="Dropdown icon" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

    },
})
</script>
