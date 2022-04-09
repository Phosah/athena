<template>
    <div class="my-10">
        <div
            class="max-w-xl mx-auto p-10 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5"
        >
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-sora font-bold">Swap</h2>
                <div class="flex items-center space-x-2">
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <div>
                        <img src="../assets/information-icon.svg" alt="Info icon" />
                    </div>
                </div>
            </div>
            <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-md">
                <div class="flex items-center justify-between mb-4">
                    <p>Send</p>
                    <p>Available : 50.43 BNB</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-3xl">50.43</p>
                    <div class="flex items-center space-x-4">
                        <p class="text-brand-blue-3 font-test-founders-semibold">MAX</p>
                        <div
                            class="flex items-center space-x-2 p-2 border border-brand-yellow-2 bg-brand-yellow-2 bg-opacity-10 rounded-full"
                        >
                            <img src="../assets/small-bnb-logo.png" alt="bnb logo" />
                            <p class="font-test-founders-semibold">BNB</p>
                            <img src="../assets/dropdown-arrow-icon.svg" alt="Arrow icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-md">
                <div class="mb-4">
                    <p>Receive</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-3xl">25,099</p>
                    <div
                        class="flex items-center space-x-2 p-2 border border-brand-green-4 bg-brand-green-4 bg-opacity-10 rounded-full"
                    >
                        <img src="../assets/small-usdt-logo.png" alt="usdt logo" />
                        <p class="font-test-founders-semibold">USDT</p>
                        <img src="../assets/dropdown-arrow-icon.svg" alt="Arrow icon" />
                    </div>
                </div>
            </div>
            <div>
                <h3 class="mb-3 text-base font-test-founders-bold">Summary</h3>
                <div class="mb-1 flex items-center justify-between">
                    <p class>Spillage:</p>
                    <div class="flex items-center space-x-1">
                        <h2 class="text-lg font-test-founders-bold">0% SPILLAGE</h2>
                        <img src="../assets/edit-icon.svg" alt="Edit icon" />
                    </div>
                </div>
                <div class="mb-1 flex items-center justify-between">
                    <p class>Price:</p>
                    <h2 class="text-lg font-test-founders-bold">1 BNB = 459.98 USDT</h2>
                </div>
                <div class="mb-1 flex items-center justify-between">
                    <p class>Fee (0.2%):</p>
                    <h2 class="text-lg font-test-founders-bold">0.0 BNB</h2>
                </div>
            </div>
            <button
                class="mt-8 w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-sora font-bold rounded-md"
            >
                <router-link to="/swapsuccessful">Swap</router-link>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Swap",
    components: {},
    setup() {

        return {}
    },
})
</script>
