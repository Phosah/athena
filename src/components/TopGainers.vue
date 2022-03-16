<template>
    <div>
        <h3 class="text-xl font-semibold mb-3">My Top Gainers</h3>
        <div class="px-4 border border-brand-gray-4 border-opacity-10 rounded-md">
            <div class="flex items-center py-6 border-b border-brand-gray-4 border-opacity-10">
                <div class="flex-1">Assets</div>
                <div class="flex-1">Wallet</div>
                <div class="flex-1">24h</div>
                <div class="flex-1">Action</div>
            </div>
            <div v-for="(item, ix) in assets" :key="ix">
                <div class="flex items-center py-6">
                    <div class="flex-1 flex items-center space-x-3">
                        <img :src="item.assetImg" :alt="item.assetAlt" />
                        <p class="font-semibold">{{ item.assetName }}</p>
                    </div>
                    <div class="flex-1">
                        <p class="font-semibold">{{ item.cryptoValue }}</p>
                        <p class="text-sm text-brand-gray-2">{{ item.cashValue }}</p>
                    </div>
                    <div class="flex-1 flex items-center space-x-2 text-brand-green-2">
                        <img src="../assets/up-angle.svg" alt="Upvote icon" />
                        <p class="font-semibold">{{ item.percentIncrease }}</p>
                    </div>
                    <div class="flex-1">
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type Analysis from "../types/Analysis"

export default defineComponent({
    name: "TopGainers",
    props: {
        assets: {
            type: Array as PropType<Analysis[]>,
            required: true
        },
    },
    setup(props) {

    },
})
</script>
