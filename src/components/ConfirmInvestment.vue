<template>
    <div class="my-10">
        <div
            class="max-w-xl mx-auto px-10 pt-6 pb-12 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5"
        >
            <div class="flex justify-end mb-4">
                <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
            <div class="flex mb-6">
                <img src="../assets/risk-warning-icon.png" alt="Risk warning" />
            </div>
            <div class>
                <div class="mb-12">
                    <h2 class="mb-6 text-xl font-bold">Confirm Investment</h2>
                    <p
                        class="text-sm"
                    >You have requested to invest 1500 ATN. Once you confirm investment, your ATN would be locked until the final token distribution. The final amount of the CRV token you would get might be less than the invested amount and your balance along side your new tokens would be sent back to your wallet. To get more insight on how this works, click here to Learn more</p>
                </div>
                <div class="flex items-center space-x-6">
                    <button class="flex-1 py-4 bg-[#2F2F36] font-bold rounded-md">Cancel</button>
                    <button
                        class="flex-1 py-4 text-brand-blue-6 bg-gradient-to-tr from-brand-blue-2 to-brand-blue-3 font-bold rounded-md"
                    >Confirm Investment</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ConfirmInvestment",
    components: {},
    setup() {

        return {}
    },
})
</script>
