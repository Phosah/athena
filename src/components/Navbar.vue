<template>
    <div class="flex items-center justify-between space-x-4 mb-12">
        <p class="text-2xl font-semibold">Dashboard</p>
        <div class="flex items-center space-x-8">
            <SearchBox />
            <NotificationBox />
            <div class="flex items-center space-x-3">
                <img src="../assets/profile-img.png" alt="Profile photo" />
                <div>
                    <div class="flex items-center space-x-3">
                        <p>Account 1</p>
                        <img src="../assets/dropdown-icon.svg" alt="Dropdown icon" />
                    </div>
                    <p>0xA22C......2F876Da</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchBox from './SearchBox.vue'
import NotificationBox from './NotificationBox.vue'

export default defineComponent({
    setup() {
    },
    components: { SearchBox, NotificationBox }
})
</script>
