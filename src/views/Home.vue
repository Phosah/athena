<template>
  <main>
    <div class="border-b border-brand-gray-3 border-opacity-10">
      <div class="flex items-center space-x-8">
        <p class="border-b-4 border-[#005BEA] pb-4">My dashboard</p>
        <p class="border-transparent pb-4">Athena Overview</p>
      </div>
    </div>
    <MyDashboard />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MyDashboard from "../components/MyDashboard.vue"

export default defineComponent({
  name: "Home",
  components: { MyDashboard },

  setup() {
    return {}
  }
})
</script>
