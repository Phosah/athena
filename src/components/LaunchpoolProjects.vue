<template>
    <div>
        <div class="my-8 grid grid-cols-3 gap-8">
            <div v-for="(project, ix) in projects" :key="ix">
                <div class="p-6 border border-brand-gray-3 border-opacity-10 rounded-md text-sm">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <div>
                                <img :src="project.img" :alt="project.alt" />
                            </div>
                            <div class="font-bold uppercase">Zeus</div>
                        </div>
                        <div class="text-brand-gray-2">
                            APY:
                            <span class="font-bold text-white">{{ project.apy }}%</span>
                        </div>
                    </div>
                    <div class="mt-6 mb-4 border-b border-brand-gray-3 opacity-10"></div>
                    <div>
                        <h2 class="mb-1 text-sm text-brand-gray-2">Farming Ends In</h2>
                        <div class="flex items-center justify-between mb-3">
                            <h4 class="text-xs text-brand-gray-2">
                                <span class="font-bold text-lg text-white">01</span> Days
                                <span class="font-bold text-lg text-white">15</span> Hours
                                <span class="font-bold text-lg text-white">58</span> Mins
                            </h4>
                            <div
                                class="px-2 py-1.5 bg-[#FEF8ED] text-[#F19C2C] text-xs rounded-md"
                            >{{ project.status }}</div>
                        </div>
                    </div>
                    <div class="my-5 text-xs">
                        <div class="flex items-center justify-between">
                            <p class="text-brand-gray-2 mb-2">Reward Progress</p>
                            <p>{{ project.progress }}%</p>
                        </div>
                        <div class="w-full h-3 bg-brand-gray-5 rounded-full">
                            <div
                                class="h-3 w-1/2 bg-gradient-to-tr from-brand-blue-7 to-brand-blue-8 rounded-full"
                            ></div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-brand-gray-3">Participants</p>
                        <h3 class="font-bold">{{ project.participants }}</h3>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-brand-gray-3">Total Rewards</p>
                        <h3 class="font-bold">{{ project.rewards }}</h3>
                    </div>
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-brand-gray-3">Total Staked</p>
                        <h3 class="font-bold">{{ project.staked }} ATN</h3>
                    </div>
                    <div class="flex items-center space-x-4 justify-between mb-6">
                        <button class="flex-auto h-14 px-6 bg-brand-gray-5 rounded-md">View Pool</button>
                        <button
                            class="flex-auto h-14 px-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 text-black font-bold rounded-md"
                        >Stake Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type LaunchpoolProject from '../types/LaunchpoolProject'
import type { PropType } from 'vue'

export default defineComponent({
    name: "LaunchpoolProjects",
    props: {
        projects: {
            type: Array as PropType<LaunchpoolProject[]>,
            required: true
        }
    },
    setup() {

    },
})
</script>
