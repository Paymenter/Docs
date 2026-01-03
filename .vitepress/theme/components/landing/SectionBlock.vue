<template>
    <div class="flex flex-col gap-4">
        <div
            v-if="icon || tagline"
            class="flex items-center gap-3 text-[#9ca3af]"
        >
            <component :is="icon" v-if="icon" class="size-5" />
            <span
                v-if="tagline"
                class="text-sm uppercase tracking-widest text-[#9ca3af]"
            >
                {{ tagline }}
            </span>
        </div>
        <div v-if="title" class="text-3xl font-semibold">
            {{ title }}
        </div>
        <slot name="description" v-if="$slots.description || description">
            <span
                class="flex justify-center font-normal text-(--vp-c-text-2)"
                :class="alignmentClass"
            >
                {{ description }}
            </span>
        </slot>
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    icon: {
        type: String,
        default: null,
    },
    tagline: {
        type: String,
        default: null,
    },
    title: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    descriptionAlign: {
        type: String,
        default: "center",
        validator: (value) => ["center", "start"].includes(value),
    },
});

const alignmentClass = computed(() => {
    return {
        "justify-center": props.descriptionAlign === "center",
        "justify-start": props.descriptionAlign === "start",
    };
});
</script>
