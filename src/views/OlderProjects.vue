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
            <LaunchpadLaunchpoolButton />
        </div>
        <OlderProject :projects="projectsArr" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LaunchpadLaunchpoolButton from '@/components/LaunchpadLaunchpoolButton.vue'
import type LaunchpadProject from "@/types/LaunchpadProject"
import OlderProject from "@/components/OlderProject.vue"
import projectImg1 from "../assets/older-projects-img1.png"
import projectImg2 from "../assets/older-projects-img2.png"

export default defineComponent({
    name: "OlderProjects",
    components: { LaunchpadLaunchpoolButton, OlderProject },
    setup() {
        const projectsArr = ref<LaunchpadProject[]>([
            {
                img: projectImg1,
                alt: "Alpine 1",
                title: "Alpine F1",
                status: "In Progress",
                content: "A blockchain Fan Token for the Aplhas",
                participants: 2490,
                progressPercent: "50%",
                atntokens: 700
            },
            {
                img: projectImg2,
                alt: "League of Kingdoms",
                title: "Alpine F1",
                status: "Completed",
                content: "A blockchain Fan Token for the Aplhas",
                participants: 1290,
                progressPercent: "45%",
                atntokens: 400
            },
            {
                img: projectImg1,
                alt: "Alpine 1",
                title: "Alpine F1",
                status: "In Progress",
                content: "A blockchain Fan Token for the Aplhas",
                participants: 2490,
                progressPercent: "50%",
                atntokens: 700
            },
            {
                img: projectImg2,
                alt: "League of Kingdoms",
                title: "Alpine F1",
                status: "Completed",
                content: "A blockchain Fan Token for the Aplhas",
                participants: 1290,
                progressPercent: "45%",
                atntokens: 400
            },
            {
                img: projectImg1,
                alt: "Alpine 1",
                title: "Alpine F1",
                status: "In Progress",
                content: "A blockchain Fan Token for the Aplhas",
                participants: 2490,
                progressPercent: "50%",
                atntokens: 700
            },
            {
                img: projectImg2,
                alt: "League of Kingdoms",
                title: "Alpine F1",
                status: "Completed",
                content: "A blockchain Fan Token for the Aplhas",
                participants: 1290,
                progressPercent: "45%",
                atntokens: 400
            },
        ])
        return { projectsArr }
    },
})
</script>