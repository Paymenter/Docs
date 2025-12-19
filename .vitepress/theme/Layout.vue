<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import LayoutFooter from "./components/LayoutFooter.vue";

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
</script>

<template>
    <Layout>
        <template #layout-bottom>
            <LayoutFooter
                v-if="
                    frontmatter.layout === 'home' ||
                    frontmatter.layout === 'page'
                "
            />
        </template>
    </Layout>
</template>
