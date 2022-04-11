<template>
    <div>
        <div
            class="flex items-center justify-between space-x-2 w-80 h-14 p-2 bg-brand-gray-1 text-sm rounded-full"
        >
            <div
                @click="launch.selectTab('launchpad')"
                :class="launch.activeTab == 'launchpad' ? 'h-10 bg-brand-gray-5 text-white font-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Launchpad</button>
            </div>
            <div
                @click="launch.selectTab('launchpool')"
                :class="launch.activeTab == 'launchpool' ? 'h-10 bg-brand-gray-5 text-white font-bold rounded-full' : 'text-brand-gray-3'"
                class="flex-1 flex justify-center"
            >
                <button>Launchpool</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useLaunchStore } from '@/stores/launch'

export default defineComponent({
    name: "LaunchpadLaunchpoolButton",
    setup(props, { emit }) {
        const launch = useLaunchStore()
        return { launch }
    },
})
</script>
