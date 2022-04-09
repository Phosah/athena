<template>
    <div>
        <SwapInfo />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SwapInfo from '@/components/SwapInfo.vue'

export default defineComponent({
    name: "SwapSuccessful",
    components: { SwapInfo },
    setup() {

    },
})
</script>
