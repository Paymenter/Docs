<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <footer class="relative mt-32 overflow-hidden py-24">
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="absolute inset-0 blur-3xl opacity-50 dark:opacity-100">
                <div
                    class="![animation:var(--animate-swing-float)] ![animation-duration:18s] origin-top h-64 w-[1000px] absolute top-10 -left-48 bg-sky-500/20 dark:bg-blue-900/30"
                ></div>
                <div
                    class="![animation:var(--animate-swing-float)] ![animation-duration:22s] origin-top h-72 w-[1000px] absolute top-0 left-0 bg-violet-500/20 dark:bg-[var(--vp-c-brand-1)]/25"
                ></div>
                <div
                    class="![animation:var(--animate-swing-float)] ![animation-duration:16s] origin-top h-72 w-[1000px] absolute bottom-20 left-20 bg-rose-500/15 dark:bg-purple-900/25"
                ></div>
                <div
                    class="![animation:var(--animate-swing-float)] ![animation-duration:24s] origin-top h-64 w-[1000px] absolute top-10 -right-48 bg-sky-500/15 dark:bg-blue-900/25"
                ></div>
                <div
                    class="![animation:var(--animate-swing-float)] ![animation-duration:20s] origin-top h-72 w-[1000px] absolute bottom-10 -right-20 bg-violet-500/15 dark:bg-[var(--vp-c-brand-1)]/25"
                ></div>
            </div>

            <div class="absolute inset-0 opacity-50 dark:opacity-100">
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
            class="relative z-10 mx-auto max-w-[var(--vp-layout-max-width)] px-4 sm:px-6 lg:px-8"
        >
            <div class="w-full">
                <div
                    class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5"
                >
                    <div class="flex flex-col gap-4">
                        <p class="font-medium text-[var(--vp-c-text-1)]">
                            Product
                        </p>
                        <ul class="space-y-4 text-sm">
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="#">Features</a>
                            </li>
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/docs/installation/install"
                                    >Installation</a
                                >
                            </li>
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/marketplace">Marketplace</a>
                            </li>
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="https://paas.paymenter.org/"
                                    >PaaS (Cloud)</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="font-medium text-[var(--vp-c-text-1)]">
                            Developers
                        </p>
                        <ul class="space-y-4 text-sm">
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/development/extensions/"
                                    >Extensions</a
                                >
                            </li>
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/development/theme">Themes</a>
                            </li>
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/development/event-list">Events</a>
                            </li>
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/development/OAuth">OAuth</a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="font-medium text-[var(--vp-c-text-1)]">
                            About
                        </p>
                        <ul class="space-y-4 text-sm text-[var(--vp-c-text-2)]">
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/docs/guides/FAQ">FAQ</a>
                            </li>
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/team">Team</a>
                            </li>
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a
                                    href="https://github.com/Paymenter/Paymenter/releases"
                                    >Releases</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="font-medium text-[var(--vp-c-text-1)]">
                            Other
                        </p>
                        <ul class="space-y-4 text-sm">
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/blog/">Blog</a>
                            </li>
                            <li
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <a href="/docs/contribute/how-to-help"
                                    >Contribute</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    class="mt-16 pt-8 border-t border-[var(--vp-c-divider)] flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                >
                    <div class="text-center md:text-left flex flex-col gap-2">
                        <p class="text-sm text-[var(--vp-c-text-2)]">
                            Released under the
                            <a
                                href="https://github.com/Paymenter/Paymenter/blob/master/LICENSE"
                                target="_blank"
                                class="hover:text-[var(--vp-c-text-1)] underline underline-offset-2 transition"
                                >MIT License</a
                            >.
                        </p>
                        <p class="text-sm text-[var(--vp-c-text-2)]">
                            Copyright © {{ year }} Paymenter. All Rights
                            Reserved.
                        </p>
                    </div>

                    <ul class="flex justify-center gap-6">
                        <li>
                            <a
                                href="https://linkedin.com/company/paymenter"
                                target="_blank"
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <span class="sr-only">LinkedIn</span>
                                <linkedin-box-fill class="size-6" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://discord.gg/paymenter-882318291014651924"
                                target="_blank"
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <span class="sr-only">Discord</span>
                                <discord-fill class="size-6" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Paymenter/Paymenter"
                                target="_blank"
                                class="transition text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                            >
                                <span class="sr-only">Github</span>
                                <github-fill class="size-6" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
