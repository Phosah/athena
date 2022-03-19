<template>
    <div>
        <div class="flex items-center justify-between mb-10">
            <div class="flex items-center space-x-3">
                <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
                <h2 class="mb-1 text-lg font-bold">Older projects</h2>
            </div>
            <div class="flex items-center space-x-4">
                <div>
                    <img src="../assets/website-icon.svg" alt="Website icon" />
                </div>
                <div>
                    <img src="../assets/newspaper-icon.svg" alt="Newspaper icon" />
                </div>
                <div>
                    <img src="../assets/clipboard-icon.svg" alt="Clipboard icon" />
                </div>
                <div>
                    <img src="../assets/lightbulb-icon.svg" alt="Lightbulb icon" />
                </div>
                <div>
                    <img src="../assets/help-icon.svg" alt="Help icon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LaunchpadProject",
    setup() {

    },
})
</script>
