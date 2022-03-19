<template>
    <div>
        <div class="grid grid-cols-3 gap-8">
            <div v-for="(project, ix) in projects" :key="ix">
                <div class="text-sm border border-brand-gray-3 border-opacity-10 rounded-xl">
                    <img :src="project.img" :alt="project.alt" />
                    <div class="px-6 py-8">
                        <div class="flex items-center justify-between mb-2">
                            <h2 class="text-xl font-bold">{{ project.title }}</h2>
                            <div
                                class="px-4 py-1 bg-[#FEF8ED] text-[#F19C2C] rounded-md"
                            >{{ project.status }}</div>
                        </div>
                        <p class="mb-6 text-brand-gray-2">{{ project.content }}</p>
                        <div>
                            <div class="flex items-center justify-between space-x-2 mb-2">
                                <p class="text-brand-gray-2">Progress</p>
                                <h2 class="font-bold">{{ project.participants }} Participants</h2>
                            </div>
                            <div class="w-full h-2 bg-brand-gray-5 rounded-full">
                                <div
                                    class="h-2 w-1/2 bg-gradient-to-tr from-brand-blue-7 to-brand-blue-8 rounded-full"
                                ></div>
                            </div>
                            <div class="flex items-center justify-between mt-2">
                                <p>{{ project.progressPercent }}</p>
                                <p>{{ project.atntokens }} ATN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type LaunchpadProject from "@/types/LaunchpadProject"

export default defineComponent({
    name: "OlderProjects",
    props: {
        projects: {
            type: Array as PropType<LaunchpadProject[]>,
            required: true
        }
    },
    setup(props) {

    },
})
</script>
