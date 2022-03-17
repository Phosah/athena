<template>
    <div v-for="(wallet, ix) in wallets" :key="ix">
        <div class="flex items-center space-x-3 mb-4 p-4 bg-brand-gray-1 rounded-md">
            <img :src="wallet.img" :alt="wallet.alt" />
            <h3 class="font-semibold">{{ wallet.name }}</h3>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type Wallet from '@/types/Wallet'
import type { PropType } from 'vue'

export default defineComponent({
    name: "Wallet",
    props: {
        wallets: {
            type: Array as PropType<Wallet[]>,
            required: true,
        }
    },
    setup() {

    },
})
</script>
