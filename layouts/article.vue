<template>
    <nuxt-layout name = "default">
        <slot></slot>
        <div class = "controls">
            <nuxt-link
                class = "controls-button"
                :to = "prev._path"
                v-if = "prev"
            >
                <Icon name = "ph:caret-double-left-duotone"></Icon>
                {{ prev.navigation ? prev.navigation.title : prev.title }}                
            </nuxt-link>
            <nuxt-link
                class = "controls-button"
                :to = "next._path"
                v-if = "next"
            >
                {{ next.navigation ? next.navigation.title : next.title }}                
                <Icon name = "ph:caret-double-right-duotone"></Icon>
            </nuxt-link>
        </div>
    </nuxt-layout>
</template>

<script setup>

const { prev, next } = useContent()

</script>

<style lang = "scss" scoped>
.controls {
    @apply sm:p-8 py-8 px-4 absolute -bottom-20 left-0 w-full flex justify-between;

    &-button {
        @apply text-slate-500  rounded-2xl transition-colors flex items-center gap-x-1.5;
        @apply dark:text-slate-400;

        &:hover {
            @apply text-emerald-500;
        }
    }
}

</style>