<template>
    <div>
        <Invest />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Invest from "@/components/Invest.vue"
import ConfirmInvestment from "../components/ConfirmInvestment.vue"

export default defineComponent({
    name: "InvestInProject",
    components: { Invest },
    setup() {

    },
})
</script>
