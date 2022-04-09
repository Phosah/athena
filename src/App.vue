<template>
  <div
    class="font-test-founders-regular flex max-w-[2000px] mx-auto bg-brand-black-1 text-white min-h-screen"
  >
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
  font-weight: 300;
  src: local("Test Founders Grotesk"),
    url("./fonts/Test-Founders-Grotesk-Light.otf") format("OpenType");
}
@font-face {
  font-family: "Test Founders Grotesk";
  font-weight: 400;
  src: local("Test Founders Grotesk"),
    url("./fonts/Test-Founders-Grotesk-Regular.otf") format("OpenType");
}
@font-face {
  font-family: "Test Founders Grotesk";
  font-weight: 500;
  src: local("Test Founders Grotesk"),
    url("./fonts/Test-Founders-Grotesk-Medium.otf") format("OpenType");
}
@font-face {
  font-family: "Test Founders Grotesk";
  font-weight: 600;
  src: local("Test Founders Grotesk"),
    url("./fonts/Test-Founders-Grotesk-Semibold.otf") format("OpenType");
}
@font-face {
  font-family: "Test Founders Grotesk";
  font-weight: 700;
  src: local("Test Founders Grotesk"),
    url("./fonts/Test-Founders-Grotesk-Bold.otf") format("OpenType");
}

.font-test-founders-light {
  font-family: "Test Founders Grotesk", sans-serif;
  font-weight: 300;
}
.font-test-founders-regular {
  font-family: "Test Founders Grotesk", sans-serif;
  font-weight: 400;
}
.font-test-founders-medium {
  font-family: "Test Founders Grotesk", sans-serif;
  font-weight: 500;
}
.font-test-founders-semibold {
  font-family: "Test Founders Grotesk", sans-serif;
  font-weight: 600;
}
.font-test-founders-bold {
  font-family: "Test Founders Grotesk", sans-serif;
  font-weight: 700;
}
</style>