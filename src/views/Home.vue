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
  </main>
</template>

<script lang="ts">
import TotalBalance from "../components/TotalBalance.vue";
import TotalEarnings from "../components/TotalEarnings.vue";

export default {
  name: "Home",
  components: { TotalBalance, TotalEarnings }
}
</script>
