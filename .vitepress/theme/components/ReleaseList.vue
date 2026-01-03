<script setup>
import Breadcrumb from "./Breadcrumb.vue";
import SectionBlock from "@components/landing/SectionBlock.vue";
import { data as releases } from "../../../releases/releases.data.mjs";

function cyrb128(str) {
    let h1 = 1779033703,
        h2 = 3144134277,
        h3 = 1013904242,
        h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    return (h1 ^ h2 ^ h3 ^ h4) >>> 0;
}

function mulberry32(a) {
    return function () {
        var t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function getGradientStyle(version) {
    const seed = cyrb128(version);
    const rand = mulberry32(seed);

    const angle = Math.floor(rand() * 360);

    const baseHue = Math.floor(rand() * 360);

    const h1 = baseHue;
    const h2 = (baseHue + 50 + rand() * 50) % 360;
    const h3 = (baseHue + 100 + rand() * 50) % 360;

    const s = 50 + rand() * 15;

    const l = 45 + rand() * 10;

    return {
        background: `linear-gradient(${angle}deg, hsl(${h1}, ${s}%, ${l}%), hsl(${h2}, ${s}%, ${l}%), hsl(${h3}, ${s}%, ${l}%))`,
    };
}
</script>

<template>
    <div class="container mx-auto max-w-(--vp-layout-max-width) p-6 lg:p-8">
        <Breadcrumb :items="[{ text: 'Releases' }]" />
        <SectionBlock
            icon="refresh-fill"
            tagline="Updates"
            title="Latest Releases"
            description="Latest updates and improvements for Paymenter."
            description-align="start"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <a
                v-for="release in releases"
                :key="release.url"
                :href="release.url"
                class="group relative flex flex-col card"
            >
                <div
                    class="h-36 w-full relative overflow-hidden flex items-center justify-center"
                >
                    <div
                        class="absolute inset-0 transition-all duration-500 opacity-40"
                        :style="getGradientStyle(release.version)"
                    ></div>

                    <div
                        class="absolute inset-0 bg-white/10 mix-blend-overlay opacity-20"
                    ></div>

                    <span
                        class="relative z-10 text-3xl text-medium text-(--vp-c-text-1) tracking-tighter"
                    >
                        {{ release.version }}
                    </span>
                </div>

                <div class="p-6 flex flex-col grow gap-2">
                    <h2
                        class="text-xl font-semibold mb-2 group-hover:text-[var(--vp-c-brand-1)] transition-colors"
                    >
                        {{ release.title }}
                    </h2>
                    <p
                        class="text-sm text-[var(--vp-c-text-2)] line-clamp-3 mb-4 grow"
                    >
                        {{ release.excerpt }}
                    </p>
                    <div
                        class="flex items-center text-sm font-medium text-(--vp-c-text-2) gap-1"
                    >
                        Read notes
                        <arrow-right-fill class="size-4" />
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
