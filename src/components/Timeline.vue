<template>
    <div>
        <h2 class="mb-6 font-bold text-xl">Tokenomics</h2>
        <div class="mb-4">
            <div class="mb-3 flex items-center space-x-2">
                <img class="w-10 h-10" src="../assets/timeline-no-1.png" alt="No 1" />
                <div class="flex items-center space-x-2">
                    <h3 class="font-test-founders-medium">ATN Holding Calculation Period</h3>
                    <img src="../assets/information-icon.svg" alt="Info icon" />
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-10 flex justify-center">
                    <div class="h-10 w-0.5 bg-brand-gray-2"></div>
                </div>
                <div class="text-brand-gray-2 text-sm">03-03-2022 | 2:00 PM</div>
            </div>
            <div></div>
        </div>
        <div class="mb-4">
            <div class="mb-3 flex items-center space-x-2">
                <img class="w-10 h-10" src="../assets/timeline-no-2.png" alt="No 1" />
                <div class="flex items-center space-x-2">
                    <h3 class="font-test-founders-medium">ATN Holding Calculation Period</h3>
                    <img src="../assets/information-icon.svg" alt="Info icon" />
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-10 flex justify-center">
                    <div class="h-10 w-0.5 bg-brand-gray-2"></div>
                </div>
                <div class="text-brand-gray-2 text-sm">03-03-2022 | 2:00 PM</div>
            </div>
            <div></div>
        </div>
        <div class="mb-4">
            <div class="mb-3 flex items-center space-x-2">
                <img class="w-10 h-10" src="../assets/timeline-no-3.png" alt="No 1" />
                <div class="flex items-center space-x-2">
                    <h3 class="font-test-founders-medium">ATN Holding Calculation Period</h3>
                    <img src="../assets/information-icon.svg" alt="Info icon" />
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-10 flex justify-center">
                    <div class="h-10 w-0.5 bg-brand-gray-2"></div>
                </div>
                <div class="text-brand-gray-2 text-sm">03-03-2022 | 2:00 PM</div>
            </div>
            <div></div>
        </div>
        <div class="mb-4">
            <div class="mb-3 flex items-center space-x-2">
                <img class="w-10 h-10" src="../assets/timeline-no-4.png" alt="No 1" />
                <div class="flex items-center space-x-2">
                    <h3 class="font-test-founders-medium">ATN Holding Calculation Period</h3>
                    <img src="../assets/information-icon.svg" alt="Info icon" />
                </div>
            </div>
            <div class="flex space-x-4">
                <div class="w-10 flex justify-center">
                    <!-- <div class="h-10 w-0.5 bg-brand-gray-2"></div> -->
                </div>
                <div class="text-brand-gray-2 text-sm">03-03-2022 | 2:00 PM</div>
            </div>
            <div></div>
        </div>
        <button
            class="mt-8 w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-test-founders-semibold rounded-md"
        >
            <router-link to="/investinproject">Invest in Project</router-link>
        </button>
        <div class="my-12">
            <h2 class="mb-6 text-xl font-test-founders-semibold">Social Channels</h2>
            <div class="flex items-center space-x-5">
                <img src="../assets/twitter-icon.svg" alt="Twitter" />
                <img src="../assets/medium-icon.svg" alt="Medium" />
                <img src="../assets/telegram-icon.svg" alt="Telegram" />
                <img src="../assets/discord-icon.svg" alt="Discord" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Timeline",
    setup() {

    },
})
</script>
