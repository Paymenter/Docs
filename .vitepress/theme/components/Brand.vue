<script setup>
import { ref } from "vue";
import Breadcrumb from "./Breadcrumb.vue";
import SectionBlock from "@components/landing/SectionBlock.vue";

const agreed = ref(false);
const copied = ref(null);

const logos = [
    {
        title: "Logo (Dark)",
        description: "For light backgrounds",
        url: "/logo-light.svg",
        filename: "paymenter-logo-dark.svg",
        darkParams: false,
    },
    {
        title: "Logo (Light)",
        description: "For dark backgrounds",
        url: "/logo-dark.svg",
        filename: "paymenter-logo-light.svg",
        darkParams: true,
    },
    {
        title: "Logo (Dark)",
        description: "For light backgrounds",
        url: "/logo-positive.svg",
        filename: "paymenter-logo-dark.svg",
        darkParams: false,
    },
    {
        title: "Logo (Light)",
        description: "For dark backgrounds",
        url: "/logo-negative.svg",
        filename: "paymenter-logo-light.svg",
        darkParams: true,
    },
];

const wordmarks = [
    {
        title: "Wordmark (Dark)",
        description: "Text only, for light backgrounds",
        url: "/wordmark-dark.svg",
        filename: "paymenter-wordmark-light.svg",
        darkParams: false,
    },
    {
        title: "Wordmark (Dark)",
        description: "Text only, for light backgrounds",
        url: "/wordmark-light.svg",
        filename: "paymenter-wordmark-dark.svg",
        darkParams: true,
    },
];

const symbols = [
    {
        title: "Symbol",
        description: "Icon only, positive color",
        url: "/symbol.svg",
        filename: "paymenter-symbol-positive.svg",
        darkParams: false,
    },
    {
        title: "Symbol (Negative)",
        description: "Icon only, negative (white) color",
        url: "/symbol-negative.svg",
        filename: "paymenter-symbol-negative.svg",
        darkParams: true,
    },
    {
        title: "Symbol (Positive)",
        description: "Icon only, positive color",
        url: "/symbol-positive.svg",
        filename: "paymenter-symbol-positive.svg",
        darkParams: false,
    },
    {
        title: "Symbol (Outline)",
        description: "Icon only, negative (white) color",
        url: "/symbol-outline.svg",
        filename: "paymenter-symbol-negative.svg",
        darkParams: true,
    },
];

const copySvg = async (url) => {
    if (!agreed.value) return;
    try {
        const response = await fetch(url);
        const svgText = await response.text();
        await navigator.clipboard.writeText(svgText);
        copied.value = url;
        setTimeout(() => (copied.value = null), 2000);
    } catch (e) {
        console.error("Failed to copy SVG", e);
    }
};

const downloadSvg = (url, filename) => {
    if (!agreed.value) return;
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
</script>

<template>
    <div class="container mx-auto max-w-(--vp-layout-max-width) p-6 lg:p-8">
        <Breadcrumb :items="[{ text: 'Brand Assets' }]" />
        <SectionBlock
            icon="brush-ai-fill"
            tagline="Brand Assets"
            title="Paymenter Media Kit"
            description="Official logos and brand resources for Paymenter. Please follow our guidelines when using these assets."
            description-align="start"
        />

        <div
            class="flex flex-col gap-4 mt-8 mb-12 p-6 rounded-2xl border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-soft)]"
        >
            <h3 class="text-lg font-semibold mb-4">Terms of Use</h3>
            <p class="text-sm text-[var(--vp-c-text-2)] mb-6">
                By downloading or copying these assets, you agree to use them in
                accordance with the Paymenter Brand Guidelines. Do not modify,
                distort, or use these marks in a way that suggests endorsement
                or affiliation where none exists.
            </p>

            <label
                class="flex items-center gap-3 cursor-pointer group select-none"
            >
                <div class="relative flex items-center">
                    <input
                        type="checkbox"
                        v-model="agreed"
                        class="peer sr-only"
                    />
                    <div
                        class="w-6 h-6 border-2 border-[var(--vp-c-text-3)] rounded-md peer-checked:bg-[var(--vp-c-brand-1)] peer-checked:border-[var(--vp-c-brand-1)] transition-all"
                    ></div>
                    <check-fill
                        class="absolute inset-0 size-6 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    />
                </div>
                <span
                    class="font-medium text-[var(--vp-c-text-1)] group-hover:text-[var(--vp-c-brand-1)] transition-colors"
                >
                    I agree to the Brand Guidelines and Fair Use Policy
                </span>
            </label>
        </div>

        <div v-if="logos.length > 0" class="mb-16">
            <div class="text-2xl font-semibold mb-6">Logo</div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    v-for="asset in logos"
                    :key="asset.url"
                    class="flex flex-col rounded-2xl border border-[var(--vp-c-divider)] overflow-hidden bg-[var(--vp-c-bg)] transition-shadow hover:shadow-lg"
                >
                    <div
                        class="h-64 flex items-center justify-center p-14 relative"
                        :class="asset.darkParams ? 'bg-[#1b1b1f]' : 'bg-white'"
                    >
                        <div
                            class="absolute inset-0 opacity-10"
                            style="
                                background-image: radial-gradient(
                                    #888 1px,
                                    transparent 1px
                                );
                                background-size: 20px 20px;
                            "
                        ></div>
                        <img
                            :src="asset.url"
                            :alt="asset.title"
                            class="max-w-full max-h-18 relative z-10"
                        />
                    </div>
                    <div
                        class="p-6 border-t border-[var(--vp-c-divider)] flex flex-col gap-4"
                    >
                        <div>
                            <h3 class="font-bold text-lg">{{ asset.title }}</h3>
                            <p class="text-sm text-[var(--vp-c-text-2)]">
                                {{ asset.description }}
                            </p>
                        </div>
                        <div class="flex gap-3 mt-auto">
                            <button
                                @click="copySvg(asset.url)"
                                :disabled="!agreed"
                                class="flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2"
                                :class="
                                    agreed
                                        ? 'bg-[var(--vp-c-brand-1)] text-white hover:bg-[var(--vp-c-brand-2)]'
                                        : 'bg-[var(--vp-c-bg-soft)] text-[var(--vp-c-text-3)] cursor-not-allowed opacity-50'
                                "
                            >
                                <span v-if="copied === asset.url">Copied!</span>
                                <span v-else>Copy SVG</span>
                            </button>
                            <button
                                @click="downloadSvg(asset.url, asset.filename)"
                                :disabled="!agreed"
                                class="px-4 py-2 rounded-lg font-medium text-sm border transition-all flex items-center justify-center"
                                :class="
                                    agreed
                                        ? 'border-[var(--vp-c-divider)] hover:border-[var(--vp-c-brand-1)] hover:text-[var(--vp-c-brand-1)]'
                                        : 'border-[var(--vp-c-divider)] text-[var(--vp-c-text-3)] cursor-not-allowed opacity-50'
                                "
                                title="Download File"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="size-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="wordmarks.length > 0" class="mb-16">
            <div class="text-2xl font-semibold mb-6">Wordmark</div>

            <div class="text-xl font-semibold mb-6">Safe zone</div>
            <div class="flex items-center justify-center card p-18 mb-8">
                <div
                    class="flex justify-center w-full h-full object-contain max-w-4xl"
                >
                    <img
                        class=""
                        src="/wordmark-safe-zone.svg"
                        alt="Safe zone"
                    />
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    v-for="asset in wordmarks"
                    :key="asset.url"
                    class="flex flex-col rounded-2xl border border-[var(--vp-c-divider)] overflow-hidden bg-[var(--vp-c-bg)] transition-shadow hover:shadow-lg"
                >
                    <div
                        class="h-64 flex items-center justify-center p-14 relative"
                        :class="asset.darkParams ? 'bg-[#1b1b1f]' : 'bg-white'"
                    >
                        <div
                            class="absolute inset-0 opacity-10"
                            style="
                                background-image: radial-gradient(
                                    #888 1px,
                                    transparent 1px
                                );
                                background-size: 20px 20px;
                            "
                        ></div>
                        <img
                            :src="asset.url"
                            :alt="asset.title"
                            class="max-w-full max-h-14 relative z-10"
                        />
                    </div>
                    <div
                        class="p-6 border-t border-[var(--vp-c-divider)] flex flex-col gap-4"
                    >
                        <div>
                            <h3 class="font-bold text-lg">{{ asset.title }}</h3>
                            <p class="text-sm text-[var(--vp-c-text-2)]">
                                {{ asset.description }}
                            </p>
                        </div>
                        <div class="flex gap-3 mt-auto">
                            <button
                                @click="copySvg(asset.url)"
                                :disabled="!agreed"
                                class="flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2"
                                :class="
                                    agreed
                                        ? 'bg-[var(--vp-c-brand-1)] text-white hover:bg-[var(--vp-c-brand-2)]'
                                        : 'bg-[var(--vp-c-bg-soft)] text-[var(--vp-c-text-3)] cursor-not-allowed opacity-50'
                                "
                            >
                                <span v-if="copied === asset.url">Copied!</span>
                                <span v-else>Copy SVG</span>
                            </button>
                            <button
                                @click="downloadSvg(asset.url, asset.filename)"
                                :disabled="!agreed"
                                class="px-4 py-2 rounded-lg font-medium text-sm border transition-all flex items-center justify-center"
                                :class="
                                    agreed
                                        ? 'border-[var(--vp-c-divider)] hover:border-[var(--vp-c-brand-1)] hover:text-[var(--vp-c-brand-1)]'
                                        : 'border-[var(--vp-c-divider)] text-[var(--vp-c-text-3)] cursor-not-allowed opacity-50'
                                "
                                title="Download File"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="size-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="symbols.length > 0" class="mb-16">
            <div class="text-2xl font-semibold mb-6">Symbol</div>

            <div class="text-xl font-semibold mb-6">Safe zone</div>
            <div class="flex items-center justify-center card p-18 mb-8">
                <div
                    class="flex justify-center w-full h-full object-contain max-w-4xl"
                >
                    <img class="" src="/symbol-safe-zone.svg" alt="Safe zone" />
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div
                    v-for="asset in symbols"
                    :key="asset.url"
                    class="flex flex-col rounded-2xl border border-[var(--vp-c-divider)] overflow-hidden bg-[var(--vp-c-bg)] transition-shadow hover:shadow-lg"
                >
                    <div
                        class="h-64 flex items-center justify-center p-14 relative"
                        :class="asset.darkParams ? 'bg-[#1b1b1f]' : 'bg-white'"
                    >
                        <div
                            class="absolute inset-0 opacity-10"
                            style="
                                background-image: radial-gradient(
                                    #888 1px,
                                    transparent 1px
                                );
                                background-size: 20px 20px;
                            "
                        ></div>
                        <img
                            :src="asset.url"
                            :alt="asset.title"
                            class="max-w-full max-h-32 relative z-10"
                        />
                    </div>
                    <div
                        class="p-6 border-t border-[var(--vp-c-divider)] flex flex-col gap-4"
                    >
                        <div>
                            <h3 class="font-bold text-lg">{{ asset.title }}</h3>
                            <p class="text-sm text-[var(--vp-c-text-2)]">
                                {{ asset.description }}
                            </p>
                        </div>
                        <div class="flex gap-3 mt-auto">
                            <button
                                @click="copySvg(asset.url)"
                                :disabled="!agreed"
                                class="flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2"
                                :class="
                                    agreed
                                        ? 'bg-[var(--vp-c-brand-1)] text-white hover:bg-[var(--vp-c-brand-2)]'
                                        : 'bg-[var(--vp-c-bg-soft)] text-[var(--vp-c-text-3)] cursor-not-allowed opacity-50'
                                "
                            >
                                <span v-if="copied === asset.url">Copied!</span>
                                <span v-else>Copy SVG</span>
                            </button>
                            <button
                                @click="downloadSvg(asset.url, asset.filename)"
                                :disabled="!agreed"
                                class="px-4 py-2 rounded-lg font-medium text-sm border transition-all flex items-center justify-center"
                                :class="
                                    agreed
                                        ? 'border-[var(--vp-c-divider)] hover:border-[var(--vp-c-brand-1)] hover:text-[var(--vp-c-brand-1)]'
                                        : 'border-[var(--vp-c-divider)] text-[var(--vp-c-text-3)] cursor-not-allowed opacity-50'
                                "
                                title="Download File"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="size-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
