<script setup>
import { useData } from 'vitepress';
import SectionBlock from '@components/landing/SectionBlock.vue';
import FeatureItem from '@components/landing/FeatureItem.vue';

const { frontmatter } = useData();
</script>


<template>
    <div class="p-4 md:p-0">

        <section class="py-12 relative">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#888b93">
                            <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM16.8201 17.0761C18.1628 15.8007 19 13.9981 19 12C19 8.13401 15.866 5 12 5C10.9391 5 9.9334 5.23599 9.03241 5.65834L10.0072 7.41292C10.6177 7.14729 11.2917 7 12 7C14.7614 7 17 9.23858 17 12H14L16.8201 17.0761ZM14.9676 18.3417L13.9928 16.5871C13.3823 16.8527 12.7083 17 12 17C9.23858 17 7 14.7614 7 12H10L7.17993 6.92387C5.83719 8.19929 5 10.0019 5 12C5 15.866 8.13401 19 12 19C13.0609 19 14.0666 18.764 14.9676 18.3417Z">
                            </path>
                        </svg>
                        <span class="text-sm uppercase tracking-widest text-[#9ca3af]">
                            What is Paymenter?
                        </span>
                    </div>
                    <div class="text-3xl font-semibold ">
                        A next-generation billing platform for modern hosting businesses
                    </div>
                </div>
                <div class="flex flex-col justify-end">
                    <span class="flex justify-center font-normal text-[var(--vp-c-text-2)]">
                        Paymenter simplifies billing, enhances transactions, and supports seamless customizations to
                        meet
                        your
                        unique business needs.
                    </span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                <FeatureItem icon="robot-3-fill" title="Automation"
                    description="Streamline operations with automated billing and service deployment." />
                <FeatureItem icon="phone-find-fill" title="Responsive"
                    description="Perfect user experience across all devices, from desktop to mobile." />
                <FeatureItem icon="flashlight-fill" title="Performant"
                    description="Lightning-fast operations for smooth and reliable transactions." />
                <FeatureItem icon="brush-ai-fill" title="Personalization"
                    description="Create custom themes and experiences tailored to your business." />
                <FeatureItem icon="open-source-fill" title="Open-Source"
                    description="Free to use, transparent code, and backed by a growing community of developers." />
            </div>
        </section>

        <section class="py-12">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 p-6 items-center relative">

                <div class="absolute inset-0 z-0">

                    <div
                        class="animate-pulse ![animation-duration:8s] ![animation-iteration-count:infinite] relative w-full h-[500px] bg-[var(--vp-c-brand-1)]/5 transform-3d rotate-x-25 rotate-y-18 -rotate-z-8 mask-x-from-70% mask-x-to-100% mask-y-from-70% mask-y-to-100%">
                        <div
                            class="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--vp-c-brand-1)_10%,transparent)_1px,transparent_1px)] bg-[size:40px_100%]">
                        </div>
                        <div
                            class="absolute inset-0 bg-[linear-gradient(0deg,color-mix(in_srgb,var(--vp-c-brand-1)_10%,transparent)_1px,transparent_1px)] bg-[size:100%_40px]">
                        </div>
                        <div
                            class="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--vp-c-brand-1)_20%,transparent)_1px,transparent_1px)] bg-[size:80px_100%]">
                        </div>
                    </div>

                </div>

                <div
                    class="order-1 lg:order-2 -ml-4 lg:-ml-20 flex flex-col gap-14 transform-3d rotate-x-25 rotate-y-18 -rotate-z-8 mask-r-from-80%">
                    <div
                        class="overflow-hidden group/card ![animation-duration:9s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-[var(--vp-c-divider)] via-[var(--vp-c-text-3)] to-[var(--vp-c-divider)] hover:via-[var(--vp-c-brand-1)] from-80% via-90% to-100% p-px w-auto max-w-fit">
                        <div class="bg-[var(--vp-c-bg)] p-6 rounded-3xl flex flex-col items-start gap-8 relative z-10">
                            <div class="flex h-full items-center gap-3">
                                <div
                                    class="p-2 border border-dashed border-[var(--vp-c-text-3)]/60 group-hover/card:border-[var(--vp-c-brand-1)] rounded-lg">
                                    <div
                                        class="h-4 w-4 bg-[var(--vp-c-text-3)]/60 rounded-sm group-hover/card:bg-[var(--vp-c-brand-1)] animate-pulse ![animation-duration:3s] ![animation-iteration-count:infinite]">
                                    </div>
                                </div>
                                <p class="uppercase tracking-widest font-light font-mono text-[var(--vp-c-text-3)]">
                                    Servers</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <a href="/docs/extensions/convoy" class="relative group/app">
                                    <convoy
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#1B1B1B] ring-6 ring-white/10" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <a href="/docs/extensions/cpanel" class="relative group/app">
                                    <cpanel
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#FF6C2C] ring-6 ring-[#FF6C2C]/30" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <a href="/docs/extensions/enhance" class="relative group/app">
                                    <enhance
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#211451] ring-6 ring-[#7363af]/40" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <a href="/docs/extensions/plesk" class="relative group/app">
                                    <plesk
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-white ring-6 ring-white/20" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <a href="/docs/extensions/pterodactyl" class="relative group/app">
                                    <pterodactyl
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#10529F] ring-6 ring-[#10529F]/40" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <a href="/docs/extensions/directadmin" class="relative group/app">
                                    <directadmin
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#22272E] ring-6 ring-[#22272E]/40" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <a href="/docs/extensions/virtualizor" class="relative group/app">
                                    <virtualizor
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-white ring-6 ring-white/20" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <a href="/docs/extensions/virtfusion" class="relative group/app">
                                    <virtfusion
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#166BBD] ring-6 ring-[#166BBD]/40" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="overflow-hidden lg:ml-24 group/card ![animation-duration:9s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-[var(--vp-c-divider)] via-[var(--vp-c-text-3)] to-[var(--vp-c-divider)] hover:via-[var(--vp-c-brand-1)] from-80% via-90% to-100% p-px w-auto max-w-fit">
                        <div class="bg-[var(--vp-c-bg)] p-6 rounded-3xl flex flex-col items-start gap-8 relative z-10">
                            <div class="flex h-full items-center gap-3">
                                <div
                                    class="p-2 border border-dashed border-[var(--vp-c-text-3)]/60 group-hover/card:border-[var(--vp-c-brand-1)] rounded-lg">
                                    <div
                                        class="h-4 w-4 bg-[var(--vp-c-text-3)]/60 rounded-sm group-hover/card:bg-[var(--vp-c-brand-1)] animate-pulse ![animation-duration:3s] ![animation-iteration-count:infinite]">
                                    </div>
                                </div>
                                <p class="uppercase tracking-widest font-light font-mono text-[var(--vp-c-text-3)]">
                                    Payment
                                    Gateways</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <a href="/docs/extensions/mollie" class="relative group/app">
                                    <mollie
                                        class="group-hover/app:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-black ring-6 ring-white/10" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <xendit
                                    class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#3b68ff] ring-6 ring-[#3b68ff]/20" />
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <a href="/docs/extensions/paypal" class="relative group/app">
                                    <paypal
                                        class="group-hover/app:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-white ring-6 ring-white/20" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <a href="/docs/extensions/stripe" class="relative group/app">
                                    <stripe
                                        class="group-hover/app:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#635BFF] ring-6 ring-[#635BFF]/40" />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-[var(--vp-c-text-3)]/60 p-0.5 rounded-sm pointer-events-none">
                                        <arrow-right-up-box-fill class="size-6" />
                                    </div>
                                </a>
                                <div class="h-px w-4 border border-dashed border-[var(--vp-c-text-3)]/60"></div>
                                <midtrans
                                    class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-white ring-6 ring-white/20" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col order-2 lg:order-2 z-10">

                    <SectionBlock icon="puzzle-2-fill" tagline="Extensible" title="Powerful Extensions & Integrations"
                        description="Customize your billing platform with a growing marketplace of extensions. From payment gateways to service integrations, build the perfect solution for your business.">
                        <div class="flex gap-6 justify-start mt-8">
                            <a href="/marketplace/" class="btn btn-primary svg-left" style="color:white;">
                                {{ frontmatter.featuresLanding.extensible.marketplaceButton }}
                                <arrow-right-up-box-fill class="size-5" />
                            </a>
                            <a href="https://github.com/Paymenter/Paymenter/tree/master/extensions" target="_blank"
                                class="btn svg-left">
                                Bundled Extensions
                                <arrow-right-fill class="size-5" />
                            </a>
                        </div>
                    </SectionBlock>
                </div>

            </div>

        </section>

        <section class="py-16 relative overflow-hidden mask-y-from-90% mask-y-to-100%">

            <div
                class="absolute inset-0 z-0 flex items-center justify-center transform-3d rotate-x-55 rotate-y-0 -rotate-z-45">
                <div
                    class="h-auto w-full ![animation-duration:4s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-full bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)] via-[#1fe6a3] to-[var(--vp-c-border)] from-80% via-90% to-100% p-px shadow-2xl shadow-[#1fe6a3]/10">
                    <div class="bg-[var(--vp-c-bg)] p-20 rounded-full">

                        <div
                            class="![animation-duration:3s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-full bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)] via-[#1fe6a3] to-[var(--vp-c-border)] from-80% via-90% to-100% p-px">

                            <div class="bg-[var(--vp-c-bg)] p-20 rounded-full">

                                <div
                                    class="![animation-duration:2s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-full bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)] via-[#1fe6a3] to-[var(--vp-c-border)] from-80% via-90% to-100% p-px">

                                    <div class="bg-[var(--vp-c-bg)] p-20 rounded-full">
                                        <div
                                            class="animate-pulse ![animation-duration:3s] ![animation-iteration-count:infinite] p-10 rounded-full border border-[#1fe6a3] shadow-2xl shadow-[#4060ff]/20 text-[var(--vp-c-text-1)]/50">

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col p-6 items-center relative">
                <div class="flex flex-col gap-6 lg:max-w-2xl items-center text-center">
                    <div class="flex items-center gap-3 text-[#9ca3af]">
                        <braces-fill class="size-5" />
                        <span class="text-sm uppercase tracking-widest text-[#9ca3af]">
                            Paymenter API
                        </span>
                    </div>
                    <div class="text-3xl font-semibold ">
                        Extend and Automate with the API
                    </div>
                    <span class="flex font-normal text-[var(--vp-c-text-2)]">
                        Our REST API gives you the power to control your entire platform. Build custom solutions,
                        automate complex workflows, and integrate everything seamlessly.
                    </span>
                    <div class="flex gap-4 justify-center mt-4">
                        <a href="/api/" class="btn btn-primary svg-left" style="color:white;">
                            Explore the API
                            <arrow-right-up-box-fill class="size-5" />
                        </a>
                        <a href="https://paymenter.org/openapi.json" target="_blank" class="btn svg-left">
                            OpenAPI Spec
                            <arrow-right-fill class="size-5" />
                        </a>
                    </div>
                </div>
            </div>

        </section>

        <section class="py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6">

                <SectionBlock icon="service-fill" tagline="Sponsors"
                    title="Building Together a Sustainable Future for Open-Source Billing" />

                <div class="flex flex-col justify-end">
                    <span class="flex justify-center font-normal text-[var(--vp-c-text-2)]">
                        The continued development and maintenance of Paymenter is made possible by these generous
                        sponsors:
                    </span>
                </div>

            </div>
            <div class="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <a class="h-18 md:w-72 w-full flex justify-center items-center border border-[var(--vp-c-divider)] rounded-lg opacity-75 grayscale hover:grayscale-0 hover:opacity-100"
                    href="https://www.quape.com/?rel=paymenter" target="_blank" aria-label="QUAPE PTE LTD   ">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="193" height="24" viewBox="0 0 936.000000 250.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)" fill="#f04122" stroke="none">
                            <path d="M1056 2490 c-521 -66 -931 -450 -1033 -968 -22 -116 -22 -338 1 -445 49 -224 151 -426 292 -577 l43 -46 -169 -219 c-93 -121 -170 -223 -170 -227 0 -5 85 -8 189 -8 l189 0 102 134 102 134 92 -44 c435 -206 961 -121 1318 214 243 229 371 526 371 867 0 156 -16 255 -65 395 -142 402 -483 696 -897 774 -103 20 -276 27 -365 16z m367 -329 c296 -78 550 -332 628 -626 12 -46 23 -127 26 -190 31 -636 -606 -1095 -1201 -867 -38 15 -71 32 -73 37 -2 6 121 172 272 369 151 198 275 361 275 363 0 1 -87 3 -192 3 l-193 -1 -209 -275 -209 -274 -29 32 c-49 57 -119 176 -148 251 -88 227 -77 495 31 712 121 243 344 418 609 476 112 25 300 20 413 -10z"/>
                            <path d="M5117 2418 c-20 -18 -596 -1238 -1028 -2176 l-38 -82 170 2 170 3 154 330 c85 182 158 336 163 344 7 12 17 9 60 -17 240 -148 555 -149 793 -2 27 16 53 30 57 30 4 0 79 -156 167 -345 l160 -345 168 0 c132 0 168 3 164 13 -57 137 -1052 2246 -1064 2255 -26 19 -69 14 -96 -10z m213 -941 l153 -327 -24 -26 c-36 -38 -155 -92 -229 -104 -117 -18 -258 21 -348 97 l-33 28 157 338 c87 185 161 334 165 330 3 -5 75 -155 159 -336z"/>
                            <path d="M2520 1607 c0 -938 -4 -894 87 -1077 39 -80 61 -109 137 -186 77 -76 106 -97 186 -137 52 -25 124 -54 160 -63 89 -24 282 -24 369 0 262 71 454 256 542 521 l24 70 3 848 3 847 -150 0 -150 0 -3 -817 c-3 -805 -4 -819 -25 -874 -44 -116 -128 -214 -226 -262 -275 -135 -598 32 -646 333 -7 41 -11 350 -11 843 l0 777 -150 0 -150 0 0 -823z"/>
                            <path d="M6440 1295 l0 -1135 155 0 155 0 0 514 0 515 318 3 c313 4 318 4 398 31 381 127 543 562 339 913 -46 80 -161 186 -246 228 -135 65 -142 66 -656 66 l-463 0 0 -1135z m961 804 c69 -33 128 -89 160 -155 36 -74 34 -188 -4 -266 -30 -62 -83 -115 -149 -150 -42 -22 -52 -23 -350 -26 l-308 -3 0 316 0 316 298 -3 297 -3 56 -26z"/>
                            <path d="M8060 1295 l0 -1135 650 0 650 0 0 155 0 155 -500 0 -500 0 0 380 0 380 500 0 500 0 0 155 0 155 -500 0 -500 0 0 295 0 295 500 0 500 0 0 150 0 150 -650 0 -650 0 0 -1135z"/>
                        </g>
                    </svg>
                </a>
                <a class="h-18 md:w-72 w-full flex justify-center items-center border border-[var(--vp-c-divider)] rounded-lg opacity-75 grayscale hover:grayscale-0 hover:opacity-100"
                    href="https://nodedog.consulting?rel=paymenter" target="_blank" aria-label="NodeDog Consulting">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg" version="1.1"  width="193" height="60" viewBox="0, 0, 400,292.0051807370776">
                        <g id="svgg"><path id="path3" d="" stroke="none" fill="#1002c28" fill-rule="evenodd"/><path id="path4" d="" stroke="none" fill="#1002c28" fill-rule="evenodd"/><path id="path0" d="M346.833 21.500 L 346.833 30.000 355.583 30.000 L 364.333 30.000 364.333 21.500 L 364.333 13.000 355.583 13.000 L 346.833 13.000 346.833 21.500 M196.167 117.017 C 174.495 118.907,155.311 134.710,149.083 155.804 C 141.008 183.154,155.533 212.616,181.917 222.404 C 182.833 222.744,183.748 223.089,183.950 223.171 C 184.649 223.453,187.757 224.318,189.333 224.669 C 199.505 226.931,210.535 226.249,220.000 222.772 C 238.509 215.972,252.000 199.887,255.244 180.750 C 255.858 177.127,255.917 176.320,255.917 171.417 C 255.917 166.513,255.858 165.700,255.244 162.083 C 250.482 134.036,224.888 114.512,196.167 117.017 M13.000 171.408 L 13.000 225.500 43.844 225.500 C 80.581 225.500,83.910 225.396,92.667 223.974 C 109.582 221.228,121.296 213.182,128.787 199.167 C 136.161 185.371,137.050 164.283,130.899 149.097 C 123.376 130.524,110.447 120.977,89.250 118.343 C 81.766 117.413,83.376 117.449,46.792 117.380 L 13.000 117.316 13.000 171.408 M291.250 117.440 C 275.439 118.426,268.833 124.793,267.671 140.167 C 267.440 143.225,267.440 199.623,267.672 202.654 C 268.844 218.030,275.267 224.208,291.250 225.334 C 294.387 225.555,360.113 225.555,363.250 225.334 C 378.184 224.282,384.509 218.997,386.488 205.917 C 386.952 202.849,387.000 200.507,387.000 181.066 L 387.000 160.833 354.083 160.833 L 321.167 160.833 321.167 171.833 L 321.167 182.833 341.167 182.833 L 361.167 182.833 361.167 192.583 L 361.167 202.333 327.250 202.333 L 293.333 202.333 293.333 171.250 L 293.333 140.167 327.250 140.167 L 361.167 140.167 361.167 146.333 C 361.167 151.994,361.190 152.500,361.446 152.500 C 361.600 152.500,362.819 152.279,364.155 152.010 C 365.490 151.740,371.008 150.648,376.417 149.582 C 381.825 148.516,386.419 147.604,386.625 147.554 C 387.541 147.334,386.880 138.001,385.575 132.724 C 383.427 124.035,378.257 119.581,368.500 118.011 C 367.904 117.915,366.854 117.747,366.167 117.636 C 365.035 117.454,294.001 117.268,291.250 117.440 M203.629 123.070 C 211.966 126.888,209.572 149.615,200.035 157.194 C 196.371 160.106,193.154 160.649,188.833 159.084 C 176.554 154.638,180.014 134.156,194.631 124.757 C 198.117 122.516,201.168 121.944,203.629 123.070 M228.471 130.346 C 234.593 133.122,238.031 147.391,234.912 157.083 C 233.357 161.916,230.146 165.934,226.500 167.609 C 221.925 169.712,215.553 167.850,212.809 163.607 C 207.975 156.135,211.322 140.830,219.525 132.899 C 222.647 129.880,225.591 129.040,228.471 130.346 M77.833 140.418 C 99.652 142.109,107.988 149.770,108.750 168.833 C 109.438 186.020,103.894 195.860,91.333 199.751 C 84.182 201.965,79.098 202.333,55.648 202.333 L 38.833 202.333 38.833 171.250 L 38.833 140.167 56.708 140.167 C 71.106 140.167,75.216 140.216,77.833 140.418 M171.645 145.739 C 178.001 148.960,180.126 167.221,175.158 175.929 C 171.555 182.245,161.161 182.102,157.405 175.685 C 152.943 168.062,155.857 155.451,163.808 147.971 C 166.546 145.395,169.376 144.589,171.645 145.739 M243.253 166.743 C 247.392 169.168,248.711 177.093,246.578 186.712 C 245.485 191.639,240.919 197.503,236.764 199.315 C 230.276 202.144,222.484 197.246,222.212 190.167 C 221.802 179.532,236.726 162.918,243.253 166.743 M201.417 172.744 C 206.497 174.096,209.987 178.540,212.755 187.181 C 214.093 191.356,214.560 192.643,215.318 194.245 C 216.336 196.399,217.695 198.573,219.072 200.250 C 222.902 204.918,223.222 205.456,223.310 207.375 C 223.678 215.446,211.559 223.306,204.667 219.466 C 202.036 218.000,200.973 217.328,199.309 216.080 C 193.653 211.835,187.054 209.863,180.542 210.470 C 171.304 211.332,165.612 207.782,163.485 199.833 C 161.793 193.513,164.139 188.851,169.833 187.219 C 174.948 185.752,179.262 183.414,183.167 179.992 C 190.442 173.616,196.161 171.345,201.417 172.744 " stroke="none" fill="#fc5404" fill-rule="evenodd"/><path id="path1" d="M53.167 63.333 L 53.167 96.667 200.000 96.667 L 346.833 96.667 346.833 63.333 L 346.833 30.000 200.000 30.000 L 53.167 30.000 53.167 63.333 M77.891 38.875 C 78.730 39.631,79.454 40.288,79.500 40.334 C 79.546 40.380,80.258 41.018,81.083 41.751 C 81.908 42.484,82.621 43.121,82.667 43.167 C 82.754 43.254,87.002 47.050,87.981 47.917 C 88.292 48.192,88.630 48.492,88.732 48.585 C 88.833 48.677,89.967 49.689,91.250 50.835 C 92.533 51.980,93.621 52.955,93.667 53.001 C 93.712 53.047,94.425 53.685,95.250 54.417 C 96.075 55.150,96.787 55.788,96.833 55.833 C 96.879 55.879,97.592 56.516,98.417 57.249 C 99.242 57.982,99.954 58.620,100.000 58.666 C 100.046 58.712,100.721 59.313,101.500 60.000 C 102.279 60.688,102.954 61.288,103.000 61.333 C 103.131 61.464,104.624 62.799,106.169 64.167 C 106.946 64.854,107.994 65.793,108.499 66.253 C 109.004 66.713,110.129 67.721,111.000 68.493 C 111.871 69.264,112.771 70.065,113.000 70.272 L 113.417 70.649 113.372 54.075 L 113.327 37.500 119.164 37.500 L 125.000 37.500 125.000 63.250 L 125.000 89.000 121.236 89.000 L 117.472 89.000 114.944 86.708 C 113.554 85.448,112.379 84.379,112.333 84.333 C 112.287 84.287,111.500 83.575,110.583 82.750 C 109.667 81.925,108.879 81.213,108.833 81.167 C 108.787 81.121,108.037 80.446,107.167 79.667 C 106.296 78.887,105.546 78.209,105.500 78.158 C 105.454 78.108,103.842 76.649,101.917 74.916 C 99.992 73.183,97.554 70.981,96.500 70.022 C 93.320 67.130,93.144 66.971,91.417 65.416 C 90.500 64.592,89.712 63.879,89.667 63.833 C 89.621 63.788,88.871 63.112,88.000 62.333 C 87.129 61.554,86.379 60.879,86.333 60.833 C 86.287 60.787,85.500 60.075,84.584 59.250 C 83.668 58.425,82.543 57.404,82.084 56.980 C 81.625 56.557,80.969 55.968,80.625 55.671 L 80.000 55.132 80.000 72.066 L 80.000 89.000 74.250 89.000 L 68.500 89.000 68.500 63.250 L 68.500 37.500 72.432 37.500 L 76.365 37.500 77.891 38.875 M171.710 37.979 C 193.162 42.980,199.414 69.611,182.399 83.514 C 173.966 90.405,161.571 91.049,152.377 85.074 C 135.644 74.200,136.760 49.728,154.417 40.340 C 156.854 39.044,159.451 38.215,163.000 37.598 C 164.225 37.385,170.302 37.651,171.710 37.979 M243.192 37.888 C 253.882 39.310,259.643 43.106,263.399 51.204 C 269.977 65.385,263.878 82.887,250.900 87.070 C 245.332 88.865,245.128 88.879,225.125 88.955 L 207.833 89.020 207.833 63.245 L 207.833 37.470 224.542 37.550 C 238.352 37.616,241.587 37.674,243.192 37.888 M331.500 42.833 L 331.500 48.167 306.583 48.167 L 281.667 48.167 281.667 42.833 L 281.667 37.500 306.583 37.500 L 331.500 37.500 331.500 42.833 M220.000 63.256 L 220.000 78.203 229.792 78.117 C 241.007 78.020,242.712 77.859,246.281 76.567 C 251.214 74.780,253.678 70.225,253.664 62.923 C 253.648 55.391,250.617 50.858,244.574 49.333 C 241.163 48.473,240.864 48.453,230.125 48.378 L 220.000 48.308 220.000 63.256 M163.833 48.750 C 152.110 50.771,147.460 65.265,155.837 73.677 C 165.110 82.990,181.000 76.459,181.000 63.333 C 181.000 54.105,172.863 47.193,163.833 48.750 M316.833 62.250 L 316.833 67.500 299.250 67.500 L 281.667 67.500 281.667 62.250 L 281.667 57.000 299.250 57.000 L 316.833 57.000 316.833 62.250 M331.833 83.583 L 331.833 89.000 306.750 89.000 L 281.667 89.000 281.667 83.583 L 281.667 78.167 306.750 78.167 L 331.833 78.167 331.833 83.583 M25.417 250.007 C 16.230 251.437,10.859 260.311,13.756 269.272 C 16.941 279.124,31.009 282.448,38.687 275.163 L 39.583 274.312 38.417 273.214 C 37.775 272.610,36.977 271.857,36.643 271.541 L 36.036 270.967 35.309 271.656 C 27.910 278.675,15.649 271.076,18.811 261.431 C 21.139 254.330,30.447 252.072,35.518 257.378 L 36.010 257.893 36.713 257.230 C 37.100 256.865,37.892 256.115,38.474 255.565 L 39.531 254.563 38.724 253.763 C 35.654 250.719,30.389 249.233,25.417 250.007 M65.596 250.018 C 49.556 252.357,48.924 275.161,64.802 278.673 C 74.918 280.910,83.726 274.274,83.726 264.417 C 83.726 254.840,75.784 248.532,65.596 250.018 M151.417 250.019 C 145.842 250.830,142.430 254.764,143.159 259.542 C 143.736 263.331,145.913 264.906,153.083 266.722 C 158.293 268.041,159.373 268.622,159.839 270.355 C 161.101 275.040,151.100 276.125,145.030 271.962 C 144.634 271.690,144.292 271.494,144.269 271.526 C 144.247 271.557,144.016 272.071,143.756 272.667 C 143.497 273.262,143.108 274.139,142.892 274.614 C 142.385 275.732,142.371 275.671,143.292 276.272 C 151.119 281.375,163.135 279.328,164.940 272.583 C 166.346 267.325,163.635 264.393,155.463 262.332 C 151.350 261.295,149.872 260.709,149.103 259.811 C 147.733 258.211,148.411 256.050,150.620 254.969 L 151.750 254.417 154.500 254.419 C 157.514 254.422,158.795 254.719,161.335 256.001 L 162.346 256.511 162.573 255.964 C 163.230 254.383,164.000 252.423,164.000 252.332 C 164.000 252.126,161.549 251.025,160.167 250.610 C 157.700 249.869,154.113 249.627,151.417 250.019 M372.619 250.004 C 357.560 252.382,355.582 273.211,369.944 278.175 C 374.651 279.802,381.305 279.007,385.410 276.327 L 386.667 275.507 386.667 269.753 L 386.667 264.000 384.083 264.000 L 381.500 264.000 381.500 268.477 L 381.500 272.954 380.530 273.390 C 371.371 277.500,362.322 268.549,366.683 259.692 C 369.458 254.055,378.297 252.736,383.047 257.250 C 383.638 257.811,383.543 257.860,385.425 256.019 L 387.024 254.454 386.304 253.708 C 383.481 250.783,377.659 249.208,372.619 250.004 M100.667 264.417 L 100.667 278.667 103.333 278.667 L 106.000 278.667 106.006 269.125 L 106.011 259.583 106.354 260.000 C 106.543 260.229,106.934 260.710,107.224 261.069 C 107.513 261.427,108.489 262.627,109.392 263.735 C 110.295 264.843,111.205 265.960,111.415 266.218 C 111.624 266.475,113.992 269.381,116.677 272.676 L 121.558 278.667 123.779 278.667 L 126.000 278.667 126.000 264.417 L 126.000 250.167 123.335 250.167 L 120.669 250.167 120.626 259.689 L 120.583 269.212 116.750 264.500 C 114.642 261.909,111.867 258.502,110.583 256.928 C 109.300 255.354,107.542 253.189,106.676 252.117 L 105.102 250.167 102.884 250.167 L 100.667 250.167 100.667 264.417 M181.501 259.125 C 181.501 268.904,181.577 269.965,182.425 272.094 C 184.222 276.604,187.710 278.780,193.417 278.952 C 200.183 279.156,204.273 276.394,205.931 270.500 C 206.207 269.519,206.241 268.504,206.292 259.792 L 206.348 250.167 203.758 250.167 L 201.167 250.167 201.163 258.458 C 201.159 268.674,201.000 269.970,199.509 271.951 C 197.268 274.928,191.530 275.212,188.851 272.478 C 186.967 270.556,186.833 269.658,186.833 258.906 L 186.833 250.167 184.167 250.167 L 181.500 250.167 181.501 259.125 M225.000 264.417 L 225.000 278.667 235.083 278.667 L 245.167 278.667 245.167 276.417 L 245.167 274.167 237.750 274.167 L 230.333 274.167 230.333 262.167 L 230.333 250.167 227.667 250.167 L 225.000 250.167 225.000 264.417 M254.333 252.500 L 254.333 254.833 259.083 254.833 L 263.833 254.833 263.833 266.750 L 263.833 278.667 266.500 278.667 L 269.167 278.667 269.167 266.750 L 269.167 254.833 273.833 254.833 L 278.500 254.833 278.500 252.500 L 278.500 250.167 266.417 250.167 L 254.333 250.167 254.333 252.500 M293.667 264.417 L 293.667 278.667 296.417 278.667 L 299.167 278.667 299.167 264.417 L 299.167 250.167 296.417 250.167 L 293.667 250.167 293.667 264.417 M318.000 264.417 L 318.000 278.667 320.665 278.667 L 323.331 278.667 323.374 269.152 L 323.417 259.637 324.329 260.777 C 324.832 261.404,325.370 262.067,325.526 262.250 C 325.787 262.557,327.219 264.315,330.474 268.322 C 331.176 269.186,332.082 270.311,332.488 270.822 C 332.893 271.332,333.271 271.787,333.327 271.833 C 333.382 271.879,333.725 272.292,334.089 272.750 C 334.453 273.208,334.825 273.666,334.917 273.768 C 335.008 273.870,335.943 275.014,336.993 276.310 L 338.903 278.667 341.118 278.667 L 343.333 278.667 343.333 264.417 L 343.333 250.167 340.668 250.167 L 338.003 250.167 337.960 259.683 L 337.917 269.199 336.250 267.158 C 335.333 266.035,334.208 264.650,333.750 264.080 C 331.408 261.168,330.927 260.577,330.838 260.500 C 330.784 260.454,330.110 259.629,329.338 258.667 C 327.373 256.214,326.599 255.263,326.488 255.167 C 326.435 255.121,326.060 254.664,325.654 254.152 C 325.249 253.640,324.361 252.534,323.683 251.694 L 322.449 250.167 320.225 250.167 L 318.000 250.167 318.000 264.417 M71.067 254.829 C 80.935 257.353,80.797 271.823,70.884 274.062 C 64.912 275.412,59.512 271.750,58.683 265.789 C 57.693 258.675,64.063 253.038,71.067 254.829 " stroke="none" fill="#0c044c" fill-rule="evenodd"/><path id="path2" d="" stroke="none" fill="#1002c28" fill-rule="evenodd"/><path id="path3" d="" stroke="none" fill="#1002c28" fill-rule="evenodd"/><path id="path4" d="" stroke="none" fill="#1002c28" fill-rule="evenodd"/></g>
                    </svg>
                </a>
                

                <a class="h-18 md:w-72 w-full flex justify-center items-center gap-2 border border-[var(--vp-c-divider)] rounded-lg opacity-75 grayscale hover:grayscale-0 hover:opacity-100"
                    href="https://github.com/sponsors/Paymenter" target="_blank" aria-label="Become a Sponsor">
                    Become a Sponsor
                    <arrow-right-up-fill class="size-5" />
                </a>

            </div>
        </section>


        <section class="py-12 relative overflow-hidden">

            <div
                class="absolute inset-0 z-0 flex items-center justify-center transform-3d rotate-x-55 rotate-y-0 -rotate-z-45">
                <div
                    class="![animation-duration:4s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)] via-[var(--vp-c-brand-1)] to-[var(--vp-c-border)] from-80% via-90% to-100% p-px shadow-2xl shadow-[#4060ff]/20">
                    <div class="bg-[var(--vp-c-bg)] p-20 rounded-3xl">

                        <div
                            class="![animation-duration:3s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)] via-[var(--vp-c-brand-1)] to-[var(--vp-c-border)] from-80% via-90% to-100% p-px">

                            <div class="bg-[var(--vp-c-bg)] p-20 rounded-3xl">

                                <div
                                    class="![animation-duration:2s] ![animation-iteration-count:infinite] animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-[var(--vp-c-border)] via-[var(--vp-c-brand-1)] to-[var(--vp-c-border)] from-80% via-90% to-100% p-px">

                                    <div class="bg-[var(--vp-c-bg)] p-20 rounded-3xl">
                                        <div
                                            class="animate-pulse ![animation-duration:3s] ![animation-iteration-count:infinite] p-10 rounded-3xl bg-[#4060ff]/20 border border-[#4060ff] shadow-2xl shadow-[#4060ff]/20 text-[var(--vp-c-text-1)]/50">
                                            <cloud-fill class="size-24" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12 mt-20">

                <SectionBlock icon="cloud-fill" tagline="Cloud" title="Hassle-free cloud hosting"
                    description="Deploy Paymenter instantly on our optimized cloud infrastructure. Scale effortlessly as your business grows, with automatic updates and backups included. Start for just $5/month with our beginner-friendly hosting solution." />

                <div class="flex flex-col justify-center lg:items-center items-start">
                    <div class="flex gap-4 justify-center">
                        <a href="https://paas.paymenter.org/" class="btn btn-primary svg-left" style="color:white;">
                            {{ frontmatter.featuresLanding.cloud.paasButton }}
                            <arrow-right-up-box-fill class="size-5" />
                        </a>
                        <a href="https://paas.paymenter.org" target="_blank" class="btn svg-left">
                            About PaaS
                            <arrow-right-fill class="size-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="relative grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                <FeatureItem icon="translate-2" title="Multi-language"
                    description="Support multiple languages seamlessly with built-in translation." />
                <FeatureItem icon="currency-fill" title="Multi-currency"
                    description="Accept payments with automatic currency conversion and rates." />
                <FeatureItem icon="customer-service-fill" title="Support System"
                    description="Manage customer issues with an integrated ticketing solution." />
                <FeatureItem icon="megaphone-fill" title="Announcements"
                    description="Keep your customers informed with a built-in blog system." />
                <FeatureItem icon="hand-coin-fill" title="Affiliates"
                    description="Grow your business with a powerful affiliate tracking and reward system." />
            </div>
        </section>

        <section class="py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12">

                <SectionBlock icon="team-fill" tagline="Community" title="Connect With Our Community"
                    description="Connect with thousands of hosting providers and developers. Share insights, get support, and contribute to making Paymenter even better. Join our Discord server and GitHub to be part of the journey.">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <FeatureItem icon="download-fill" title="+24,000" description="Total Software Downloads" />
                        <FeatureItem icon="github-fill" title="+920" description="GitHub Stars and Growing" />
                        <FeatureItem icon="user-community-fill" title="+2,450" description="Active Community Members" />
                    </div>
                </SectionBlock>

                <div class="flex flex-col justify-center lg:items-center items-start">
                    <div class="flex gap-4 justify-center">
                        <a href="https://discord.gg/paymenter-882318291014651924" class="btn btn-secondary svg-right">
                            <discord-fill class="size-5 fill-[#5865F2]" />
                            Discord
                        </a>
                        <a href="https://github.com/Paymenter/Paymenter" target="_blank" class="btn svg-left">
                            {{ frontmatter.supportbanner.howToContribute }}
                            <arrow-right-fill class="size-5" />
                        </a>
                    </div>
                </div>

            </div>
        </section>

    </div>
</template>
