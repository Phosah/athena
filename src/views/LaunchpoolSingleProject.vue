<template>
    <div>
        <div class="flex items-center justify-between mb-10">
            <div class="flex items-center space-x-3">
                <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
                <h2 class="mb-1 text-lg font-bold">Launchpool</h2>
            </div>
            <div class="flex items-center space-x-6">
                <div>
                    <img src="../assets/website-icon.svg" alt="Website icon" />
                </div>
                <div>
                    <img src="../assets/newspaper-icon.svg" alt="Newspaper icon" />
                </div>
                <div>
                    <img src="../assets/clipboard-icon.svg" alt="Clipboard icon" />
                </div>
                <div>
                    <img src="../assets/lightbulb-icon.svg" alt="Lightbulb icon" />
                </div>
                <div>
                    <img src="../assets/help-icon.svg" alt="Help icon" />
                </div>
            </div>
        </div>
        <div class="flex space-x-6 justify-between mb-6">
            <div class="flex-1 text-xs">
                <p class="text-brand-gray-2 mb-2">
                    Reward Progress
                    <span>60%</span>
                </p>
                <div class="w-10/12 h-3 bg-brand-gray-5 rounded-full">
                    <div
                        class="h-3 w-1/2 bg-gradient-to-tr from-brand-blue-7 to-brand-blue-8 rounded-full"
                    ></div>
                </div>
            </div>
            <div class="flex-1">
                <img class="mx-auto" src="../assets/yasha-img.png" alt="yasha" />
            </div>
            <div class="flex-1 flex justify-end space-x-2">
                <div class="flex items-baseline">
                    <h2 class="text-sm text-brand-gray-2">Farming Ends In:</h2>
                    <h4 class="text-xs text-brand-gray-2">
                        <span class="font-bold text-lg text-white">01</span> Days
                        <span class="font-bold text-lg text-white">15</span> Hours
                        <span class="font-bold text-lg text-white">58</span> Mins
                    </h4>
                </div>
            </div>
        </div>
        <div class="mb-12 text-center">
            <h2 class="mb-1 text-lg font-bold">Yasha DAO</h2>
            <p>Bringing a community driven incubator and launchpad to the space</p>
        </div>
        <div class="flex items-center mb-16 divide-x-2 divide-white divide-opacity-10">
            <div class="flex-1">
                <p class="mb-1 text-brand-gray-2">Total Pool Reward</p>
                <h2 class="text-2xl font-bold">4m YASHA</h2>
            </div>
            <div class="flex-1 flex items-center justify-center">
                <div>
                    <p class="mb-1 text-brand-gray-2">Farming Period</p>
                    <h2 class="text-2xl font-bold">30 days</h2>
                </div>
            </div>
            <div class="flex-1 flex items-center justify-center">
                <div>
                    <p class="mb-1 text-brand-gray-2">Todays Rewards</p>
                    <h2 class="text-2xl font-bold">6546.00 YASHA</h2>
                </div>
            </div>
            <div class="flex-1 flex items-center justify-center">
                <div>
                    <p class="mb-1 text-brand-gray-2">APY</p>
                    <h2 class="text-2xl font-bold">3.65%</h2>
                </div>
            </div>
            <div class="flex-1 flex items-center justify-end">
                <div>
                    <p class="mb-1 text-brand-gray-2">Todays Staked</p>
                    <h2 class="text-2xl font-bold">4.56m ATN</h2>
                </div>
            </div>
        </div>
        <div class="my-10 flex items-center space-x-12 justify-between">
            <div class="flex-1 px-6 py-8 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5">
                <h2 class="mb-6 text-2xl font-semibold">Stake</h2>
                <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-md">
                    <div class="flex items-center justify-between mb-4">
                        <p>Amount</p>
                        <p>Available : 50,043 ATN</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-3xl">10,000</p>
                        <div class="flex items-center space-x-4">
                            <p class="text-brand-blue-3 font-semibold">ALLOWED MAX</p>
                            <div
                                class="flex items-center space-x-2 p-2 border border-brand-blue-3 bg-brand-blue-3 bg-opacity-10 rounded-full"
                            >
                                <img src="../assets/small-atn-logo.png" alt="atn logo" />
                                <p class="font-semibold">ATN</p>
                                <img src="../assets/dropdown-arrow-icon.svg" alt="Arrow icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="w-full py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-bold rounded-md"
                >Stake</button>
            </div>
            <div class="flex-1 px-6 py-8 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5">
                <h2 class="mb-6 text-2xl font-semibold">My Rewards</h2>
                <div class="mb-6 p-4 border border-brand-gray-4 border-opacity-10 rounded-md">
                    <div class="flex items-center justify-between mb-4">
                        <p>Amount</p>
                        <p>Earned : 5040.90 YASHA</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-3xl">5000</p>
                        <div class="flex items-center space-x-4">
                            <p class="text-brand-blue-3 font-semibold">ALLOWED MAX</p>
                            <div
                                class="flex items-center space-x-2 p-2 border border-brand-yellow-2 bg-brand-yellow-2 bg-opacity-10 rounded-full"
                            >
                                <img src="../assets/small-yasha-logo.png" alt="yasha logo" />
                                <p class="font-semibold">YASHA</p>
                                <img src="../assets/dropdown-arrow-icon.svg" alt="Arrow icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="w-full py-4 text-white border border-brand-blue-3 font-bold rounded-md"
                >Claim Reward</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "LaunchpoolSingleProject",
    setup() {

    },
})
</script>
