<template>
    <div class="my-20">
        <div
            class="max-w-xl mx-auto px-10 py-14 bg-brand-black-2 rounded-2xl border-2 border-brand-blue-5"
        >
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-2xl font-semibold">Connect Wallet</h2>
                <div
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green-3 bg-opacity-10"
                >
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div class="flex items-center space-x-3 mb-8 font-semibold">
                <input type="checkbox" name="terms" id="terms" />
                <label for="terms">
                    I have read, understand, and agree to the
                    <span
                        class="text-brand-blue-3"
                    >Terms of Service.</span>
                </label>
            </div>
            <Wallet :wallets="walletsArr" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type WalletObj from '@/types/Wallet'
import Wallet from '../components/Wallet.vue'
import metamaskLogo from "../assets/meta-mask-logo.png"
import bnbLogo from "../assets/bnb-logo.png"
import portisLogo from "../assets/portis-logo.png"
import walletconnectLogo from "../assets/walletconnect-logo.png"
import torusLogo from "../assets/torus-logo.png"
import fortmaticLogo from "../assets/fortmatic-logo.png"

export default defineComponent({
    name: "ConnectWallet",
    components: { Wallet },
    setup() {
        const walletsArr = ref<WalletObj[]>([
            {
                img: metamaskLogo,
                alt: "Metamask",
                name: "Meta mask"
            },
            {
                img: bnbLogo,
                alt: "bnb",
                name: "BNB"
            },
            {
                img: portisLogo,
                alt: "portis",
                name: "Portis"
            },
            {
                img: walletconnectLogo,
                alt: "walletconnect",
                name: "Walletconnect"
            },
            {
                img: torusLogo,
                alt: "Torus",
                name: "Torus"
            },
            {
                img: fortmaticLogo,
                alt: "Fortmatic",
                name: "Fortmatic"
            },
        ]);
        return { walletsArr }
    },
})
</script>
