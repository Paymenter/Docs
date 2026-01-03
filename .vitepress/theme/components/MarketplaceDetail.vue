<script setup>
import { ref, onMounted } from "vue";
import { useData } from "vitepress";
import Breadcrumb from "./Breadcrumb.vue";
import MarketplaceSidebar from "./MarketplaceSidebar.vue";

const hasShareApi = ref(false);
const copied = ref(false);
const { params } = useData();

const formatPrice = (price) =>
    price > 0 ? `$${Number(price).toFixed(2)}` : "Free";

const getFullImageUrl = (url) => {
    if (!url) return "";
    return url.split("?")[0];
};

onMounted(() => {
    hasShareApi.value = !!navigator.share;
});

const sharePage = async () => {
    try {
        await navigator.share({
            title: document.title,
            url: window.location.href,
        });
    } catch (err) {
        // Silently fail if share is cancelled
    }
};

const copyLink = async () => {
    try {
        await navigator.clipboard.writeText(window.location.href);
        copied.value = true;
        setTimeout(() => (copied.value = false), 2000);
    } catch (err) {
        // Silently fail if clipboard fails
    }
};

const parseBBCode = (input) => {
    if (!input) return "";

    const addRef = (url) => {
        if (!url.includes("builtbybit.com") || url.includes("ref=")) return url;
        return url + (url.includes("?") ? "&" : "?") + "ref=398830";
    };

    let html = input
        // Basic formatting
        .replace(/\[B\](.*?)\[\/B\]/gi, "<b>$1</b>")
        .replace(/\[I\](.*?)\[\/I\]/gi, "<i>$1</i>")
        .replace(/\[U\](.*?)\[\/U\]/gi, "<u>$1</u>")
        .replace(/\[S\](.*?)\[\/S\]/gi, "<s>$1</s>")
        .replace(
            /\[COLOR=(.*?)\](.*?)\[\/COLOR\]/gi,
            '<span style="color:$1">$2</span>',
        )
        .replace(
            /\[SIZE=(.*?)\](.*?)\[\/SIZE\]/gi,
            '<span style="font-size:1.1em">$2</span>',
        )

        // Headings
        .replace(
            /\[HEADING=1\](.*?)\[\/HEADING\]/gi,
            '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>',
        )
        .replace(
            /\[HEADING=2\](.*?)\[\/HEADING\]/gi,
            '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>',
        )
        .replace(
            /\[HEADING=3\](.*?)\[\/HEADING\]/gi,
            '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>',
        )

        // Links and images
        .replace(
            /\[URL='?(.*?)'?\](.*?)\[\/URL\]/gi,
            (match, url, text) =>
                `<a href="${addRef(url)}" target="_blank" class="text-[var(--vp-c-brand-1)] hover:underline">${text}</a>`,
        )
        .replace(
            /\[URL\](.*?)\[\/URL\]/gi,
            (match, url) =>
                `<a href="${addRef(url)}" target="_blank" class="text-[var(--vp-c-brand-1)] hover:underline">${url}</a>`,
        )
        .replace(
            /\[IMG\](.*?)\[\/IMG\]/gi,
            '<img src="$1" class="max-w-full rounded-lg my-2" />',
        )

        // Attachments
        .replace(
            /\[ATTACH.*?\](\d+)\[\/ATTACH\]/gi,
            '<img src="https://builtbybit.com/attachments/$1" class="max-w-full rounded-lg my-2 shadow-md" />',
        )

        // Lists
        .replace(
            /\[LIST\](.*?)\[\/LIST\]/gis,
            '<ul class="list-disc pl-5 my-4 space-y-1">$1</ul>',
        )
        .replace(
            /\[LIST=1\](.*?)\[\/LIST\]/gis,
            '<ol class="list-decimal pl-5 my-4 space-y-1">$1</ol>',
        )
        .replace(/\[\*\]/gi, "<li>")

        // Code and quotes
        .replace(
            /\[CODE\](.*?)\[\/CODE\]/gis,
            '<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto text-sm my-2"><code>$1</code></pre>',
        )
        .replace(
            /\[ICODE\](.*?)\[\/ICODE\]/gi,
            '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>',
        )
        .replace(
            /\[QUOTE\](.*?)\[\/QUOTE\]/gis,
            '<blockquote class="border-l-4 border-[var(--vp-c-brand-1)] pl-4 italic my-4 bg-[var(--vp-c-bg-soft)] p-2 rounded-r">$1</blockquote>',
        )

        // Layout
        .replace(/\[INDENT\](.*?)\[\/INDENT\]/gis, '<div class="pl-6">$1</div>')
        .replace(/\n/g, "<br>");

    return html;
};
</script>

<template>
    <div class="container mx-auto max-w-(--vp-layout-max-width) p-6 lg:p-8">
        <Breadcrumb
            :items="[
                { text: 'Marketplace', link: '/marketplace' },
                { text: params.name },
            ]"
        />

        <div class="container mt-8 smd:mt-20 flex flex-col lg:flex-row gap-14">
            <div class="flex max-w-full flex-1 flex-col gap-8">
                <div
                    class="relative w-full card aspect-2/1 rounded-xl overflow-hidden"
                >
                    <img
                        :src="getFullImageUrl(params.image)"
                        :alt="params.name"
                        class="w-full h-full object-cover"
                    />
                </div>

                <div
                    class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-18"
                >
                    <div class="flex flex-col gap-2">
                        <h1 class="!text-3xl !font-medium">
                            {{ params.name }}
                        </h1>
                        <p class="text-(--vp-c-text-2)">
                            {{ params.description }}
                        </p>
                    </div>
                    <div class="flex flex-wrap lg:flex-nowrap gap-3 shrink-0">
                        <a
                            :href="params.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="whitespace-nowrap inline-flex items-center gap-2 py-3 px-6 rounded-lg font-semibold no-underline transition-all duration-200 bg-(--vp-c-brand-1) text-white hover:bg-(--vp-c-brand-2) shadow-sm hover:shadow-md"
                        >
                            <builtbybit class="size-5 fill-white" />
                            <span>Get on BuiltByBit</span>
                            <span v-if="params.price > 0" class=""
                                >({{ formatPrice(params.price) }})</span
                            >
                        </a>

                        <div class="flex gap-2">
                            <button
                                v-if="hasShareApi"
                                @click="sharePage"
                                title="Share"
                                class="inline-flex items-center justify-center !p-3 rounded-lg font-semibold transition-all duration-200 bg-(--vp-c-bg) text-(--vp-c-text-1) border border-(--vp-c-border) hover:border-(--vp-c-brand-1) cursor-pointer"
                            >
                                <share-2-fill
                                    class="size-5 fill-[var(--vp-c-text-1)]"
                                />
                            </button>
                            <button
                                @click="copyLink"
                                title="Copy Link"
                                class="inline-flex items-center justify-center !p-3 rounded-lg font-semibold transition-all duration-200 bg-(--vp-c-bg) text-(--vp-c-text-1) border border-(--vp-c-border) hover:border-(--vp-c-brand-1) cursor-pointer"
                            >
                                <check-fill
                                    v-if="copied"
                                    class="size-5 fill-[var(--vp-c-text-1)]"
                                />
                                <link-m
                                    v-else
                                    class="size-5 fill-[var(--vp-c-text-1)]"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <div class="w-full lg:hidden">
                    <MarketplaceSidebar :params="params" />
                </div>

                <div>
                    <div class="card p-6 mb-12">
                        <h3 class="!text-xl !mt-0 !mb-6">
                            About this {{ params.type }}
                        </h3>
                        <div
                            class="prose prose-slate dark:prose-invert max-w-none"
                        >
                            <div
                                v-html="
                                    parseBBCode(
                                        params.long_description ||
                                            params.description,
                                    )
                                "
                                class="text-[var(--vp-c-text-2)] space-y-2"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="sticky top-[160px] hidden w-72 shrink-0 flex-col gap-6 self-start lg:flex"
            >
                <MarketplaceSidebar :params="params" />
            </div>
        </div>
    </div>
</template>
