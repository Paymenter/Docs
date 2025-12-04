---
layout: page
---

<script setup>
import { useData } from 'vitepress'

const { params } = useData()

const formatPrice = (price) => price > 0 ? `$${Number(price).toFixed(2)}` : 'Free'
const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'long', 
    day: 'numeric' 
  })
}
const formatDownloads = (d) => d >= 1000 ? `${(d / 1000).toFixed(1)}k` : d.toString()

const getStarDisplay = (rating) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = (rating % 1) >= 0.3 && (rating % 1) < 0.8
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  
  return {
    full: fullStars,
    half: hasHalfStar ? 1 : 0,
    empty: emptyStars
  }
}
</script>

<div class="container mx-auto max-w-(--vp-layout-max-width) p-6 mt-8">

<div class="mb-6">
<a href="/marketplace" class="inline-flex items-center gap-2 py-3 px-6 rounded-lg font-semibold no-underline transition-all duration-200 bg-[var(--vp-c-bg)] text-[var(--vp-c-text-1)] border border-[var(--vp-c-border)] hover:border-[var(--vp-c-brand-1)]">
<arrow-left-s-line class="size-5 fill-[var(--vp-c-text-1)]" />
Back to Marketplace
</a>
</div>

<div class="mb-12 p-6 md:p-8 bg-[var(--vp-c-bg-alt)]/50 backdrop-blur-sm rounded-2xl border border-[var(--vp-c-border)]">

<div class="mb-6">
<span class="inline-block py-1 px-3 bg-[var(--vp-c-brand-1)] text-white rounded-full text-xs md:text-sm font-medium capitalize mb-4">{{ params.type }}</span>
<h1 class="!text-2xl !font-medium">
    {{ params.name }}
</h1>
</div>

<div class="flex flex-col md:flex-row gap-8">
<div class="relative flex-shrink-0 w-full md:w-[400px] h-[250px] rounded-xl overflow-hidden bg-gradient-to-br from-[var(--vp-c-brand-1)]/10 to-[var(--vp-c-brand-1)]/5">
<img :src="params.image" :alt="params.name" class="w-full h-full object-cover" />
</div>

<div class="flex-1 flex flex-col">
<p class="text-base md:text-lg text-[var(--vp-c-text-2)] mb-6">{{ params.description }}</p>

<div class="flex flex-col gap-3 text-sm mb-6">
<div class="flex items-center gap-2">
<user-community-fill class="size-5 fill-[var(--vp-c-text-2)]" />
<span class="text-[var(--vp-c-text-2)]">
<strong class="text-[var(--vp-c-text-1)]">By:</strong> {{ params.author }}
<span v-if="params.author === 'Paymenter'" class="inline-flex items-center gap-1 ml-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4 text-[var(--vp-c-brand-1)]">
<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
</svg>
<span class="text-[var(--vp-c-brand-1)] font-medium">Official</span>
</span>
</span>
</div>

<div class="flex items-center gap-2">
<refresh-fill class="size-5 fill-[var(--vp-c-text-2)]" />
<span class="text-[var(--vp-c-text-2)]">
<strong class="text-[var(--vp-c-text-1)]">Last Updated:</strong> {{ formatDate(params.last_update) }}
</span>
</div>
</div>

<div class="flex flex-wrap gap-3 mt-auto">
<a :href="params.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 py-3 px-6 rounded-lg font-semibold no-underline transition-all duration-200 bg-[var(--vp-c-brand-1)] text-white hover:bg-[var(--vp-c-brand-2)] shadow-sm hover:shadow-md">
<arrow-right-up-box-fill class="size-5 fill-white" />
View on BuiltByBit
</a>
</div>
</div>
</div>

</div>

<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
<div class="p-6 bg-[var(--vp-c-bg-alt)]/50 backdrop-blur-sm border border-[var(--vp-c-border)] rounded-xl text-center transition-all duration-200 hover:border-[var(--vp-c-brand-1)]/50 hover:shadow-lg">

<div class="text-2xl md:text-3xl font-medium mb-2">{{ formatPrice(params.price) }}</div>
<div class="text-xs md:text-sm text-[var(--vp-c-text-2)] font-medium">Price</div>
</div>

<div class="p-6 bg-[var(--vp-c-bg-alt)]/50 backdrop-blur-sm border border-[var(--vp-c-border)] rounded-xl text-center transition-all duration-200 hover:border-[var(--vp-c-brand-1)]/50 hover:shadow-lg">

<div class="flex gap-2 items-center justify-center text-2xl font-medium mb-2">
<download-fill class="size-6 fill-[var(--vp-c-text-2)]" />
{{ formatDownloads(params.downloads) }}
</div>

<div class="text-xs md:text-sm text-[var(--vp-c-text-2)] font-medium">Downloads</div>
</div>

<div v-if="params.review_count > 0" class="p-6 bg-[var(--vp-c-bg-alt)]/50 backdrop-blur-sm border border-[var(--vp-c-border)] rounded-xl text-center transition-all duration-200 hover:border-[var(--vp-c-brand-1)]/50 hover:shadow-lg">

<div class="flex gap-1 items-center justify-center mb-2">
<star-fill v-for="i in getStarDisplay(params.rating).full" :key="'full-' + i" class="size-6 fill-[#fed53d]" />
<star-half-fill v-if="getStarDisplay(params.rating).half" class="size-6 fill-[#fed53d]" />
<star-fill v-for="i in getStarDisplay(params.rating).empty" :key="'empty-' + i" class="size-6 fill-[#6b7280]" />
</div>

<div class="text-lg font-medium mb-1">{{ params.rating }} out of 5</div>
<div class="text-xs md:text-sm text-[var(--vp-c-text-2)] font-medium">{{ params.review_count }} Reviews</div>
</div>

<div v-if="params.price > 0" class="p-6 bg-[var(--vp-c-bg-alt)]/50 backdrop-blur-sm border border-[var(--vp-c-border)] rounded-xl text-center transition-all duration-200 hover:border-[var(--vp-c-brand-1)]/50 hover:shadow-lg">

<div class="flex gap-2 items-center justify-center text-2xl font-medium mb-2">
<shopping-bag-4-fill class="size-6 fill-[var(--vp-c-text-2)]" />
{{ params.purchase_count }}
</div>

<div class="text-xs md:text-sm text-[var(--vp-c-text-2)] font-medium">Purchases</div>
</div>
</div>

<div class="p-6 md:p-8 bg-[var(--vp-c-bg-alt)]/50 backdrop-blur-sm rounded-2xl border border-[var(--vp-c-border)] mb-12">
<h2 class="!mt-0 !mb-6">About this {{ params.type }}</h2>
<div class="prose prose-slate dark:prose-invert max-w-none">
<p class="text-[var(--vp-c-text-2)]">{{ params.description }}</p>
</div>
</div>

</div>
