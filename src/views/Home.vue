<template>
  <main>
    <div class="border-b border-brand-gray-3 border-opacity-10">
      <div class="flex items-center space-x-8">
        <p
          @click="selectTab('dashboard')"
          :class="selectedTab === 'dashboard' ? 'border-[#005BEA]' : 'border-transparent'"
          class="border-b-4 pb-4 cursor-pointer"
        >My dashboard</p>
        <p
          @click="selectTab('athena')"
          :class="selectedTab === 'athena' ? 'border-[#005BEA]' : 'border-transparent'"
          class="border-b-4 pb-4 cursor-pointer"
        >Athena Overview</p>
      </div>
    </div>
    <div v-show="selectedTab === 'dashboard'">
      <MyDashboard />
    </div>
    <div v-show="selectedTab === 'athena'">
      <AthenaOverview />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MyDashboard from "../components/MyDashboard.vue"
import AthenaOverview from "../components/AthenaOverview.vue"

export default defineComponent({
  name: "Home",
  components: { MyDashboard, AthenaOverview },

  setup() {
    const selectedTab = ref("dashboard")
    const selectTab = (tab: string) => {
      selectedTab.value = tab
    }
    return { selectedTab, selectTab }
  }
})
</script>
