<template>
    <div class="flex items-center justify-between space-x-4 mb-14">
        <p class="text-4xl font-test-founders-semibold">{{ $router.name }}</p>
        <div class="flex items-center space-x-8">
            <SearchBox />
            <NotificationBox />
            <div class="flex items-center space-x-3">
                <img src="../assets/profile-img.png" alt="Profile photo" />
                <div>
                    <div class="flex items-center space-x-3">
                        <p class="font-test-founders-semibold">Account 1</p>
                        <img src="../assets/dropdown-icon.svg" alt="Dropdown icon" />
                    </div>
                    <p class="text-xs">0xA22C......2F876Da</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import SearchBox from './SearchBox.vue'
import NotificationBox from './NotificationBox.vue'

export default defineComponent({
    components: { SearchBox, NotificationBox },
    setup() {

        const routeName = computed(() => {
            return router.name
        })
        return { routeName }
    },
})
</script>
