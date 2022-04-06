<template>
    <div class="p-4 border border-brand-gray-4 border-opacity-10 rounded-sm">
        <div class="flex items-center space-x-1 mb-1">
            <p class="text-brand-gray-2 font-semibold">Runway Available</p>
            <img src="../assets/info-icon.svg" alt="Info icon" />
        </div>
        <h3 class="font-semibold">234 Days</h3>
        <div class="mt-2">
            <img
                class="w-full"
                src="../assets/runway-available-graph.png"
                alt="Runway available graph"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "RunwayAvailable",
    setup() {

    },
})
</script>
