<template>
    <div class="my-10">
        <div class="max-w-xl mx-auto px-10 pt-4 pb-8 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5">
            <div class="flex justify-end mb-4">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <h2 class="mb-6 text-2xl font-sora font-bold">Invest</h2>
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center">
                    <div class="font-semibold text-brand-gray-2">Max Investment Amount</div>
                    <img class="ml-2" src="../assets/info-icon.svg" alt="info icon" />
                </div>
                <h2 class="text-lg font-test-founders-bold">2000 ATN</h2>
            </div>
            <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-2xl">
                <div class="flex items-center justify-between mb-4">
                    <p>Amount</p>
                    <p>ATN Balance : 5046 ATN</p>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-3xl">50.43</p>
                    <div class="flex items-center space-x-4">
                        <p class="text-brand-blue-3 font-test-founders-semibold">ALLOWED MAX</p>
                        <div
                            class="flex items-center space-x-2 p-2 border border-brand-blue-3 bg-brand-blue-3 bg-opacity-10 rounded-full">
                            <img src="../assets/small-atn-logo.png" alt="bnb logo" />
                            <p class="font-test-founders-semibold">ATN</p>
                            <img src="../assets/dropdown-arrow-icon.svg" alt="Arrow icon" />
                        </div>
                    </div>
                </div>
            </div>
            <button
                class="mt-8 w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-sora font-bold rounded-md">
                <router-link to="/confirminvestment">Invest Now</router-link>
            </button>
        </div>  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Invest",
    components: {},
    setup() {

        return {}
    },
})
</script>
