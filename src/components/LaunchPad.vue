<template>
    <div>
        <div class="flex items-center justify-between mb-10">
            <div>
                <h2 class="mb-1 text-lg font-bold">Launchpad</h2>
                <p>Get whitelist priviledges on pre-sales of top verified web3 projects</p>
            </div>
            <LaunchpadLaunchPoolButton />
        </div>
        <div class="flex items-center mb-16 divide-x-2 divide-white divide-opacity-10">
            <div class="flex-1">
                <p class="mb-1 text-brand-gray-2">Current Funds Locked</p>
                <h2 class="text-2xl font-bold">$2,000,000,000</h2>
            </div>
            <div class="flex-1 flex items-center justify-center">
                <div>
                    <p class="mb-1 text-brand-gray-2">Raised Capital</p>
                    <h2 class="text-2xl font-bold">$2,000,000,000</h2>
                </div>
            </div>
            <div class="flex-1 flex items-center justify-center">
                <div>
                    <p class="mb-1 text-brand-gray-2">Projects Launched</p>
                    <h2 class="text-2xl font-bold">56</h2>
                </div>
            </div>
            <div class="flex-1 flex items-center justify-end">
                <div>
                    <p class="mb-1 text-brand-gray-2">All-time Uniques Participants</p>
                    <h2 class="text-2xl font-bold">3456</h2>
                </div>
            </div>
        </div>
        <div class="flex items-center space-x-6 mb-12">
            <div class="w-1/3">
                <img class="w-full" src="../assets/cryptoverse.png" alt="Cryptoverse" />
            </div>
            <div class="w-2/3 text-sm">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-2xl font-bold">Cryptoverse</h2>
                    <div class="p-2 bg-[#FEEDEE] text-[#F1352C] rounded-md">Coming soon</div>
                </div>
                <p class="mb-6 text-brand-gray-2">A blockchain Fan Token for the Aplhas</p>
                <div class="mb-12">
                    <div class="w-1/2 flex items-center mb-4">
                        <p class="flex-1 text-brand-gray-2">Tokens Offered</p>
                        <h4 class="flex-1 font-semibold">4,000,000.00 CVR</h4>
                    </div>
                    <div class="w-1/2 flex items-center mb-6">
                        <p class="flex-1 text-brand-gray-2">Sale Price</p>
                        <h4 class="flex-1 font-semibold">1 ALPINE = 0.006 CVR</h4>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <p class="text-brand-gray-2">Time Letf till you can invest</p>
                    <h4>
                        <span class="font-bold text-xl">01</span> Days
                        <span class="font-bold text-xl">15</span> Hours
                        <span class="font-bold text-xl">58</span> Mins
                    </h4>
                </div>
            </div>
        </div>
        <div class="flex items-center space-x-6 mb-8">
            <div class="w-1/3">
                <img class="w-full" src="../assets/coin98.png" alt="Cryptoverse" />
            </div>
            <div class="w-2/3 text-sm">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-2xl font-bold">Coin98</h2>
                    <div class="p-2 bg-[#FEF8ED] text-[#F19C2C] rounded-md">In Progress</div>
                </div>
                <p class="mb-6 text-brand-gray-2">A blockchain Fan Token for the Aplhas</p>
                <div class="mb-12">
                    <div class="flex items-center mb-4">
                        <p class="flex-1 text-brand-gray-2">Tokens Offered</p>
                        <h4 class="flex-1 font-semibold">4,000,000.00 CVR</h4>
                        <p class="flex-1 text-brand-gray-2">Participants</p>
                        <h4 class="flex-1 font-semibold">126,924</h4>
                    </div>
                    <div class="flex items-center mb-6">
                        <p class="flex-1 text-brand-gray-2">Sale Price</p>
                        <h4 class="flex-1 font-semibold">1 C98 = 0.006 ATN</h4>
                        <p class="flex-1 text-brand-gray-2">Total Invested</p>
                        <h4 class="flex-1 font-semibold">50,898 ATN</h4>
                    </div>
                </div>
                <div>
                    <p class="text-brand-gray-2 mb-2">Sales Progress</p>
                    <div class="w-full h-2 bg-brand-gray-5 rounded-full">
                        <div
                            class="h-2 w-1/2 bg-gradient-to-tr from-brand-blue-7 to-brand-blue-8 rounded-full"
                        ></div>
                    </div>
                    <div class="flex items-center justify-between mt-2">
                        <p>0 ATN</p>
                        <p>50,000 ATN</p>
                        <p>100,000 ATN</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center my-6">
            <p class="inline-block text-center capitalize border-b border-white">View older sales</p>
        </div>
        <div class="mb-12 p-12 bg-gradient-to-tr from-brand-blue-7 to-brand-blue-8 rounded-2xl">
            <div class="flex mb-8">
                <img src="../assets/launch-img-1.png" alt="Launch photo" />
                <img
                    class="transform -translate-x-4"
                    src="../assets/launch-img-2.png"
                    alt="Launch photo"
                />
                <img
                    class="transform -translate-x-7"
                    src="../assets/launch-img-3.png"
                    alt="Launch photo"
                />
                <img
                    class="transform -translate-x-9"
                    src="../assets/launch-img-4.png"
                    alt="Launch photo"
                />
                <img
                    class="transform -translate-x-12"
                    src="../assets/launch-img-5.png"
                    alt="Launch photo"
                />
            </div>
            <div class="text-brand-gray-1">
                <h1 class="mb-2 text-3xl font-bold">Launch the next big project Today</h1>
                <div class="flex items-center">
                    <p
                        class="flex-1"
                    >Since launching in 2020, over 3,000,000 people have used Vloc to manage their wallet and avoid unneccessary charges</p>
                    <div class="flex-1 flex justify-end">
                        <button class="px-12 py-4 bg-brand-gray-1 text-white rounded-xl">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LaunchpadLaunchpoolButton from '../components/LaunchpadLaunchpoolButton.vue'

export default defineComponent({
    name: "Launchpad",
    setup() {
    },
    components: { LaunchpadLaunchpoolButton }
})
</script>
