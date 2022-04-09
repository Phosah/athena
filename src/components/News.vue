<template>
    <div class="my-14">
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-test-founders-semibold">Todays News</h3>
            <div class="flex items-center space-x-2">
                <div class="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                    <svg
                        class="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </div>
                <div
                    class="flex items-center justify-center w-8 h-8 rounded-full bg-white opacity-25"
                >
                    <svg
                        class="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="(item, ix) in news" :key="ix">
                <div
                    class="flex items-center space-x-4 p-4 border border-brand-gray-4 border-opacity-10 rounded-md"
                >
                    <div class>
                        <p class="mb-3 font-test-founders-medium">{{ item.content }}</p>
                        <p class="text-xs text-brand-gray-2">{{ item.time }} ago</p>
                    </div>
                    <img :src="item.img" :alt="item.alt" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type News from "../types/News"

export default defineComponent({
    name: "News",
    props: {
        news: {
            type: Array as PropType<News[]>,
            required: true
        }
    },
    setup(props) {

    },
})
</script>
