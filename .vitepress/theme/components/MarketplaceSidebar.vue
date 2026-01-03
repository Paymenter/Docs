<script setup>
defineProps({
    params: {
        type: Object,
        required: true,
    },
});

const formatPrice = (price) =>
    price > 0 ? `$${Number(price).toFixed(2)}` : "Free";

const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

const formatDownloads = (d) =>
    d >= 1000 ? `${(d / 1000).toFixed(1)}k` : d.toString();

const getStarDisplay = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.3 && rating % 1 < 0.8;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return {
        full: fullStars,
        half: hasHalfStar ? 1 : 0,
        empty: emptyStars,
    };
};
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="flex flex-col">
            <h4 class="mb-2! font-medium!">Developer</h4>
            <div class="flex items-center gap-2">
                <account-circle-fill class="size-4" />
                <div class="text-sm">
                    {{ params.author }}
                </div>

                <div
                    v-if="params.author === 'Paymenter'"
                    class="relative group/official flex items-center"
                >
                    <checkbox-circle-fill
                        class="size-4 text-(--vp-c-brand-1)"
                    />
                    <span
                        class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 invisible opacity-0 group-hover/official:visible group-hover/official:opacity-100 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md transition-opacity duration-200 whitespace-nowrap tooltip-arrow"
                        >Official</span
                    >
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <h4 class="mb-2! font-medium!">Last Updated</h4>
            <div class="flex items-center gap-2">
                <refresh-fill class="size-4" />
                <div class="text-sm">
                    {{ formatDate(params.last_update) }}
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <h4 class="mb-2! font-medium!">Price</h4>
            <div class="flex items-center gap-2">
                <price-tag-3-fill class="size-4" />
                <div class="text-sm">
                    {{ formatPrice(params.price) }}
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <h4 class="mb-2! font-medium!">Installs</h4>
            <div class="flex items-center gap-2">
                <download-fill class="size-4" />
                <div class="text-sm">
                    {{ formatDownloads(params.downloads) }} installs
                </div>
            </div>
        </div>
        <div v-if="params.review_count > 0" class="flex flex-col">
            <h4 class="mb-2! font-medium!">Reviews</h4>
            <div class="flex items-center gap-2">
                <div class="flex gap-1 items-center justify-center">
                    <star-fill
                        v-for="i in getStarDisplay(params.rating).full"
                        :key="'full-' + i"
                        class="size-4 fill-[#fed53d]"
                    />
                    <star-half-fill
                        v-if="getStarDisplay(params.rating).half"
                        class="size-4 fill-[#fed53d]"
                    />
                    <star-fill
                        v-for="i in getStarDisplay(params.rating).empty"
                        :key="'empty-' + i"
                        class="size-4 fill-[#6b7280]"
                    />
                </div>
                <div class="text-sm">{{ params.review_count }} Reviews</div>
            </div>
            <div class="text-sm text-(--vp-c-text-2) font-medium mt-2">
                {{ params.rating }} out of 5
            </div>
        </div>
        <div v-if="params.price > 0" class="flex flex-col">
            <h4 class="mb-2! font-medium!">Purchases</h4>
            <div class="flex items-center gap-2">
                <shopping-bag-4-fill class="size-4" />
                <div class="text-sm">{{ params.purchase_count }} purchases</div>
            </div>
        </div>
        <div class="flex flex-col">
            <h4 class="mb-2! font-medium!">Categories</h4>
            <div class="flex flex-col gap-2">
                <span
                    class="w-fit inline-block py-1 px-3 bg-(--vp-c-brand-1)/20 text-(--vp-c-brand-1) rounded-full text-xs md:text-sm font-medium capitalize"
                    >{{ params.type }}</span
                >
            </div>
        </div>
    </div>
</template>
