<template>
    <div>
        <div class="flex items-center justify-between mb-10">
            <div>
                <h2 class="mb-1 text-lg font-bold">Launchpool</h2>
                <p>Earn juicy rewards farming verified new assets</p>
            </div>
            <LaunchpadLaunchpoolButton />
        </div>
        <div class="flex items-center space-x-4">
            <LiquiditySearchBox />
            <LiquidityPoolDropdown />
        </div>
        <LaunchpoolProjects :projects="projectsArr" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type LaunchpoolProject from '../types/LaunchpoolProject'
import LaunchpadLaunchpoolButton from "./LaunchpadLaunchpoolButton.vue"
import LiquiditySearchBox from './LiquiditySearchBox.vue'
import LiquidityPoolDropdown from './LiquidityPoolDropdown.vue'
import LaunchpoolProjects from './LaunchpoolProjects.vue'
import projectimg1 from "../assets/zeus-logo.png"
import projectimg2 from "../assets/babylilfloki-logo.png"
import projectimg3 from "../assets/ecd-logo.png"
import projectimg4 from "../assets/sgts-logo.png"
import projectimg5 from "../assets/yasha-logo.png"
import projectimg6 from "../assets/stoned-logo.png"

export default defineComponent({
    name: "Launchpool",
    components: { LaunchpadLaunchpoolButton, LiquiditySearchBox, LiquidityPoolDropdown, LaunchpoolProjects },
    setup() {
        const projectsArr = ref<LaunchpoolProject[]>([
            {
                img: projectimg1,
                alt: "zeus",
                name: "Zeus",
                apy: "17.6",
                status: "In progress",
                progress: 60,
                participants: 2134,
                rewards: "1,400,000.00 PADD",
                staked: "5,128,965.3813"
            },
            {
                img: projectimg2,
                alt: "babylilfloki",
                name: "Babylilfloki",
                apy: "17.6",
                status: "In progress",
                progress: 60,
                participants: 2134,
                rewards: "1,400,000.00 PADD",
                staked: "5,128,965.3813"
            },
            {
                img: projectimg3,
                alt: "ecd",
                name: "ecd",
                apy: "17.6",
                status: "Completed",
                progress: 60,
                participants: 2134,
                rewards: "1,400,000.00 PADD",
                staked: "5,128,965.3813"
            },
            {
                img: projectimg4,
                alt: "sgts",
                name: "sgts",
                apy: "17.6",
                status: "In progress",
                progress: 60,
                participants: 2134,
                rewards: "1,400,000.00 PADD",
                staked: "5,128,965.3813"
            },
            {
                img: projectimg5,
                alt: "yasha",
                name: "yasha",
                apy: "17.6",
                status: "Completed",
                progress: 60,
                participants: 2134,
                rewards: "1,400,000.00 PADD",
                staked: "5,128,965.3813"
            },
            {
                img: projectimg6,
                alt: "stoned",
                name: "stoned",
                apy: "17.6",
                status: "In progress",
                progress: 60,
                participants: 2134,
                rewards: "1,400,000.00 PADD",
                staked: "5,128,965.3813"
            },
        ])
        return { projectsArr }
    },
})
</script>
