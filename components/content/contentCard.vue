<template>

    <nuxt-link 
        class = "card grid grid-rows-2 grid-flow-col gap-x-4"
        :to = "href"
    >
        <div
            class = "card-icon row-span-2 col-span-1"
            
        >
            <icon 
                :name="icon"
                class = "card-icon-char"
                size = "32px"
            />
        </div>

        <div class = "card-title col-span-12">
            {{ title }}
        </div>

        <div class = "card-lead col-span-12">
            {{ lead }}
        </div>
    </nuxt-link> 

</template>

<script setup>

defineProps([
    'title',
    'lead',
    'href',
    'icon'
])

</script>

<style lang = "scss" scoped>

.card {
    @apply w-full my-2 mr-4 rounded-xl bg-emerald-50 p-5 pb-4 inline-grid transition-colors duration-100;
    @apply sm:w-[calc(50%-1rem)] sm:px-5 sm:pt-4 sm:pb-3;
    @apply dark:bg-emerald-900/50;

    &:hover {
        @apply bg-emerald-100;
        @apply dark:bg-emerald-800/70;

        .card-title, 
        .card-icon {
            @apply text-emerald-600;
            @apply dark:text-emerald-100;
        }
        .card-lead {
            @apply text-black;
            @apply dark:text-white;
        }
    }

    &:active {
        @apply bg-emerald-100;
        @apply sm:bg-emerald-200;
        @apply dark:bg-emerald-800/70;
        @apply sm:dark:bg-emerald-800/80;
    }

    &-icon {
        @apply text-emerald-500 flex items-center justify-center;
        @apply dark:text-emerald-200;
    }
    
    &-title {
        @apply font-bold text-lg text-emerald-500 leading-tight transition-colors duration-100;
        @apply dark:text-emerald-200;
    }
    
    &-lead {
        @apply text-sm text-black/60;
        @apply dark:text-white/75;
    }
}

</style>