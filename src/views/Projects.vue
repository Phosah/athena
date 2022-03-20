<template>
    <div>
        <div v-if="launchpad">
            <Launchpad />
        </div>
        <div v-if="launchpool">
            <Launchpool />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Launchpad from "@/components/Launchpad.vue"
import Launchpool from "../components/Launchpool.vue"

export default defineComponent({
    name: "Projects",
    components: { Launchpad, Launchpool },
    setup() {
        const launchpool = ref(true)
        const launchpad = ref(false)
        return { launchpool, launchpad }
    },
})
</script>
