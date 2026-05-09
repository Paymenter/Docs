<script setup>
import { useData } from "vitepress";
const { frontmatter } = useData();
const hero = frontmatter.value.heroLanding;
</script>

<template>
    <section
        class="relative w-full overflow-hidden mask-b-from-80% mask-b-to-100%"
    >
        <div
            class="absolute inset-x-0 top-0 h-screen z-0 mask-[linear-gradient(to_bottom,black_20%,transparent_100%)]"
        >
            <div class="absolute inset-0 blur-3xl">
                <div
                    class="animate-swing-float! [animation-duration:18s]! origin-top h-64 w-[1000px] absolute top-10 -left-48 bg-sky-500/30 dark:bg-blue-900/40"
                ></div>
                <div
                    class="animate-swing-float! [animation-duration:22s]! origin-top h-72 w-[1000px] absolute top-0 left-0 bg-violet-500/30 dark:bg-(--vp-c-brand-1)/40"
                ></div>
                <div
                    class="animate-swing-float! [animation-duration:16s]! origin-top h-72 w-[1000px] absolute bottom-20 left-20 bg-rose-500/20 dark:bg-purple-900/40"
                ></div>
                <div
                    class="animate-swing-float! [animation-duration:24s]! origin-top h-64 w-[1000px] absolute top-10 -right-48 bg-sky-500/20 dark:bg-blue-900/40"
                ></div>
                <div
                    class="animate-swing-float! [animation-duration:20s]! origin-top h-72 w-[1000px] absolute bottom-10 -right-20 bg-violet-500/20 dark:bg-(--vp-c-brand-1)/40"
                ></div>
            </div>
            <div class="absolute inset-0">
                <svg id="noice" class="w-full h-full">
                    <filter id="noise-filter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.75"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                        <feColorMatrix type="saturate" values="0" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.04" />
                        </feComponentTransfer>
                    </filter>
                    <rect
                        width="100%"
                        height="100%"
                        filter="url(#noise-filter)"
                    ></rect>
                </svg>
            </div>
        </div>
        <div
            class="relative z-10 flex flex-col items-center justify-center text-center min-h-[50vh] py-24 px-4"
        >
            <div class="flex justify-center">
                <a href="/releases/v1.5-release" class="mb-8">
                    <div
                        class="flex items-center gap-2 rounded-full py-2 px-4 text-(--vp-c-text-1) bg-(--vp-c-bg-alt)/50 border border-(--vp-c-border) text-sm transition duration-200 will-change-transform hover:scale-105"
                    >
                        <sparkling-fill class="size-5" />
                        {{ hero.noticeLink }}
                        <arrow-right-fill class="size-4" />
                    </div>
                </a>
            </div>
            <h1 class="flex justify-center">
                <span
                    class="max-w-xl text-[40px] md:text-6xl font-semibold tracking-tighter leading-tight"
                >
                    {{ hero.text }}
                </span>
            </h1>
            <p class="max-w-2xl text-lg py-6 text-(--vp-c-text-2)">
                {{ hero.tagline }}
            </p>
            <div class="flex flex-wrap gap-4 justify-center mt-4">
                <a
                    href="/docs/getting-started/introduction"
                    class="btn btn-primary text-white svg-left"
                >
                    {{ hero.getStartedButton }}
                    <arrow-right-fill class="size-5" />
                </a>
                <a
                    href="https://demo.paymenter.org/"
                    target="\_blank"
                    class="btn svg-left"
                >
                    {{ hero.demoButton }}
                    <arrow-right-up-box-fill class="size-5" />
                </a>
            </div>
        </div>
    </section>
</template>
