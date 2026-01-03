<script setup>
import { computed, defineAsyncComponent } from "vue";
import { useData } from "vitepress";
import { ref, onMounted } from "vue";
import SectionBlock from "@components/landing/SectionBlock.vue";
import FeatureItem from "@components/landing/FeatureItem.vue";

const { frontmatter } = useData();

const sponsorIcons = import.meta.glob("../sponsors/*.vue");
const sponsors = computed(() => {
    return (frontmatter.value.sponsors || []).map((s) => {
        const path = Object.keys(sponsorIcons).find((p) =>
            p.toLowerCase().endsWith(`/${s.component.toLowerCase()}.vue`),
        );
        return {
            ...s,
            url: `${s.url}?rel=paymenter`,
            comp: path ? defineAsyncComponent(sponsorIcons[path]) : null,
        };
    });
});

// Reactive discord member count
const discordMembers = ref("2,570+");
const githubStars = ref("1,000+");
const githubDownloads = ref("27,000+");

// Fetch live discord member count
onMounted(async () => {
    try {
        const response = await fetch(
            "https://api.paymenter.org/website-statistics",
        );
        const data = await response.json();
        if (data.discord_members) {
            discordMembers.value = `${data.discord_members.toLocaleString()}+`;
        }
        if (data.github_stars) {
            githubStars.value = `${data.github_stars.toLocaleString()}+`;
        }
        if (data.github_downloads) {
            githubDownloads.value = `${data.github_downloads.toLocaleString()}+`;
        }
    } catch (error) {
        console.log("Failed to fetch Discord members:", error);
        // Keep default value on error
    }
});
</script>

<template>
    <div class="p-4 md:p-0">
        <section class="py-12 relative">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <svg
                            class="size-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#888b93"
                        >
                            <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM16.8201 17.0761C18.1628 15.8007 19 13.9981 19 12C19 8.13401 15.866 5 12 5C10.9391 5 9.9334 5.23599 9.03241 5.65834L10.0072 7.41292C10.6177 7.14729 11.2917 7 12 7C14.7614 7 17 9.23858 17 12H14L16.8201 17.0761ZM14.9676 18.3417L13.9928 16.5871C13.3823 16.8527 12.7083 17 12 17C9.23858 17 7 14.7614 7 12H10L7.17993 6.92387C5.83719 8.19929 5 10.0019 5 12C5 15.866 8.13401 19 12 19C13.0609 19 14.0666 18.764 14.9676 18.3417Z"
                            ></path>
                        </svg>
                        <span
                            class="text-sm uppercase tracking-widest text-[#9ca3af]"
                        >
                            What is Paymenter?
                        </span>
                    </div>
                    <div class="text-3xl font-semibold">
                        A next-generation billing platform for modern hosting
                        businesses
                    </div>
                </div>
                <div class="flex flex-col justify-end">
                    <span
                        class="flex justify-center font-normal text-(--vp-c-text-2)"
                    >
                        Paymenter simplifies billing, enhances transactions, and
                        supports seamless customizations to meet your unique
                        business needs.
                    </span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                <FeatureItem
                    icon="robot-3-fill"
                    title="Automation"
                    description="Streamline operations with automated billing and service deployment."
                />
                <FeatureItem
                    icon="phone-find-fill"
                    title="Responsive"
                    description="Perfect user experience across all devices, from desktop to mobile."
                />
                <FeatureItem
                    icon="flashlight-fill"
                    title="Performant"
                    description="Lightning-fast operations for smooth and reliable transactions."
                />
                <FeatureItem
                    icon="brush-ai-fill"
                    title="Personalization"
                    description="Create custom themes and experiences tailored to your business."
                />
                <FeatureItem
                    icon="open-source-fill"
                    title="Open-Source"
                    description="Free to use, transparent code, and backed by a growing community of developers."
                />
            </div>
        </section>

        <section class="py-12">
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-16 p-6 items-center relative"
            >
                <div class="absolute inset-0 z-0">
                    <div
                        class="animate-pulse [animation-duration:8s]! [animation-iteration-count:infinite]! relative w-full h-[500px] bg-(--vp-c-brand-1)/5 transform-3d rotate-x-25 rotate-y-18 -rotate-z-8 mask-x-from-70% mask-x-to-100% mask-y-from-70% mask-y-to-100%"
                    >
                        <div
                            class="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--vp-c-brand-1)_10%,transparent)_1px,transparent_1px)] bg-size-[40px_100%]"
                        ></div>
                        <div
                            class="absolute inset-0 bg-[linear-gradient(0deg,color-mix(in_srgb,var(--vp-c-brand-1)_10%,transparent)_1px,transparent_1px)] bg-size-[100%_40px]"
                        ></div>
                        <div
                            class="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--vp-c-brand-1)_20%,transparent)_1px,transparent_1px)] bg-size-[80px_100%]"
                        ></div>
                    </div>
                </div>

                <div
                    class="order-1 lg:order-2 -ml-4 lg:-ml-20 flex flex-col gap-14 transform-3d rotate-x-25 rotate-y-18 -rotate-z-8 mask-r-from-80%"
                >
                    <div
                        class="overflow-hidden group/card [animation-duration:9s]! [animation-iteration-count:infinite]! animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-(--vp-c-divider) via-(--vp-c-text-3) to-(--vp-c-divider) hover:via-(--vp-c-brand-1) from-80% via-90% to-100% p-px w-auto max-w-fit"
                    >
                        <div
                            class="bg-(--vp-c-bg) p-6 rounded-3xl flex flex-col items-start gap-8 relative z-10"
                        >
                            <div class="flex h-full items-center gap-3">
                                <div
                                    class="p-2 border border-dashed border-(--vp-c-text-3)/60 group-hover/card:border-(--vp-c-brand-1) rounded-lg"
                                >
                                    <div
                                        class="h-4 w-4 bg-(--vp-c-text-3)/60 rounded-sm group-hover/card:bg-(--vp-c-brand-1) animate-pulse [animation-duration:3s]! [animation-iteration-count:infinite]!"
                                    ></div>
                                </div>
                                <p
                                    class="uppercase tracking-widest font-light font-mono text-(--vp-c-text-3)"
                                >
                                    Servers
                                </p>
                            </div>
                            <div class="flex items-center gap-2">
                                <a
                                    href="/docs/extensions/convoy"
                                    class="relative group/app"
                                    aria-label="Convoy"
                                >
                                    <convoy
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#1B1B1B] ring-6 ring-white/10"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <a
                                    href="/docs/extensions/cpanel"
                                    class="relative group/app"
                                    aria-label="Cpanel"
                                >
                                    <cpanel
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#FF6C2C] ring-6 ring-[#FF6C2C]/30"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <a
                                    href="/docs/extensions/enhance"
                                    class="relative group/app"
                                    aria-label="Enhance"
                                >
                                    <enhance
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#211451] ring-6 ring-[#7363af]/40"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <a
                                    href="/docs/extensions/plesk"
                                    class="relative group/app"
                                    aria-label="Plesk"
                                >
                                    <plesk
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-white ring-6 ring-white/20"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <a
                                    href="/docs/extensions/pterodactyl"
                                    class="relative group/app"
                                    aria-label="Pterodactyl"
                                >
                                    <pterodactyl
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#10529F] ring-6 ring-[#10529F]/40"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <a
                                    href="/docs/extensions/directadmin"
                                    class="relative group/app"
                                    aria-label="DirectAdmin"
                                >
                                    <directadmin
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#22272E] ring-6 ring-[#22272E]/40"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <a
                                    href="/docs/extensions/virtualizor"
                                    class="relative group/app"
                                    aria-label="Virtualizor"
                                >
                                    <virtualizor
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-white ring-6 ring-white/20"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <a
                                    href="/docs/extensions/virtfusion"
                                    class="relative group/app"
                                    aria-label="VirtFusion"
                                >
                                    <virtfusion
                                        class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#166BBD] ring-6 ring-[#166BBD]/40"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="overflow-hidden lg:ml-24 group/card [animation-duration:9s]! [animation-iteration-count:infinite]! animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-(--vp-c-divider) via-(--vp-c-text-3) to-(--vp-c-divider) hover:via-(--vp-c-brand-1) from-80% via-90% to-100% p-px w-auto max-w-fit"
                    >
                        <div
                            class="bg-(--vp-c-bg) p-6 rounded-3xl flex flex-col items-start gap-8 relative z-10"
                        >
                            <div class="flex h-full items-center gap-3">
                                <div
                                    class="p-2 border border-dashed border-(--vp-c-text-3)/60 group-hover/card:border-(--vp-c-brand-1) rounded-lg"
                                >
                                    <div
                                        class="h-4 w-4 bg-(--vp-c-text-3)/60 rounded-sm group-hover/card:bg-(--vp-c-brand-1) animate-pulse [animation-duration:3s]! [animation-iteration-count:infinite]!"
                                    ></div>
                                </div>
                                <p
                                    class="uppercase tracking-widest font-light font-mono text-(--vp-c-text-3)"
                                >
                                    Payment Gateways
                                </p>
                            </div>
                            <div class="flex items-center gap-2">
                                <a
                                    href="/docs/extensions/mollie"
                                    class="relative group/app"
                                    aria-label="Mollie"
                                >
                                    <mollie
                                        class="group-hover/app:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-black ring-6 ring-white/10"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <xendit
                                    class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#3b68ff] ring-6 ring-[#3b68ff]/20"
                                />
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <a
                                    href="/docs/extensions/paypal"
                                    class="relative group/app"
                                    aria-label="PayPal"
                                >
                                    <paypal
                                        class="group-hover/app:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-white ring-6 ring-white/20"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <a
                                    href="/docs/extensions/stripe"
                                    class="relative group/app"
                                    aria-label="Stripe"
                                >
                                    <stripe
                                        class="group-hover/app:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-[#635BFF] ring-6 ring-[#635BFF]/40"
                                    />
                                    <div
                                        class="absolute -top-4 -right-4 hidden group-hover/app:block bg-(--vp-c-text-3)/60 p-0.5 rounded-sm pointer-events-none"
                                    >
                                        <arrow-right-up-box-fill
                                            class="size-6"
                                        />
                                    </div>
                                </a>
                                <div
                                    class="h-px w-4 border border-dashed border-(--vp-c-text-3)/60"
                                ></div>
                                <midtrans
                                    class="hover:scale-120 flex items-center justify-center size-18 rounded-xl p-4 bg-white ring-6 ring-white/20"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col order-2 lg:order-2 z-10">
                    <SectionBlock
                        icon="puzzle-2-fill"
                        tagline="Extensible"
                        title="Powerful Extensions & Integrations"
                        description="Customize your billing platform with a growing marketplace of extensions. From payment gateways to service integrations, build the perfect solution for your business."
                    >
                        <div class="flex gap-6 justify-start mt-8 flex-wrap">
                            <a
                                href="/marketplace/"
                                class="btn btn-primary svg-left"
                                style="color: white"
                            >
                                {{
                                    frontmatter.featuresLanding.extensible
                                        .marketplaceButton
                                }}
                                <arrow-right-fill class="size-5 shrink-0" />
                            </a>
                            <a
                                href="https://github.com/Paymenter/Paymenter/tree/master/extensions"
                                target="_blank"
                                class="btn svg-left"
                            >
                                Bundled Extensions
                                <arrow-right-up-box-fill
                                    class="size-5 shrink-0"
                                />
                            </a>
                        </div>
                    </SectionBlock>
                </div>
            </div>
        </section>

        <section
            class="py-16 relative overflow-hidden mask-y-from-90% mask-y-to-100%"
        >
            <div
                class="absolute inset-0 z-0 flex items-center justify-center transform-3d rotate-x-55 rotate-y-0 -rotate-z-45"
            >
                <div
                    class="h-auto w-full [animation-duration:4s]! [animation-iteration-count:infinite]! animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-full bg-conic/[from_var(--border-angle)] from-(--vp-c-border) via-[#1fe6a3] to-(--vp-c-border) from-80% via-90% to-100% p-px shadow-2xl shadow-[#1fe6a3]/10"
                >
                    <div class="bg-(--vp-c-bg) p-20 rounded-full">
                        <div
                            class="[animation-duration:3s]! [animation-iteration-count:infinite]! animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-full bg-conic/[from_var(--border-angle)] from-(--vp-c-border) via-[#1fe6a3] to-(--vp-c-border) from-80% via-90% to-100% p-px"
                        >
                            <div class="bg-(--vp-c-bg) p-20 rounded-full">
                                <div
                                    class="[animation-duration:2s]! [animation-iteration-count:infinite]! animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-full bg-conic/[from_var(--border-angle)] from-(--vp-c-border) via-[#1fe6a3] to-(--vp-c-border) from-80% via-90% to-100% p-px"
                                >
                                    <div
                                        class="bg-(--vp-c-bg) p-20 rounded-full"
                                    >
                                        <div
                                            class="animate-pulse [animation-duration:3s]! [animation-iteration-count:infinite]! p-10 rounded-full border border-[#1fe6a3] shadow-2xl shadow-[#4060ff]/20 text-(--vp-c-text-1)/50"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col p-6 items-center relative">
                <div
                    class="flex flex-col gap-6 lg:max-w-2xl items-center text-center"
                >
                    <div class="flex items-center gap-3 text-[#9ca3af]">
                        <braces-fill class="size-5" />
                        <span
                            class="text-sm uppercase tracking-widest text-[#9ca3af]"
                        >
                            Paymenter API
                        </span>
                    </div>
                    <div class="text-3xl font-semibold">
                        Extend and Automate with the API
                    </div>
                    <span class="flex font-normal text-(--vp-c-text-2)">
                        Our REST API gives you the power to control your entire
                        platform. Build custom solutions, automate complex
                        workflows, and integrate everything seamlessly.
                    </span>
                    <div class="flex gap-4 justify-center mt-4 flex-wrap">
                        <a
                            href="/api/"
                            class="btn btn-primary svg-left"
                            style="color: white"
                        >
                            Explore the API
                            <arrow-right-fill class="size-5 shrink-0" />
                        </a>
                        <a
                            href="https://paymenter.org/openapi.json"
                            target="_blank"
                            class="btn svg-left"
                        >
                            OpenAPI Spec
                            <arrow-right-up-box-fill class="size-5 shrink-0" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-24 relative overflow-hidden">
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-16 p-6 items-center"
            >
                <div class="flex flex-col z-10 order-2 lg:order-1">
                    <SectionBlock
                        icon="refresh-fill"
                        tagline="Migration"
                        title="Move to Paymenter with Ease"
                        description="Transitioning from WHMCS? Our automated migration tool securely transfers your clients, services, and invoices in minutes. We are actively working on importers for Blesta and more."
                    >
                        <div class="flex gap-6 justify-start mt-8 flex-wrap">
                            <a
                                href="/docs/guides/whmcs-importer"
                                class="btn btn-primary svg-left"
                                style="color: white"
                            >
                                View Migration Guide
                                <arrow-right-fill class="size-5 shrink-0" />
                            </a>
                            <a
                                href="https://github.com/Paymenter/Paymenter/blob/master/app/Console/Commands/ImportFromWhmcs.php"
                                target="_blank"
                                class="btn svg-right"
                            >
                                <github-fill class="size-5 shrink-0" />
                                View on GitHub
                            </a>
                        </div>
                    </SectionBlock>
                </div>

                <div
                    class="order-1 lg:order-2 relative w-full h-100 flex items-center justify-center"
                >
                    <div
                        class="order-1 lg:order-2 w-full flex justify-center absolute opacity-20"
                    >
                        <div class="relative w-full max-w-lg">
                            <div
                                class="absolute -inset-4 bg-linear-to-r from-violet-600/30 to-blue-600/30 rounded-2xl blur-2xl opacity-50 animate-pulse"
                            ></div>
                            <div
                                class="relative bg-[#e3e5f3] dark:bg-[#151517] border border-(--vp-c-divider) rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm"
                            >
                                <div
                                    class="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5"
                                >
                                    <div
                                        class="ml-4 text-xs text-gray-500 font-mono"
                                    >
                                        Paymenter importer — php
                                    </div>
                                </div>

                                <div
                                    class="p-6 font-mono text-xs md:text-sm space-y-4"
                                >
                                    <div class="flex gap-2">
                                        <span class="text-green-500 font-bold"
                                            >➜</span
                                        >
                                        <span class="text-blue-400">~</span>
                                        <span class="text-gray-300"
                                            >php artisan app:import-from-whmcs
                                            whmcs_temp</span
                                        >
                                    </div>

                                    <div class="space-y-1 text-gray-400">
                                        <div class="flex gap-2">
                                            <span class="text-blue-500">ℹ</span>
                                            <span
                                                >Connecting to WHMCS
                                                Database...</span
                                            >
                                            <span class="text-green-500 ml-auto"
                                                >Connected</span
                                            >
                                        </div>
                                        <div
                                            class="w-full bg-gray-800 h-1 rounded-full overflow-hidden"
                                        >
                                            <div
                                                class="bg-green-500 h-full w-full"
                                            ></div>
                                        </div>
                                    </div>

                                    <div class="space-y-1 text-gray-400">
                                        <div class="flex gap-2">
                                            <span class="text-blue-500">ℹ</span>
                                            <span
                                                >Importing 2,540
                                                Clients...</span
                                            >
                                            <span class="text-green-500 ml-auto"
                                                >Done</span
                                            >
                                        </div>
                                        <div
                                            class="w-full bg-gray-800 h-1 rounded-full overflow-hidden"
                                        >
                                            <div
                                                class="bg-green-500 h-full w-full"
                                            ></div>
                                        </div>
                                    </div>

                                    <div class="space-y-1 text-gray-400">
                                        <div class="flex gap-2">
                                            <span class="text-blue-500">ℹ</span>
                                            <span
                                                >Importing Invoices &
                                                Transactions...</span
                                            >
                                            <span class="text-green-500 ml-auto"
                                                >Done</span
                                            >
                                        </div>
                                        <div
                                            class="w-full bg-gray-800 h-1 rounded-full overflow-hidden"
                                        >
                                            <div
                                                class="bg-green-500 h-full w-full"
                                            ></div>
                                        </div>
                                    </div>

                                    <div
                                        class="pt-2 text-green-400 flex items-center gap-2"
                                    >
                                        <svg
                                            class="size-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span
                                            >Migration Completed
                                            Successfully!</span
                                        >
                                    </div>

                                    <div class="flex gap-2 animate-pulse">
                                        <span class="text-green-500 font-bold"
                                            >➜</span
                                        >
                                        <span class="text-blue-400">~</span>
                                        <span
                                            class="w-2 h-5 bg-gray-500"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative w-full h-full transform-3d rotate-x-25 rotate-y-18 -rotate-z-8 overflow-hidden"
                    >
                        <div
                            class="absolute inset-0 bg-[linear-gradient(90deg,var(--vp-c-divider)_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.2]"
                        ></div>
                        <div
                            class="absolute inset-0 bg-[linear-gradient(0deg,var(--vp-c-divider)_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.2]"
                        ></div>

                        <svg
                            class="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 500 400"
                            preserveAspectRatio="none"
                        >
                            <path
                                id="path-whmcs"
                                d="M 76 92 C 250 92, 250 200, 424 200"
                                fill="none"
                                stroke="var(--vp-c-brand-1)"
                                stroke-width="2"
                                stroke-dasharray="8 8"
                                class="opacity-30"
                            />
                            <circle r="4" fill="var(--vp-c-brand-1)">
                                <animateMotion
                                    dur="2s"
                                    repeatCount="indefinite"
                                    calcMode="linear"
                                >
                                    <mpath href="#path-whmcs" />
                                </animateMotion>
                            </circle>

                            <path
                                id="path-blesta"
                                d="M 76 308 C 250 308, 250 200, 424 200"
                                fill="none"
                                stroke="var(--vp-c-text-3)"
                                stroke-width="2"
                                stroke-dasharray="8 8"
                                class="opacity-20"
                            />
                            <circle
                                r="3"
                                fill="var(--vp-c-text-3)"
                                opacity="0.6"
                            >
                                <animateMotion
                                    dur="4s"
                                    repeatCount="indefinite"
                                    calcMode="linear"
                                >
                                    <mpath href="#path-blesta" />
                                </animateMotion>
                            </circle>
                        </svg>

                        <div class="absolute inset-0 z-10">
                            <div
                                class="absolute left-[15.2%] top-[23%] -translate-x-1/2 -translate-y-1/2 group cursor-default"
                            >
                                <whmcs-icon
                                    class="flex items-center justify-center size-24 rounded-xl p-4 bg-[#003656] ring-8 ring-[#003656]/50 shadow-lg relative z-20"
                                />
                                <div
                                    class="absolute -right-3 top-1/2 -translate-y-1/2 size-4 bg-(--vp-c-brand-1) rounded-full border-4 border-(--vp-c-bg-soft) z-30"
                                ></div>
                            </div>

                            <div
                                class="absolute left-[15.2%] top-[77%] -translate-x-1/2 -translate-y-1/2 group cursor-default"
                            >
                                <div class="relative">
                                    <blesta-icon
                                        class="flex items-center justify-center size-24 rounded-xl p-4 bg-white dark:bg-[#1e1e1e] ring-8 ring-gray-500/10 shadow-lg relative z-20"
                                    />
                                    <div
                                        class="absolute -top-6 -right-6 bg-[#1e1e1e] text-white rounded-lg px-4 py-1 text-lg z-20 border-2 border-(--vp-c-brand-1)/50"
                                    >
                                        Soon
                                    </div>
                                </div>
                                <div
                                    class="absolute -right-3 top-1/2 -translate-y-1/2 size-4 bg-gray-400 rounded-full border-4 border-(--vp-c-bg-soft) z-30"
                                ></div>
                            </div>

                            <div
                                class="absolute left-[84.8%] top-[50%] -translate-x-1/2 -translate-y-1/2 group cursor-default"
                            >
                                <div
                                    class="absolute -inset-1 bg-linear-to-br from-(--vp-c-brand-1) to-(--vp-c-brand-2) rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"
                                ></div>
                                <div class="relative z-20">
                                    <paymenter-icon
                                        class="flex items-center justify-center size-24 rounded-xl p-5 bg-[#4060FF] ring-8 ring-[#4060FF]/30 shadow-2xl"
                                    />
                                </div>
                                <div
                                    class="absolute -left-3 top-1/2 -translate-y-1/2 size-4 bg-(--vp-c-brand-1) rounded-full border-4 border-(--vp-c-bg-soft) z-30"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6">
                <SectionBlock
                    icon="service-fill"
                    tagline="Sponsors"
                    title="Building Together a Sustainable Future for Open-Source Billing"
                />

                <div class="flex flex-col justify-end">
                    <span
                        class="flex justify-center font-normal text-(--vp-c-text-2)"
                    >
                        The continued development and maintenance of Paymenter
                        is made possible by these generous sponsors:
                    </span>
                </div>
            </div>

            <div
                class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12 items-center text-(--vp-c-text-2)"
            >
                <a
                    v-for="sponsor in sponsors"
                    :key="sponsor.name"
                    :href="sponsor.url"
                    target="_blank"
                    :aria-label="sponsor.name"
                    class="group relative h-30 md:w-72 px-8 w-full flex justify-center items-center hover:pb-8 card card-hover"
                >
                    <component :is="sponsor.comp" v-if="sponsor.comp" />
                    <div
                        class="absolute bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                        {{ sponsor.name }}
                    </div>
                </a>

                <a
                    class="flex flex-col justify-center items-center gap-1 relative h-30 md:w-72 px-8 w-full card card-hover"
                    href="https://github.com/sponsors/Paymenter"
                    target="_blank"
                    aria-label="Become a Sponsor"
                >
                    <div class="flex gap-1.5 items-center">
                        <span>Become a Sponsor</span>
                        <arrow-right-up-fill class="size-5" />
                    </div>
                    <span class="text-xs font-normal text-[--vp-c-text-2]"
                        >(30K views/mo)</span
                    >
                </a>
            </div>
        </section>

        <section class="py-12 relative overflow-hidden">
            <div
                class="absolute inset-0 z-0 flex items-center justify-center transform-3d rotate-x-55 rotate-y-0 -rotate-z-45"
            >
                <div
                    class="[animation-duration:4s]! [animation-iteration-count:infinite]! animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-(--vp-c-border) via-(--vp-c-brand-1) to-(--vp-c-border) from-80% via-90% to-100% p-px shadow-2xl shadow-[#4060ff]/20"
                >
                    <div class="bg-(--vp-c-bg) p-20 rounded-3xl">
                        <div
                            class="[animation-duration:3s]! [animation-iteration-count:infinite]! animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-(--vp-c-border) via-(--vp-c-brand-1) to-(--vp-c-border) from-80% via-90% to-100% p-px"
                        >
                            <div class="bg-(--vp-c-bg) p-20 rounded-3xl">
                                <div
                                    class="[animation-duration:2s]! [animation-iteration-count:infinite]! animate-rotate-border transition-all duration-500 ease-out transform-3d rounded-3xl bg-conic/[from_var(--border-angle)] from-(--vp-c-border) via-(--vp-c-brand-1) to-(--vp-c-border) from-80% via-90% to-100% p-px"
                                >
                                    <div
                                        class="bg-(--vp-c-bg) p-20 rounded-3xl"
                                    >
                                        <div
                                            class="animate-pulse [animation-duration:3s]! [animation-iteration-count:infinite]! p-10 rounded-3xl bg-[#4060ff]/20 border border-[#4060ff] shadow-2xl shadow-[#4060ff]/20 text-(--vp-c-text-1)/50"
                                        >
                                            <cloud-fill class="size-24" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="relative grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12 mt-20"
            >
                <SectionBlock
                    icon="cloud-fill"
                    tagline="Cloud"
                    title="Hassle-free cloud hosting"
                    description="Deploy Paymenter instantly on our optimized cloud infrastructure. Scale effortlessly as your business grows, with automatic updates and backups included. Start for just $5/month with our beginner-friendly hosting solution."
                />

                <div
                    class="flex flex-col justify-center lg:items-center items-start"
                >
                    <div class="flex gap-4 justify-center flex-wrap">
                        <a
                            href="https://paas.paymenter.org/"
                            class="btn btn-primary svg-left"
                            style="color: white"
                        >
                            {{ frontmatter.featuresLanding.cloud.paasButton }}
                            <arrow-right-up-box-fill class="size-5 shrink-0" />
                        </a>
                        <a
                            href="https://paas.paymenter.org"
                            target="_blank"
                            class="btn svg-left"
                        >
                            About PaaS
                            <arrow-right-fill class="size-5 shrink-0" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="relative grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                <FeatureItem
                    icon="translate-2"
                    title="Multi-language"
                    description="Support multiple languages seamlessly with built-in translation."
                />
                <FeatureItem
                    icon="currency-fill"
                    title="Multi-currency"
                    description="Accept payments with automatic currency conversion and rates."
                />
                <FeatureItem
                    icon="customer-service-fill"
                    title="Support System"
                    description="Manage customer issues with an integrated ticketing solution."
                />
                <FeatureItem
                    icon="megaphone-fill"
                    title="Announcements"
                    description="Keep your customers informed with a built-in blog system."
                />
                <FeatureItem
                    icon="hand-coin-fill"
                    title="Affiliates"
                    description="Grow your business with a powerful affiliate tracking and reward system."
                />
            </div>
        </section>

        <section class="py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 mb-12">
                <SectionBlock
                    icon="team-fill"
                    tagline="Community"
                    title="Connect With Our Community"
                    description="Connect with thousands of hosting providers and developers. Share insights, get support, and contribute to making Paymenter even better. Join our Discord server and GitHub to be part of the journey."
                >
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <FeatureItem
                            icon="download-fill"
                            :title="githubDownloads"
                            description="Total Software Downloads"
                        />
                        <FeatureItem
                            icon="github-fill"
                            :title="githubStars"
                            description="GitHub Stars and Growing"
                        />
                        <FeatureItem
                            icon="user-community-fill"
                            :title="discordMembers"
                            description="Active Community Members"
                        />
                    </div>
                </SectionBlock>

                <div
                    class="flex flex-col justify-center lg:items-center items-start"
                >
                    <div class="flex gap-4 justify-center flex-wrap">
                        <a
                            href="https://discord.gg/paymenter-882318291014651924"
                            class="btn btn-secondary svg-right"
                        >
                            <discord-fill
                                class="size-5 shrink-0 fill-[#5865F2]"
                            />
                            Discord
                        </a>
                        <a
                            href="https://github.com/Paymenter/Paymenter"
                            target="_blank"
                            class="btn svg-left"
                        >
                            {{ frontmatter.supportbanner.howToContribute }}
                            <arrow-right-fill class="size-5 shrink-0" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
