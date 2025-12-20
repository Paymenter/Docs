<script setup>
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
    <section class="relative overflow-hidden mt-12 minh-72 rounded-3xl">
        <div
            class="relative lg:p-14 p-8 bg-linear-to-br from-[#111827] to-[#4213CE]/60"
        >
            <div class="absolute w-full h-full">
                <svg id="noice" class="w-full h-full">
                    <filter id="noise-filter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.94"
                            numOctaves="4"
                            stitchTiles="stitch"
                        ></feTurbulence>
                        <feColorMatrix
                            type="saturate"
                            values="0"
                        ></feColorMatrix>
                        <feComponentTransfer>
                            <feFuncR type="linear" slope="0.86"></feFuncR>
                            <feFuncG type="linear" slope="0.86"></feFuncG>
                            <feFuncB type="linear" slope="0.86"></feFuncB>
                            <feFuncA type="linear" slope="0.86"></feFuncA>
                        </feComponentTransfer>
                        <feComponentTransfer>
                            <feFuncR
                                type="linear"
                                slope="1.47"
                                intercept="-0.23"
                            />
                            <feFuncG
                                type="linear"
                                slope="1.47"
                                intercept="-0.23"
                            />
                            <feFuncB
                                type="linear"
                                slope="1.47"
                                intercept="-0.23"
                            />
                        </feComponentTransfer>
                    </filter>
                    <rect
                        width="100%"
                        height="100%"
                        filter="url(#noise-filter)"
                    ></rect>
                </svg>
            </div>
            <div class="flex flex-col items-start relative">
                <div class="text-3xl lg:text-4xl font-semibold mb-4 text-white">
                    {{ frontmatter.supportbanner.text }}
                </div>
                <p class="text-base text-white/80 mb-8 max-w-2xl">
                    {{ frontmatter.supportbanner.tagline }}
                </p>
                <div class="buttons mt-8">
                    <a
                        href="https://github.com/sponsors/Paymenter"
                        target="_blank"
                        class="btn btn-secondary svg-right"
                    >
                        <service-fill class="size-5 fill-[#DB61A2]" />
                        {{ frontmatter.supportbanner.sponsorButton }}
                    </a>
                    <a
                        href="https://github.com/Paymenter/Paymenter"
                        target="_blank"
                        class="btn btn-secondary svg-right"
                    >
                        <star-fill class="size-5 fill-[#E3B341]" />
                        {{ frontmatter.supportbanner.starButton }}
                    </a>
                </div>
            </div>

            <div
                class="w-[900px] rotate-x-50 -rotate-z-25 translate-x-[80%] -translate-y-24 skew-x-10 skew-y-[-5deg] bg-white/10 absolute inset-18 -m-3 rounded-3xl border border-white/20 p-2.5 isolate"
            >
                <img
                    class="rounded-2xl"
                    src="/landing/screenshots/dash-1.webp"
                    alt="Paymenter Dashboard"
                />
            </div>
        </div>
    </section>
</template>
