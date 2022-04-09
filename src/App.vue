<template>
  <div class="font-test-founders-medium flex max-w-[2000px] mx-auto bg-brand-black-1 text-white">
    <div class="flex self-stretch">
      <Sidebar />
    </div>
    <div class="flex-1 px-8 py-7">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

</script>

<style>
@font-face {
  font-family: "Test Founders Grotesk";
  font-weight: 500;
  src: local("Test Founders Grotesk"), url("Test-Founders-Grotesk-Medium.otf");
}
@font-face {
  font-family: "Test Founders Grotesk";
  font-weight: 600;
  src: local("Test Founders Grotesk"), url("Test-Founders-Grotesk-Semibold.otf");
}

.font-test-founders-medium {
  font-family: "Test Founders Grotest", sans-serif;
  font-weight: 500;
}
.font-test-founders-semibold {
  font-family: "Test Founders Grotest", sans-serif;
  font-weight: 600;
}
</style>