<template>
  <main>
    <div class="border-b border-brand-gray-3 border-opacity-10">
      <div class="flex items-center space-x-8">
        <p class="border-b-4 border-[#005BEA] pb-4">My dashboard</p>
        <p class="border-transparent pb-4">Athena Overview</p>
      </div>
    </div>
    <div class="flex space-x-4 mt-10">
      <div class="w-8/12">
        <TotalBalance />
      </div>
      <div class="w-4/12">
        <TotalEarnings />
      </div>
    </div>
    <News :news="newsArr" />
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

export default defineComponent({
  name: "Home",
  components: { TotalBalance, TotalEarnings, News },

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

    return { newsArr }
  }
})
</script>
