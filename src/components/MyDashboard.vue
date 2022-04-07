<template>
    <main>
        <div class="flex space-x-20 mt-10">
            <div class="w-8/12">
                <TotalBalance />
            </div>
            <div class="w-4/12">
                <TotalEarnings />
            </div>
        </div>
        <News :news="newsArr" />
        <div class="flex space-x-6">
            <div class="flex-1">
                <TopGainers :assets="topGainersArr" />
            </div>
            <div class="flex-1">
                <TopLosers :assets="topLoosersArr" />
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TotalBalance from "../components/TotalBalance.vue";
import TotalEarnings from "../components/TotalEarnings.vue";
import News from "../components/News.vue";
import type NewsObj from "../types/News"
import news1 from "../assets/news-1.png"
import news2 from "../assets/news-2.png"
import TopGainers from "../components/TopGainers.vue"
import TopLosers from "../components/TopLosers.vue"
import type Analysis from "@/types/Analysis";
import shibaLogo from "../assets/shiba-inu-logo.png"
import btcLogo from "../assets/btc-logo.png"
import ethLogo from "../assets/eth-logo.png"
import roseLogo from "../assets/rose-logo.png"
import usdtLogo from "../assets/usdt-logo.png"

export default defineComponent({
    name: "MyDashboard",
    components: { TotalBalance, TotalEarnings, News, TopGainers, TopLosers },

    setup() {
        const newsArr = ref<NewsObj[]>([
            {
                content: "Business insentives from Minister of tech that shows the growth in the...",
                time: "1hr",
                img: news1,
                alt: "News image"
            },
            {
                content: "The whales have formed strong hold on the solana chain and this has greatly improved staking...",
                time: "1hr",
                img: news2,
                alt: "News image"
            },
            {
                content: "With the recent outburst of Russia in Ukrain, there has been a mssive downtime on the ...",
                time: "1hr",
                img: news1,
                alt: "News image"
            },
        ])

        const topGainersArr = ref<Analysis[]>([
            {
                assetImg: shibaLogo,
                assetAlt: "Shiba Inu",
                assetName: "Shiba",
                cryptoValue: "3217267.99",
                cashValue: "$2,876.00",
                percentIncrease: "7.9%"
            },
            {
                assetImg: ethLogo,
                assetAlt: "Eth",
                assetName: "ETH",
                cryptoValue: "2.129",
                cashValue: "$2,045.98",
                percentIncrease: "7.9%"
            },
            {
                assetImg: btcLogo,
                assetAlt: "btc",
                assetName: "BTC",
                cryptoValue: "0.0123",
                cashValue: "$1,908.45",
                percentIncrease: "7.9%"
            },
            {
                assetImg: usdtLogo,
                assetAlt: "USDT",
                assetName: "USDT",
                cryptoValue: "1,495",
                cashValue: "$1,495",
                percentIncrease: "7.9%"
            },
            {
                assetImg: roseLogo,
                assetAlt: "Rose",
                assetName: "ROSE",
                cryptoValue: "15567.89",
                cashValue: "$567.57",
                percentIncrease: "7.9%"
            },
        ])
        const topLoosersArr = ref<Analysis[]>([
            {
                assetImg: shibaLogo,
                assetAlt: "Shiba Inu",
                assetName: "Shiba",
                cryptoValue: "3217267.99",
                cashValue: "$2,876.00",
                percentIncrease: "7.9%"
            },
            {
                assetImg: ethLogo,
                assetAlt: "Eth",
                assetName: "ETH",
                cryptoValue: "2.129",
                cashValue: "$2,045.98",
                percentIncrease: "7.9%"
            },
            {
                assetImg: btcLogo,
                assetAlt: "btc",
                assetName: "BTC",
                cryptoValue: "0.0123",
                cashValue: "$1,908.45",
                percentIncrease: "7.9%"
            },
            {
                assetImg: usdtLogo,
                assetAlt: "USDT",
                assetName: "USDT",
                cryptoValue: "1,495",
                cashValue: "$1,495",
                percentIncrease: "7.9%"
            },
            {
                assetImg: roseLogo,
                assetAlt: "Rose",
                assetName: "ROSE",
                cryptoValue: "15567.89",
                cashValue: "$567.57",
                percentIncrease: "7.9%"
            },
        ])
        return { newsArr, topGainersArr, topLoosersArr }
    }
})
</script>
