<template>
    <div class="mt-12">
        <div class="py-4 px-8 border border-brand-gray-4 border-opacity-10 rounded-sm">
            <div class="grid grid-cols-3 gap-4 gap-y-14">
                <div class="mx-auto text-center">
                    <p class="mb-1 text-brand-gray-2 text-sm font-test-founders-medium">Market Cap</p>
                    <h3 class="font-test-founders-bold text-xl">$2,000,000,000</h3>
                </div>
                <div class="mx-auto text-center">
                    <p class="mb-1 text-brand-gray-2 text-sm font-test-founders-medium">ATN Price</p>
                    <h3 class="font-test-founders-bold text-xl">$0.2456</h3>
                </div>
                <div class="mx-auto text-center">
                    <div class="flex items-center space-x-1">
                        <p
                            class="mb-1 text-brand-gray-2 text-sm font-test-founders-medium"
                        >sATN Price</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <h3 class="font-test-founders-bold text-xl">$2,3456.00</h3>
                </div>
                <div class="mx-auto text-center">
                    <p
                        class="mb-1 text-brand-gray-2 text-sm font-test-founders-medium"
                    >Circulation Supply (total)</p>
                    <h3 class="font-test-founders-bold text-xl">12345677 / 87645</h3>
                </div>
                <div class="mx-auto text-center">
                    <p
                        class="mb-1 text-brand-gray-2 text-sm font-test-founders-medium"
                    >Backing per ATN</p>
                    <h3 class="font-test-founders-bold text-xl">$43.3</h3>
                </div>
                <div class="mx-auto text-center">
                    <div class="flex items-center space-x-1">
                        <p
                            class="mb-1 text-brand-gray-2 text-sm font-test-founders-medium"
                        >Current Index</p>
                        <img src="../assets/info-icon.svg" alt="Info icon" />
                    </div>
                    <h3 class="font-test-founders-bold text-xl">45.3 DePo</h3>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-12 grid grid-cols-2 gap-8">
        <TotalValueDeposited />
        <MarketValueOfTreasuryAssets />
        <RiskFreeValueOfTreasuryAssets />
        <ProtocolOwnedLiquidity />
        <AtnStaked />
        <RunwayAvailable />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TotalValueDeposited from './TotalValueDeposited.vue'
import MarketValueOfTreasuryAssets from './MarketValueOfTreasuryAssets.vue'
import RiskFreeValueOfTreasuryAssets from './RiskFreeValueOfTreasuryAssets.vue'
import ProtocolOwnedLiquidity from './ProtocolOwnedLiquidity.vue'
import AtnStaked from './AtnStaked.vue'
import RunwayAvailable from './RunwayAvailable.vue'

export default defineComponent({
    name: "AthenaOverview",
    setup() {
    },
    components: { TotalValueDeposited, MarketValueOfTreasuryAssets, RiskFreeValueOfTreasuryAssets, ProtocolOwnedLiquidity, AtnStaked, RunwayAvailable }
})
</script>
