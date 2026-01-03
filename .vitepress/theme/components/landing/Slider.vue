<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

export default {
    setup() {
        const lightModeImages = [
            "/landing/screenshots/light/dashboard.webp",
            "/landing/screenshots/light/admin-1.webp",
            "/landing/screenshots/light/admin-2.webp",
            "/landing/screenshots/light/admin-3.webp",
        ];
        const darkModeImages = [
            "/landing/screenshots/dark/dashboard.webp",
            "/landing/screenshots/dark/admin-1.webp",
            "/landing/screenshots/dark/admin-2.webp",
            "/landing/screenshots/dark/admin-3.webp",
        ];
        const placeholder =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        const loaded = ref([]);
        const isDarkMode = ref(false);
        const currentImages = computed(() =>
            isDarkMode.value ? darkModeImages : lightModeImages,
        );

        let sliderInstance = null;
        let observer = null;

        onMounted(() => {
            isDarkMode.value =
                document.documentElement.classList.contains("dark");

            sliderInstance = new KeenSlider(".keen-slider", {
                loop: true,
                initial: 0,
                created: (s) => {
                    loaded.value[s.track.details.rel] = true;
                    loaded.value[s.track.details.rel + 1] = true;
                    loaded.value[s.track.details.slides.length - 1] = true;
                },
                animationEnded: (s) => {
                    const idx = s.track.details.rel;
                    const slidesLength = s.track.details.slides.length;

                    loaded.value[idx] = true;
                    loaded.value[(idx + 1) % slidesLength] = true;
                    loaded.value[(idx - 1 + slidesLength) % slidesLength] =
                        true;
                },
            });

            observer = new MutationObserver(() => {
                isDarkMode.value =
                    document.documentElement.classList.contains("dark");
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ["class"],
            });
        });

        onUnmounted(() => {
            if (observer) observer.disconnect();
            if (sliderInstance) sliderInstance.destroy();
        });

        function nextSlide() {
            if (sliderInstance) sliderInstance.next();
        }

        function prevSlide() {
            if (sliderInstance) sliderInstance.prev();
        }

        return { currentImages, loaded, nextSlide, prevSlide, placeholder };
    },
};
</script>

<template>
    <section class="relative">
        <div class="relative">
            <div class="keen-slider">
                <div
                    class="keen-slider__slide relative overflow-hidden"
                    v-for="(src, idx) in currentImages"
                    :key="idx"
                >
                    <div
                        class="mx-auto max-w-(--vp-layout-max-width) aspect-video relative"
                    >
                        <img
                            :src="loaded[idx] ? src : placeholder"
                            alt="Paymenter Screenshot"
                            class="absolute inset-0 w-full h-full object-contain"
                        />
                    </div>
                    <div
                        v-if="!loaded[idx]"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <svg
                            class="w-12 h-12 fill-(--vp-c-text-1) animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>

            <button
                @click="prevSlide"
                aria-label="Previous"
                class="absolute z-10 top-1/2 -translate-y-1/2 left-5 p-2.5 bg-(--vp-c-bg) border border-(--vp-c-divider) rounded-lg cursor-pointer hover:bg-blue-500/10"
            >
                <arrow-left-s-line class="size-6 fill-current" />
            </button>
            <button
                @click="nextSlide"
                aria-label="Next"
                class="absolute z-10 top-1/2 -translate-y-1/2 right-5 p-2.5 bg-(--vp-c-bg) border border-(--vp-c-divider) rounded-lg cursor-pointer hover:bg-blue-500/10"
            >
                <arrow-right-s-line class="size-6 fill-current" />
            </button>
        </div>

        <div
            class="absolute bottom-0 left-0 w-full h-96 bg-linear-to-t from-(--vp-c-bg) to-transparent pointer-events-none"
        ></div>
    </section>
</template>
