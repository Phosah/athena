<template>
    <div class="w-56 px-8 py-8 bg-brand-gray-1">
        <div class="flex items-center space-x-3 mb-16">
            <img src="../assets/logo.svg" alt="Logo" />
            <p class="text-2xl font-semibold">Athena</p>
        </div>
        <div class="text-brand-gray-2">
            <div>
                <router-link @click="isActive = 'dashboard'" to="/">
                    <div
                        :class="isActive === 'dashboard' ? 'font-test-founders-semibold text-white' : ''"
                        class="flex items-center space-x-3 mb-8"
                    >
                        <img src="../assets/dashboard-icon.svg" alt="Dashboard icon" />
                        <p class>Dashboard</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link @click="isActive = 'exchange'" to="/exchange">
                    <div
                        :class="isActive === 'exchange' ? 'font-test-founders-semibold text-white' : ''"
                        class="flex items-center space-x-3 mb-8"
                    >
                        <img src="../assets/exchange-icon.svg" alt="Dashboard icon" />
                        <p>Exchange</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link @click="isActive = 'liquiditypool'" to="/liquiditypool">
                    <div
                        :class="isActive === 'liquiditypool' ? 'font-test-founders-semibold text-white' : ''"
                        class="flex items-center space-x-3 mb-8"
                    >
                        <img src="../assets/liquidity-pool-icon.svg" alt="Dashboard icon" />
                        <p>Liquidity Pool</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link @click="isActive = 'farm'" to="/farm">
                    <div
                        :class="isActive === 'farm' ? 'font-test-founders-semibold text-white' : ''"
                        class="flex items-center space-x-3 mb-8"
                    >
                        <img src="../assets/farm-icon.svg" alt="Dashboard icon" />
                        <p>Farm</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link @click="isActive = 'projects'" to="/projects">
                    <div
                        :class="isActive === 'projects' ? 'font-test-founders-semibold text-white' : ''"
                        class="flex items-center space-x-3 mb-8"
                    >
                        <img src="../assets/projects-icon.svg" alt="Dashboard icon" />
                        <p>Projects</p>
                    </div>
                </router-link>
            </div>
            <div>
                <router-link @click="isActive = 'trade'" to="/trade">
                    <div
                        :class="isActive === 'trade' ? 'font-test-founders-semibold text-white' : ''"
                        class="flex items-center space-x-3 mb-8"
                    >
                        <img src="../assets/projects-icon.svg" alt="Dashboard icon" />
                        <p>Trade</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const isActive = ref('')
        return { isActive }
    },
})
</script>
