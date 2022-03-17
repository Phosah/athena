<template>
    <div class="flex items-center justify-center">
        <div
            class="flex items-center justify-between space-x-2 w-80 h-14 p-2 bg-brand-gray-1 text-sm rounded-full"
        >
            <div
                class="flex-1 flex justify-center h-10 bg-brand-gray-5 text-white font-bold rounded-full"
            >
                <button>Swap</button>
            </div>
            <div class="flex-1 flex justify-center text-brand-gray-3">
                <button>Bridge</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SwapAndBridgeButton",
    setup() {

    },
})
</script>
