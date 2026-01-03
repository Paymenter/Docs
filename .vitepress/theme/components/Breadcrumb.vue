<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <nav
        class="flex items-center text-sm font-medium text-(--vp-c-text-2) mb-8 overflow-x-auto no-scrollbar"
    >
        <a
            href="/"
            class="flex items-center gap-1 hover:text-(--vp-c-brand-1) transition-colors shrink-0"
        >
            Home
        </a>
        <template v-for="(item, index) in items" :key="index">
            <arrow-right-s-line
                class="mx-2 size-4 text-(--vp-c-text-3) shrink-0"
            />
            <a
                v-if="item.link"
                :href="item.link"
                class="hover:text-(--vp-c-brand-1) transition-colors whitespace-nowrap"
            >
                {{ item.text }}
            </a>
            <span
                v-else
                class="text-(--vp-c-text-1) whitespace-nowrap overflow-hidden text-ellipsis"
            >
                {{ item.text }}
            </span>
        </template>
    </nav>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
