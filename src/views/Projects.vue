<template>
    <div>
        <div v-show="activeTab == 'launchpad'">
            <Launchpad />
        </div>
        <div v-show="activeTab == 'launchpool'">
            <Launchpool />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Launchpad from "@/components/Launchpad.vue"
import Launchpool from "../components/Launchpool.vue"
import { useLaunchStore } from '@/stores/launch'
import { storeToRefs } from 'pinia'

export default defineComponent({
    name: "Projects",
    components: { Launchpad, Launchpool },
    setup() {
        const launch = useLaunchStore()
        const { activeTab } = storeToRefs(launch)
        return { activeTab }
    },
})
</script>
