<script setup>
import SectionBlock from '@components/landing/SectionBlock.vue';
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const masterItems = ref([])
const searchQuery = ref('')
const activeFilter = ref('all')
const isLoading = ref(true)
const error = ref(null)

const ITEMS_PER_PAGE = 9;
const currentPage = ref(1);

const fetchAndProcessAllData = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await fetch('https://api.paymenter.org/extensions?limit=999');
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    if (!data || !Array.isArray(data.extensions)) throw new Error('Invalid API response structure');

    const mappedItems = data.extensions.map(item => ({
      ...item,
      id: item.resource_id,
      author: item.author === 'CorwinDev' ? 'Paymenter' : item.author,
      image: item.image_url,
      url: item.url,
      description: item.tag_line,
      rating: item.review_average,
      downloads: item.download_count,
      last_update: item.last_update_date,
      review_count: item.review_count,
      purchase_count: item.purchase_count,
    }));

    masterItems.value = mappedItems;

  } catch (err) {
    console.error("Failed to fetch and process marketplace items:", err);
    error.value = "Could not load marketplace items. Please try again later.";
  } finally {
    isLoading.value = false;
  }
};


const handleScroll = () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
    hasMore.value &&
    !isLoading.value
  ) {
    loadMore();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(fetchAndProcessAllData);

const filteredAndSearchedItems = computed(() => {
  let items = masterItems.value;

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    items = items.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query)
    );
  }

  if (activeFilter.value !== 'all') {
    items = items.filter(item => item.type === activeFilter.value);
  }

  return items;
});

const totalFilteredPages = computed(() => {
  return Math.ceil(filteredAndSearchedItems.value.length / ITEMS_PER_PAGE);
});

const itemsToDisplay = computed(() => {
  const end = currentPage.value * ITEMS_PER_PAGE;
  return filteredAndSearchedItems.value.slice(0, end);
});

const hasMore = computed(() => {
  return currentPage.value < totalFilteredPages.value;
});

const loadMore = () => {
  if (hasMore.value) {
    currentPage.value++;
  }
};

watch([activeFilter, searchQuery], () => {
  currentPage.value = 1;
});

const grandTotalItemCount = computed(() => masterItems.value.length);
const grandTotalExtensionCount = computed(() => masterItems.value.filter(i => i.type === 'extension').length);
const grandTotalThemeCount = computed(() => masterItems.value.filter(i => i.type === 'theme').length);

const formatDownloads = (d) => d >= 1000 ? `${(d / 1000).toFixed(1)}k` : d.toString();
const formatPrice = (p) => p > 0 ? `$${Number(p).toFixed(2)}` : 'Free';
const formatDate = (dateString) => dateString ? new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';
</script>

<template>
  <div class="container mx-auto max-w-(--vp-layout-max-width) p-6 mt-8">

    <SectionBlock icon="shopping-bag-4-fill" tagline="Paymenter Marketplace" title="Integrate & Customize Your Platform"
      description="Connect tools and tailor your client experience. Elevate your Paymenter setup with powerful extensions and beautiful themes from the marketplace."
      description-align="start" />

    <div class="mt-8 mb-8">
      <div class="bg-[var(--vp-c-bg-alt)]/50 backdrop-blur-sm border border-[var(--vp-c-border)] rounded-2xl p-4">
        <div class="flex items-center gap-3">
          <search-line class="size-5" />
          <input v-model="searchQuery" type="text" placeholder="Search extensions and themes..."
            class="w-full pl-12 pr-4 py-4 bg-[var(--vp-c-bg)] border-2 border-[var(--vp-c-border)] rounded-xl text-[var(--vp-c-text-1)] placeholder-[var(--vp-c-text-2)] focus:border-[var(--vp-c-brand-1)] focus:outline-none transition-colors" />
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center mb-6">
      <div class="flex justify-center gap-3 flex-wrap">
        <button @click="activeFilter = 'all'" :class="{
          'bg-[var(--vp-c-brand-1)] border-[var(--vp-c-brand-1)]': activeFilter === 'all',
          'bg-[var(--vp-c-bg)] text-[var(--vp-c-text-2)] border-[var(--vp-c-border)] hover:border-[var(--vp-c-brand-1)] hover:text-[var(--vp-c-text-1)]': activeFilter !== 'all'
        }" class="filter-button px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200">
          All ({{ grandTotalItemCount }})
        </button>
        <button @click="activeFilter = 'extension'" :class="{
          'bg-[var(--vp-c-brand-1)] border-[var(--vp-c-brand-1)]': activeFilter === 'extension',
          'bg-[var(--vp-c-bg)] text-[var(--vp-c-text-2)] border-[var(--vp-c-border)] hover:border-[var(--vp-c-brand-1)] hover:text-[var(--vp-c-text-1)]': activeFilter !== 'extension'
        }" class="filter-button px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200">
          Extensions ({{ grandTotalExtensionCount }})
        </button>
        <button @click="activeFilter = 'theme'" :class="{
          'bg-[var(--vp-c-brand-1)] border-[var(--vp-c-brand-1)]': activeFilter === 'theme',
          'bg-[var(--vp-c-bg)] text-[var(--vp-c-text-2)] border-[var(--vp-c-border)] hover:border-[var(--vp-c-brand-1)] hover:text-[var(--vp-c-text-1)]': activeFilter !== 'theme'
        }" class="filter-button px-6 py-3 border-2 rounded-lg font-medium transition-all duration-200">
          Themes ({{ grandTotalThemeCount }})
        </button>
      </div>
      <p v-if="!isLoading" class="text-[var(--vp-c-text-2)] text-right">
        Showing {{ itemsToDisplay.length }} of {{ filteredAndSearchedItems.length }}
      </p>
    </div>

    <div v-if="isLoading" class="text-center py-16">
      <p>Loading marketplace...</p>
    </div>
    <div v-if="error" class="text-center py-16 bg-red-500/10 text-red-500 rounded-lg p-4">
      <h3 class="text-xl font-semibold mb-2">Something went wrong</h3>
      <p>{{ error }}</p>
    </div>

    <div v-if="!isLoading && !error" class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a v-for="item in itemsToDisplay" :key="item.id" :href="item.url" target="_blank" rel="noopener noreferrer"
          class="group block bg-[var(--vp-c-bg-alt)]/50 backdrop-blur-sm border border-[var(--vp-c-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[var(--vp-c-brand-1)]/50 h-full flex flex-col">

          <div
            class="relative h-48 bg-gradient-to-br from-[var(--vp-c-brand-1)]/10 to-[var(--vp-c-brand-1)]/5 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover"
              @error="$event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNSA2NUw1MCA0NUw2NSA2NUgzNVoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+'" />
            <div class="absolute top-3 right-3 flex gap-2">
              <span class="px-3 py-1 bg-[var(--vp-c-brand-1)] text-white text-xs font-medium rounded-full capitalize">{{
                item.type }}</span>
            </div>
          </div>
          <div class="flex flex-col p-6 flex-grow">
            <h3
              class="text-xl font-semibold color-[var(--vp-c-text-1)] mb-2 group-hover:text-[var(--vp-c-brand-1)] transition-colors">
              {{ item.name }}</h3>

            <div class="flex justify-between items-center text-sm mt-2 mb-2">
              <div class="flex items-center gap-1.5">
                <span>By {{ item.author }}</span>
                <div v-if="item.author === 'Paymenter'" class="relative group/official flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="size-4 text-[var(--vp-c-brand-1)]">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd" />
                  </svg>
                  <span
                    class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 invisible opacity-0 group-hover/official:visible group-hover/official:opacity-100 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md transition-opacity duration-200 whitespace-nowrap tooltip-arrow">Official</span>
                </div>
              </div>
              <span class="text-[var(--vp-c-text-2)]">Last Updated: {{ formatDate(item.last_update) }}</span>
            </div>
            <div class="flex-grow min-h-[3rem] my-2">
              <p class="text-[var(--vp-c-text-2)] line-clamp-2">{{ item.description }}</p>
            </div>
            <div class="flex items-center justify-between mt-auto">
              <div class="flex items-center gap-4 text-sm">
                <div v-if="item.review_count > 0" class="flex items-center gap-2" title="Rating">
                  <star-fill class="size-4 fill-[#fed53d]" />
                  <span class="text-[var(--vp-c-text-2)]">{{ item.rating }} ({{ item.review_count }})</span>
                </div>
                <div v-if="item.price > 0" class="flex items-center gap-2" title="Purchases">
                  <shopping-bag-4-fill class="size-4 fill-[#9ca3af]" />
                  <span class="text-[var(--vp-c-text-2)]">{{ item.purchase_count }}</span>
                </div>
                <div class="flex items-center gap-2" title="Downloads">
                  <download-fill class="size-4 fill-[#9ca3af]" />
                  <span class="text-[var(--vp-c-text-2)]">{{ formatDownloads(item.downloads) }}</span>
                </div>
              </div>
              <div class="text-lg font-semibold">{{ formatPrice(item.price) }}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div v-if="!isLoading && itemsToDisplay.length === 0 && !error" class="text-center py-16">
      <h3 class="text-xl font-semibold text-[var(--vp-c-text-1)] mb-2">No results found</h3>
      <p class="text-[var(--vp-c-text-2)]">Try adjusting your search or filter criteria.</p>
    </div>
    <div class="text-center mb-16">
      <button v-if="hasMore" @click="loadMore"
        class="px-8 py-4 bg-[var(--vp-c-brand-1)] text-white rounded-lg font-medium hover:bg-[var(--vp-c-brand-2)] transition-colors">
        Load More
      </button>
      <p v-if="!hasMore && !isLoading && masterItems.length > 0" class="text-[var(--vp-c-text-2)]">You've reached the
        end!</p>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes swing-float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  25% {
    transform: translateY(-10px) rotate(1deg);
  }

  50% {
    transform: translateY(0px) rotate(0deg);
  }

  75% {
    transform: translateY(-5px) rotate(-1deg);
  }
}

.animate-swing-float {
  animation: swing-float 18s ease-in-out infinite;
}

.tooltip-arrow::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: #1f2937 transparent transparent transparent;
}

.filter-button:not(.bg-\[var\(--vp-c-brand-1\)\]) {
  color: var(--vp-c-text-2);
}

.filter-button:not(.bg-\[var\(--vp-c-brand-1\)\]):hover {
  color: var(--vp-c-text-1);
}
</style>