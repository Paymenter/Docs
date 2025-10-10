<script setup>

import SectionBlock from '@components/landing/SectionBlock.vue';
import FeatureItem from '@components/landing/FeatureItem.vue';

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
    const response = await fetch('https://api.paymenter.org/extensions?limit=999&birthday=true');
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

// Fillout Form
const FILLOUT_SCRIPT_ID = 'fillout-embed-script';

onMounted(() => {
  if (document.getElementById(FILLOUT_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement('script');
  script.id = FILLOUT_SCRIPT_ID;
  script.src = "https://server.fillout.com/embed/v1/";
  script.async = true;

  document.body.appendChild(script);
});
// Fillout Form
</script>

<template>
  <div class="container mx-auto max-w-(--vp-layout-max-width) p-6 mt-8">

    <div class="mb-8 relative ">

        <svg class="absolute w-full z-0 -top-[820px]" viewBox="0 0 1400 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_1362)">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1022.06 788.02C1019.32 794.18 1020.54 798.933 1022.61 806.026C1029.1 809.025 1033.69 811.993 1039.4 813.694C1044.2 807.702 1048.72 804.774 1058.23 803.103C1045.12 794.415 1036.59 791.462 1022.06 788.02Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1245.91 764.954C1247.21 755.731 1248.75 750.494 1253.09 742.137C1249.03 739.951 1245.18 738.796 1240.92 739.357C1237.47 744.68 1234.74 752.059 1232.03 762.273C1238.64 760.79 1242.25 761.101 1245.91 764.954Z"
              fill="#61BA47" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1109.04 871.973C1110.69 862.805 1112.43 857.629 1117.08 849.44C1113.1 847.103 1109.3 845.806 1105.02 846.206C1101.37 851.396 1098.37 858.667 1095.27 868.773C1101.93 867.538 1105.53 867.985 1109.04 871.973Z"
              fill="#FF5257" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M951.955 216.733C957.943 213.636 959.964 209.165 962.784 202.337C959.59 195.936 957.865 190.751 954.468 185.851C946.98 187.531 941.618 186.988 933.149 182.345C937.957 197.328 942.764 204.961 951.955 216.733Z"
              fill="#A550A7" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M958.547 653.256C964.169 649.537 965.699 644.875 967.773 637.784C963.911 631.762 961.64 626.792 957.739 622.284C950.473 624.756 945.084 624.79 936.167 621.081C942.552 635.463 948.148 642.537 958.547 653.256Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M88.2353 642.411C87.6314 633.117 88.079 627.674 90.6247 618.61C86.2087 617.294 82.2053 616.947 78.1483 618.363C75.8487 624.277 74.6771 632.057 74.0984 642.61C80.2688 639.813 83.8673 639.383 88.2353 642.411Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1310.36 607.374C1310.86 600.651 1308.11 596.589 1303.76 590.611C1296.64 589.982 1291.32 588.738 1285.36 589.067C1282.88 596.327 1279.61 600.611 1271.22 605.396C1286.5 609.143 1295.52 609.043 1310.36 607.374Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M712.517 923.091C716.82 914.83 720.025 910.409 726.902 903.978C723.808 900.563 720.565 898.191 716.362 897.297C711.329 901.162 706.293 907.207 700.326 915.93C707.053 916.738 710.353 918.237 712.517 923.091Z"
              fill="#007AFF" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1211.6 736.052C1203.33 731.77 1198.9 728.577 1192.45 721.717C1189.04 724.819 1186.68 728.069 1185.79 732.274C1189.67 737.297 1195.73 742.317 1204.47 748.261C1205.26 741.533 1206.75 738.229 1211.6 736.052Z"
              fill="#FF5257" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M320.933 233.728C314.572 231.496 309.933 233.093 303.03 235.725C300.564 242.44 297.976 247.253 296.741 253.085C303.101 257.381 306.384 261.655 308.816 271.002C316.418 257.225 318.674 248.491 320.933 233.728Z"
              fill="#A550A7" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M416.707 736.605C410.042 737.612 406.691 741.197 401.826 746.756C402.793 753.844 402.761 759.309 404.403 765.04C412.034 765.856 416.937 768.094 423.464 775.212C423.726 759.478 421.627 750.706 416.707 736.605Z"
              fill="#FF5257" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M595.355 740.673C602.959 735.293 607.83 732.825 616.886 730.25C615.696 725.798 613.896 722.206 610.566 719.49C604.323 720.626 597.081 723.7 587.786 728.731C593.399 732.525 595.649 735.366 595.355 740.673Z"
              fill="#007AFF" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M921.081 661.437C915.193 664.718 913.313 669.251 910.707 676.163C914.1 682.461 915.987 687.59 919.534 692.381C926.967 690.468 932.343 690.844 940.953 695.219C935.679 680.394 930.636 672.915 921.081 661.437Z"
              fill="#A550A7" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M679.416 664.91C688.547 663.068 694 662.784 703.324 664.095C704.037 659.542 703.845 655.528 701.9 651.697C695.731 650.209 687.864 650.089 677.329 650.927C680.926 656.668 681.833 660.176 679.416 664.91Z"
              fill="#A550A7" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M951.224 484.474C957.678 486.42 962.241 484.617 969.02 481.68C971.183 474.861 973.555 469.938 974.528 464.056C967.983 460.049 964.513 455.925 961.666 446.696C954.686 460.799 952.822 469.625 951.224 484.474Z"
              fill="#FFC700" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1219.17 932.639C1209.89 931.913 1204.56 930.694 1195.95 926.883C1194.02 931.067 1193.11 934.98 1193.93 939.197C1199.46 942.316 1206.99 944.584 1217.35 946.66C1215.46 940.154 1215.55 936.531 1219.17 932.639Z"
              fill="#FFC700" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M114.366 796.993C110.78 791.285 106.156 789.644 99.1162 787.404C93.0043 791.121 87.9815 793.274 83.3822 797.068C85.6819 804.389 85.588 809.778 81.6688 818.605C96.1979 812.562 103.403 807.135 114.366 796.993Z"
              fill="#FF5257" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1276.51 885.078C1269.84 884.128 1265.6 886.599 1259.34 890.526C1258.23 897.593 1256.63 902.818 1256.55 908.78C1263.63 911.753 1267.68 915.305 1271.89 923.999C1276.66 909.004 1277.17 899.998 1276.51 885.078Z"
              fill="#007AFF" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M981.938 905.856C975.424 904.118 970.921 906.067 964.241 909.222C962.298 916.106 960.087 921.104 959.303 927.014C965.974 930.808 969.576 934.818 972.719 943.95C979.241 929.63 980.819 920.749 981.938 905.856Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M634.043 948.234C639.808 944.74 641.522 940.142 643.875 933.14C640.256 926.969 638.183 921.913 634.464 917.253C627.106 919.436 621.72 919.256 612.956 915.196C618.766 929.82 624.078 937.11 634.043 948.234Z"
              fill="#FFC700" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1100.93 541.622C1095.73 545.912 1094.7 550.709 1093.38 557.978C1097.85 563.561 1100.63 568.266 1104.99 572.339C1111.95 569.118 1117.31 568.518 1126.56 571.27C1118.7 557.638 1112.4 551.191 1100.93 541.622Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M672 298.792C664.557 293.192 660.722 289.305 655.507 281.466C651.631 283.958 648.758 286.768 647.187 290.767C650.173 296.366 655.31 302.325 662.936 309.642C664.837 303.14 666.856 300.131 672 298.792Z"
              fill="#FFC700" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1182.96 603.26C1184.01 609.918 1187.62 613.242 1193.22 618.068C1200.3 617.049 1205.76 617.041 1211.48 615.359C1212.24 607.722 1214.44 602.803 1221.52 596.224C1205.78 596.076 1197.02 598.238 1182.96 603.26Z"
              fill="#FF5257" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M38.5447 759.354C42.7156 767.682 44.4197 772.871 45.5994 782.211C50.1793 781.706 54.0026 780.469 57.1898 777.587C57.0084 771.244 55.0623 763.621 51.4916 753.674C46.8946 758.65 43.7464 760.445 38.5447 759.354Z"
              fill="#FFC700" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M258.016 423.706C251.386 417.164 248.101 412.802 243.976 404.339C239.803 406.292 236.582 408.695 234.493 412.449C236.707 418.396 241.005 424.986 247.589 433.253C250.338 427.061 252.74 424.348 258.016 423.706Z"
              fill="#A550A7" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M646.239 1064.24C655.54 1063.75 660.977 1064.26 670.01 1066.92C671.378 1062.52 671.774 1058.52 670.407 1054.44C664.521 1052.07 656.756 1050.81 646.211 1050.1C648.933 1056.31 649.319 1059.91 646.239 1064.24Z"
              fill="#FFC700" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M532.758 860.659C535.382 866.869 539.683 869.23 546.272 872.571C552.901 869.882 558.204 868.563 563.352 865.556C562.257 857.96 563.214 852.656 568.499 844.572C553.188 848.206 545.206 852.407 532.758 860.659Z"
              fill="#007AFF" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M953.479 476.668C959.975 478.47 964.497 476.567 971.208 473.479C973.22 466.614 975.481 461.64 976.324 455.737C969.691 451.876 966.13 447.831 963.078 438.668C956.414 452.922 954.747 461.787 953.479 476.668Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M817.902 1024.76C822.833 1029.36 827.723 1029.76 835.102 1030.12C840.055 1024.96 844.357 1021.59 847.828 1016.74C843.726 1010.25 842.433 1005.02 843.956 995.483C831.464 1005.05 825.894 1012.15 817.902 1024.76Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M166.873 923.495C175.891 921.165 181.321 920.587 190.702 921.394C191.169 916.81 190.761 912.812 188.613 909.091C182.373 907.937 174.511 908.241 164.036 909.644C167.937 915.183 169.032 918.638 166.873 923.495Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M781.453 618.546C787.707 616.03 790.142 611.771 793.597 605.241C791.023 598.566 789.796 593.241 786.879 588.041C779.265 589.005 773.979 587.956 765.987 582.532C769.355 597.903 773.418 605.957 781.453 618.546Z"
              fill="#F74F9E" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M960.704 769.572C966.143 765.59 967.45 760.86 969.185 753.679C965.043 747.847 962.538 742.99 958.428 738.672C951.288 741.486 945.906 741.775 936.823 738.493C943.882 752.556 949.808 759.357 960.704 769.572Z"
              fill="#A550A7" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M255.785 799.454C255.846 806.195 258.924 810.016 263.744 815.614C270.898 815.653 276.304 816.452 282.209 815.633C284.089 808.192 286.994 803.653 294.959 798.19C279.418 795.719 270.438 796.565 255.785 799.454Z"
              fill="#FFC700" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M276.48 923.981C280.003 929.728 284.609 931.419 291.624 933.736C297.776 930.086 302.822 927.988 307.462 924.245C305.243 916.898 305.395 911.511 309.411 902.727C294.816 908.611 287.553 913.959 276.48 923.981Z"
              fill="#FF5257" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M599.273 446.859C605.609 449.162 610.265 447.615 617.197 445.06C619.736 438.372 622.378 433.588 623.677 427.769C617.365 423.404 614.129 419.094 611.8 409.721C604.046 423.414 601.695 432.122 599.273 446.859Z"
              fill="#FF5257" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M650.592 993.028C656.92 995.351 661.582 993.819 668.522 991.286C671.083 984.607 673.74 979.832 675.058 974.017C668.76 969.631 665.538 965.311 663.24 955.93C655.442 969.598 653.062 978.298 650.592 993.028Z"
              fill="#A550A7" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M851.585 702.831C845.875 695.472 843.195 690.715 840.222 681.781C835.827 683.167 832.318 685.124 829.752 688.571C831.163 694.757 834.553 701.857 839.99 710.92C843.532 705.145 846.271 702.772 851.585 702.831Z"
              fill="#A550A7" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M663.291 497.082C659.978 491.212 655.436 489.355 648.51 486.786C642.229 490.211 637.111 492.125 632.338 495.698C634.29 503.12 633.943 508.498 629.612 517.131C644.41 511.779 651.862 506.697 663.291 497.082Z"
              fill="#61BA47" />
          </g>
          <defs>
            <clipPath id="clip0_1_1362">
              <rect width="1400" height="1080" fill="white" />
            </clipPath>
          </defs>
        </svg>

      <div class=" p-6 lg:gap-12 gap-4 items-end grid grid-cols-1 md:grid-cols-2">
        <div class=" flex font-semibold relative lg:mb-10">
          <SectionBlock icon="emotion-happy-fill" tagline="3rd anniversary"
            title="Three Years. And We're Just Getting Started."
            description="Today marks the third anniversary of Paymenter, a significant milestone that reflects our commitment to providing powerful, open-source billing solution.">

          </SectionBlock>
        </div>
        <div class=" flex items-baseline justify-end font-semibold relative">
          <div class="lg:text-[260px] text-[200px] leading-none">3</div>
          <div class="lg:text-[160px] text-[120px] leading-none tracking-tighter">Years</div>
        </div>
      </div>

      <section class="">
        <div class="relative gap-12 p-6 mb-12">

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureItem icon="download-fill" title="+27,000" description="Total Software Downloads" />
            <FeatureItem icon="star-fill" title="+1,000" description="GitHub Stars and Growing" />
            <FeatureItem icon="user-community-fill" title="+2,570" description="Discord Community Members" />
            <FeatureItem icon="git-repository-commits-fill" title="+2,500" description="Repository Commits" />
            <FeatureItem icon="p2p-fill" title="35" description="Contributing Users" />
            <FeatureItem icon="customer-service-fill" title="+3,000" description="Closed Support Threads" />
            <FeatureItem icon="line-chart-fill" title="+$10,000" description="Marketplace Revenue (last 4 months)" />
          </div>

        </div>
      </section>

      <section class="py-16 relative overflow-hidden">

        <div class="flex flex-col p-6 items-center relative">
          <div class="flex flex-col gap-6 lg:max-w-2xl items-center text-center">
            <div class="flex items-center gap-3 text-[#9ca3af]">
              <pushpin-2-fill class="size-5" />
              <span class="text-sm uppercase tracking-widest text-[#9ca3af]">
                The Timeline
              </span>
            </div>
            <div class="text-3xl font-semibold ">
              Our Shared Milestones
            </div>
            <span class="flex font-normal text-[var(--vp-c-text-2)]">
              Paymenter has evolved from a nascent project into a robust platform, supported by a dedicated global
              community. Here are the key moments that made it possible.
            </span>

          </div>
        </div>

        <div class="w-full overflow-hidden">
          <div class="absolute inset-0">
            <div class="absolute inset-0 opacity-10 md:opacity-10 blur-xs md:blur-none mask-x-from-90% mask-x-to-100%">

              <img src="https://avatars.githubusercontent.com/u/88144943" alt="Avatar"
                class="absolute w-32 h-32 rounded-full top-[2%] left-[2%]">
              <img src="https://avatars.githubusercontent.com/u/47200577" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[15%] left-[1%] hidden md:block">
              <img src="https://avatars.githubusercontent.com/u/62171904" alt="Avatar"
                class="absolute w-32 h-32 rounded-full top-[20%] left-[5%]">
              <img src="https://avatars.githubusercontent.com/u/133423497" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[40%] left-[2%] hidden lg:block">
              <img src="https://avatars.githubusercontent.com/u/87722392" alt="Avatar"
                class="absolute w-28 h-28 rounded-full top-[50%] left-[8%]">
              <img src="https://avatars.githubusercontent.com/u/42745054" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[65%] left-[3%]">
              <img src="https://avatars.githubusercontent.com/u/6153876" alt="Avatar"
                class="absolute w-24 h-24 rounded-full top-[75%] left-[6%] hidden md:block">
              <img src="https://avatars.githubusercontent.com/u/19376128" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[90%] left-[1%]">
              <img src="https://avatars.githubusercontent.com/u/49253770" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[35%] left-[15%] hidden lg:block">
              <img src="https://avatars.githubusercontent.com/u/34054757" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[5%] left-[18%]">
              <img src="https://avatars.githubusercontent.com/u/5405225" alt="Avatar"
                class="absolute w-24 h-24 rounded-full top-[55%] left-[1%]">
              <img src="https://avatars.githubusercontent.com/u/38536056" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[70%] left-[17%] hidden md:block">
              <img src="https://avatars.githubusercontent.com/u/135371107" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[85%] left-[14%] hidden lg:block">
              <img src="https://avatars.githubusercontent.com/u/15818451" alt="Avatar"
                class="absolute w-28 h-28 rounded-full top-[90%] left-[7%]">
              <img src="https://avatars.githubusercontent.com/u/47789168" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[48%] left-[4%]">
              <img src="https://avatars.githubusercontent.com/u/9319054" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[28%] left-[3%] hidden md:block">
              <img src="https://avatars.githubusercontent.com/u/82307576" alt="Avatar"
                class="absolute w-24 h-24 rounded-full top-[42%] left-[16%]">

              <img src="https://avatars.githubusercontent.com/u/224657147" alt="Avatar"
                class="absolute w-28 h-28 rounded-full top-[3%] right-[2%]">
              <img src="https://avatars.githubusercontent.com/u/76240678" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[18%] right-[1%] hidden md:block">
              <img src="https://avatars.githubusercontent.com/u/119608746" alt="Avatar"
                class="absolute w-24 h-24 rounded-full top-[22%] right-[8%]">
              <img src="https://avatars.githubusercontent.com/u/56427729" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[42%] right-[3%] hidden lg:block">
              <img src="https://avatars.githubusercontent.com/u/123080127" alt="Avatar"
                class="absolute w-32 h-32 rounded-full top-[52%] right-[5%]">
              <img src="https://avatars.githubusercontent.com/u/113906507" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[70%] right-[2%]">
              <img src="https://avatars.githubusercontent.com/u/88922662" alt="Avatar"
                class="absolute w-24 h-24 rounded-full top-[80%] right-[8%] hidden md:block">
              <img src="https://avatars.githubusercontent.com/u/26045909" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[92%] right-[3%]">
              <img src="https://avatars.githubusercontent.com/u/105354" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[33%] right-[16%] hidden lg:block">
              <img src="https://avatars.githubusercontent.com/u/7601383" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[8%] right-[15%]">
              <img src="https://avatars.githubusercontent.com/u/76780190" alt="Avatar"
                class="absolute w-24 h-24 rounded-full top-[60%] right-[1%]">
              <img src="https://avatars.githubusercontent.com/u/154527396" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[75%] right-[18%] hidden md:block">
              <img src="https://avatars.githubusercontent.com/u/127036331" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[88%] right-[14%] hidden lg:block">
              <img src="https://avatars.githubusercontent.com/u/162024807" alt="Avatar"
                class="absolute w-28 h-28 rounded-full top-[90%] right-[4%]">
              <img src="https://avatars.githubusercontent.com/u/53091080" alt="Avatar"
                class="absolute w-16 h-16 rounded-full top-[45%] right-[12%]">
              <img src="https://avatars.githubusercontent.com/u/93807726" alt="Avatar"
                class="absolute w-20 h-20 rounded-full top-[30%] right-[2%] hidden md:block">
              <img src="https://avatars.githubusercontent.com/u/174925142" alt="Avatar"
                class="absolute w-24 h-24 rounded-full top-[35%] right-[7%]">
            </div>
          </div>
        </div>

        <div class="py-6">
          <div class="max-w-3xl mx-auto">
            <div class="relative">
              <div class="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#4060FF]/50">
              </div>
              <div class="space-y-12">

                <div class="relative flex items-center justify-end">
                  <div class="absolute left-1/2 -translate-x-1/2 bg-[var(--vp-c-bg)] z-10">
                    <svg class="h-24 w-auto text-[#4060ff]/50" viewBox="0 0 38 96" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15.5908C21 23.2709 27.5881 29.3938 32.8477 34.9902C36.0427 38.3899 38 42.9665 38 48C38 53.0334 36.0426 57.6094 32.8477 61.0088C27.5879 66.6051 21 72.7281 21 80.4082V96H17V80.4082C17 72.7281 10.4121 66.6051 5.15234 61.0088C1.95742 57.6094 0 53.0334 0 48C0 42.9665 1.95729 38.3899 5.15234 34.9902C10.4119 29.3938 17 23.2709 17 15.5908V0H21V15.5908ZM19 35C11.8203 35 6 40.8203 6 48C6 55.1797 11.8203 61 19 61C26.1797 61 32 55.1797 32 48C32 40.8203 26.1797 35 19 35Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="w-1/2 pl-12">
                    <div class="p-4 text-left">
                      <p class="text-sm text-[var(--vp-c-text-3)] font-semibold">Oct 7, 2022</p>
                      <h3 class="font-bold text-lg text-white mt-1">First Commit</h3>
                    </div>
                  </div>
                </div>

                <div class="relative flex items-center justify-start">
                  <div class="absolute left-1/2 -translate-x-1/2 bg-[var(--vp-c-bg)] z-10">
                    <svg class="h-24 w-auto text-[#4060ff]/50" viewBox="0 0 38 96" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15.5908C21 23.2709 27.5881 29.3938 32.8477 34.9902C36.0427 38.3899 38 42.9665 38 48C38 53.0334 36.0426 57.6094 32.8477 61.0088C27.5879 66.6051 21 72.7281 21 80.4082V96H17V80.4082C17 72.7281 10.4121 66.6051 5.15234 61.0088C1.95742 57.6094 0 53.0334 0 48C0 42.9665 1.95729 38.3899 5.15234 34.9902C10.4119 29.3938 17 23.2709 17 15.5908V0H21V15.5908ZM19 35C11.8203 35 6 40.8203 6 48C6 55.1797 11.8203 61 19 61C26.1797 61 32 55.1797 32 48C32 40.8203 26.1797 35 19 35Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="w-1/2 pr-12">
                    <div class="p-4 text-right">
                      <p class="text-sm text-[var(--vp-c-text-3)] font-semibold">Oct 29, 2022</p>
                      <h3 class="font-bold text-lg text-white mt-1">v0.1 Release</h3>
                    </div>
                  </div>
                </div>

                <div class="relative flex items-center justify-end">
                  <div class="absolute left-1/2 -translate-x-1/2 bg-[var(--vp-c-bg)] z-10">
                    <svg class="h-24 w-auto text-[#4060ff]/50" viewBox="0 0 38 96" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15.5908C21 23.2709 27.5881 29.3938 32.8477 34.9902C36.0427 38.3899 38 42.9665 38 48C38 53.0334 36.0426 57.6094 32.8477 61.0088C27.5879 66.6051 21 72.7281 21 80.4082V96H17V80.4082C17 72.7281 10.4121 66.6051 5.15234 61.0088C1.95742 57.6094 0 53.0334 0 48C0 42.9665 1.95729 38.3899 5.15234 34.9902C10.4119 29.3938 17 23.2709 17 15.5908V0H21V15.5908ZM19 35C11.8203 35 6 40.8203 6 48C6 55.1797 11.8203 61 19 61C26.1797 61 32 55.1797 32 48C32 40.8203 26.1797 35 19 35Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="w-1/2 pl-12">
                    <div class="p-4 text-left">
                      <p class="text-sm text-[var(--vp-c-text-3)] font-semibold">Jan 26, 2023</p>
                      <h3 class="font-bold text-lg text-white mt-1">v0.3 First Production Release</h3>
                    </div>
                  </div>
                </div>

                <div class="relative flex items-center justify-start">
                  <div class="absolute left-1/2 -translate-x-1/2 bg-[var(--vp-c-bg)] z-10">
                    <svg class="h-24 w-auto text-[#4060ff]/50" viewBox="0 0 38 96" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15.5908C21 23.2709 27.5881 29.3938 32.8477 34.9902C36.0427 38.3899 38 42.9665 38 48C38 53.0334 36.0426 57.6094 32.8477 61.0088C27.5879 66.6051 21 72.7281 21 80.4082V96H17V80.4082C17 72.7281 10.4121 66.6051 5.15234 61.0088C1.95742 57.6094 0 53.0334 0 48C0 42.9665 1.95729 38.3899 5.15234 34.9902C10.4119 29.3938 17 23.2709 17 15.5908V0H21V15.5908ZM19 35C11.8203 35 6 40.8203 6 48C6 55.1797 11.8203 61 19 61C26.1797 61 32 55.1797 32 48C32 40.8203 26.1797 35 19 35Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="w-1/2 pr-12">
                    <div class="p-4 text-right">
                      <p class="text-sm text-[var(--vp-c-text-3)] font-semibold">Jan 6, 2024</p>
                      <h3 class="font-bold text-lg text-white mt-1">v0.9 The Final 0.x Release</h3>
                    </div>
                  </div>
                </div>

                <div class="relative flex items-center justify-end">
                  <div class="absolute left-1/2 -translate-x-1/2 bg-[var(--vp-c-bg)] z-10">
                    <svg class="h-24 w-auto text-[#4060ff]/50" viewBox="0 0 38 96" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15.5908C21 23.2709 27.5881 29.3938 32.8477 34.9902C36.0427 38.3899 38 42.9665 38 48C38 53.0334 36.0426 57.6094 32.8477 61.0088C27.5879 66.6051 21 72.7281 21 80.4082V96H17V80.4082C17 72.7281 10.4121 66.6051 5.15234 61.0088C1.95742 57.6094 0 53.0334 0 48C0 42.9665 1.95729 38.3899 5.15234 34.9902C10.4119 29.3938 17 23.2709 17 15.5908V0H21V15.5908ZM19 35C11.8203 35 6 40.8203 6 48C6 55.1797 11.8203 61 19 61C26.1797 61 32 55.1797 32 48C32 40.8203 26.1797 35 19 35Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="w-1/2 pl-12">
                    <div class="p-4 text-left">
                      <p class="text-sm text-[var(--vp-c-text-3)] font-semibold">July 2024</p>
                      <h3 class="font-bold text-lg text-white mt-1">500+ Stars on GitHub</h3>
                    </div>
                  </div>
                </div>

                <div class="relative flex items-center justify-start">
                  <div class="absolute left-1/2 -translate-x-1/2 bg-[var(--vp-c-bg)] z-10">
                    <svg class="h-24 w-auto text-[#4060ff]/50" viewBox="0 0 38 96" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15.5908C21 23.2709 27.5881 29.3938 32.8477 34.9902C36.0427 38.3899 38 42.9665 38 48C38 53.0334 36.0426 57.6094 32.8477 61.0088C27.5879 66.6051 21 72.7281 21 80.4082V96H17V80.4082C17 72.7281 10.4121 66.6051 5.15234 61.0088C1.95742 57.6094 0 53.0334 0 48C0 42.9665 1.95729 38.3899 5.15234 34.9902C10.4119 29.3938 17 23.2709 17 15.5908V0H21V15.5908ZM19 35C11.8203 35 6 40.8203 6 48C6 55.1797 11.8203 61 19 61C26.1797 61 32 55.1797 32 48C32 40.8203 26.1797 35 19 35Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="w-1/2 pr-12">
                    <div class="p-4 text-right">
                      <p class="text-sm text-[var(--vp-c-text-3)] font-semibold">October 2024</p>
                      <h3 class="font-bold text-lg text-white mt-1">10,000+ Downloads</h3>
                    </div>
                  </div>
                </div>

                <div class="relative flex items-center justify-end">
                  <div class="absolute left-1/2 -translate-x-1/2 bg-[var(--vp-c-bg)] z-10">
                    <svg class="h-24 w-auto text-[#4060ff]/50" viewBox="0 0 38 96" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15.5908C21 23.2709 27.5881 29.3938 32.8477 34.9902C36.0427 38.3899 38 42.9665 38 48C38 53.0334 36.0426 57.6094 32.8477 61.0088C27.5879 66.6051 21 72.7281 21 80.4082V96H17V80.4082C17 72.7281 10.4121 66.6051 5.15234 61.0088C1.95742 57.6094 0 53.0334 0 48C0 42.9665 1.95729 38.3899 5.15234 34.9902C10.4119 29.3938 17 23.2709 17 15.5908V0H21V15.5908ZM19 35C11.8203 35 6 40.8203 6 48C6 55.1797 11.8203 61 19 61C26.1797 61 32 55.1797 32 48C32 40.8203 26.1797 35 19 35Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="w-1/2 pl-12">
                    <div class="p-4 text-left">
                      <p class="text-sm text-[var(--vp-c-text-3)] font-semibold">Apr 5, 2025</p>
                      <h3 class="font-bold text-lg text-white mt-1">v1.0 Launch</h3>
                    </div>
                  </div>
                </div>

                <div class="relative flex items-center justify-start">
                  <div class="absolute left-1/2 -translate-x-1/2 bg-[var(--vp-c-bg)] z-10">
                    <svg class="h-24 w-auto text-[#4060ff]/50" viewBox="0 0 38 96" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15.5908C21 23.2709 27.5881 29.3938 32.8477 34.9902C36.0427 38.3899 38 42.9665 38 48C38 53.0334 36.0426 57.6094 32.8477 61.0088C27.5879 66.6051 21 72.7281 21 80.4082V96H17V80.4082C17 72.7281 10.4121 66.6051 5.15234 61.0088C1.95742 57.6094 0 53.0334 0 48C0 42.9665 1.95729 38.3899 5.15234 34.9902C10.4119 29.3938 17 23.2709 17 15.5908V0H21V15.5908ZM19 35C11.8203 35 6 40.8203 6 48C6 55.1797 11.8203 61 19 61C26.1797 61 32 55.1797 32 48C32 40.8203 26.1797 35 19 35Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="w-1/2 pr-12">
                    <div class="p-4 text-right">
                      <p class="text-sm text-[var(--vp-c-text-3)] font-semibold">Sep 15, 2025</p>
                      <h3 class="font-bold text-xl text-white mt-1">v1.3.4 (Latest Release)</h3>
                    </div>
                  </div>
                </div>

                <div class="relative flex items-center justify-end">
                  <div class="absolute left-1/2 -translate-x-1/2 bg-[var(--vp-c-bg)] z-10">
                    <svg class="h-24 w-auto text-[#4060ff]/50" viewBox="0 0 38 96" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15.5908C21 23.2709 27.5881 29.3938 32.8477 34.9902C36.0427 38.3899 38 42.9665 38 48C38 53.0334 36.0426 57.6094 32.8477 61.0088C27.5879 66.6051 21 72.7281 21 80.4082V96H17V80.4082C17 72.7281 10.4121 66.6051 5.15234 61.0088C1.95742 57.6094 0 53.0334 0 48C0 42.9665 1.95729 38.3899 5.15234 34.9902C10.4119 29.3938 17 23.2709 17 15.5908V0H21V15.5908ZM19 35C11.8203 35 6 40.8203 6 48C6 55.1797 11.8203 61 19 61C26.1797 61 32 55.1797 32 48C32 40.8203 26.1797 35 19 35Z"
                        fill="currentColor" />
                    </svg>

                  </div>
                  <div class="w-1/2 pl-12">
                    <div class="p-4 text-left">
                      <p class="text-sm text-[var(--vp-c-text-3)] font-semibold">Sep 28, 2024</p>
                      <h3 class="font-bold text-lg text-white mt-1">1,000+ Stars on GitHub</h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="flex justify-center mt-12">
              <h3 class="font-bold text-lg text-white mt-1">What's next? 👀</h3>
            </div>
          </div>
        </div>

      </section>

      <section class="py-16 relative overflow-hidden">

        <div class="flex flex-col p-6 items-center relative">
          <div class="flex flex-col gap-6 lg:max-w-2xl items-center text-center">
            <div class="flex items-center gap-3 text-[#9ca3af]">
              <survey-fill class="size-5" />
              <span class="text-sm uppercase tracking-widest text-[#9ca3af]">
                Get Involved
              </span>
            </div>
            <div class="flex flex-col text-3xl font-semibold ">
              Help Us Plan What's Next<span class="mt-2 text-2xl">(With a Giveaway)</span>
            </div>
            <span class="font-normal text-[var(--vp-c-text-2)]">
              We're making big plans, but we need your help to get it right. Take a few minutes to share your feedback
              with us. <i>Plus, everyone who completes the survey joins our giveaway for some very cool stickers!
                <p class="text-sm">Giveaway ends October 15, 2025. Winners will be contacted via email.</p>
              </i>
            </span>

          </div>
        </div>

        <div class="mx-auto max-w-xl mt-12">
          <div class="border border-[var(--vp-c-divider)] rounded-lg" data-fillout-id="9VGsdEzUEjus"
            data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize>
          </div>
        </div>

      </section>


    </div>
    <SectionBlock icon="gift-fill" tagline="Birthday Sale" title="Celebrate With 33% Off"
      description="It's our 3rd birthday. To celebrate, get 33% off selected extensions and themes. Use the anniversary sale to customize your storefront or add powerful new features."
      description-align="start" />
    <div class="text-lg font-semibold text-center mt-2">
      <span class="text-[var(--vp-c-text-2)]">
        Sale has ended. Thank you for celebrating with us! Visit the <a href="/marketplace" class="!underline">marketplace</a> to see our full selection of extensions and themes.
      </span>
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
