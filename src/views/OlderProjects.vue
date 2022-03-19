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
            <LaunchpadLaunchPoolButton />
        </div>
        <div class="grid grid-cols-3 gap-8">
            <div class="text-sm border border-brand-gray-3 border-opacity-10 rounded-xl">
                <img src="../assets/older-projects-img1.png" alt="Alpine F1" />
                <div class="px-6 py-8">
                    <div class="flex items-center justify-between mb-2">
                        <h2 class="text-xl font-bold">Alpine F1</h2>
                        <div class="px-4 py-1 bg-[#FEF8ED] text-[#F19C2C] rounded-md">In Progress</div>
                    </div>
                    <p class="mb-6 text-brand-gray-2">A blockchain Fan Token for the Aplhas</p>
                    <div>
                        <div class="flex items-center justify-between space-x-2 mb-2">
                            <p class="text-brand-gray-2">Progress</p>
                            <h2 class="font-bold">2,490 Participants</h2>
                        </div>
                        <div class="w-full h-2 bg-brand-gray-5 rounded-full">
                            <div
                                class="h-2 w-1/2 bg-gradient-to-tr from-brand-blue-7 to-brand-blue-8 rounded-full"
                            ></div>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <p>60%</p>
                            <p>700 ATN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LaunchpadLaunchPoolButton from '@/components/LaunchpadLaunchPoolButton.vue'

export default defineComponent({
    name: "OlderProjects",
    components: { LaunchpadLaunchPoolButton },
    setup() {

    },
})
</script>