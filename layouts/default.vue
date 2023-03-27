<template>
    <main>
        <slot></slot>
    </main>
</template>

<style lang = "scss" scoped>

main {
    @apply flex justify-between max-w-2xl px-4 pt-8 pb-16 mx-auto rounded-[2.4rem] rounded-b-none shadow-sm bg-white transition-colors duration-500;
    @apply sm:rounded-b-[2rem] sm:px-8 sm:pb-10;
    @apply dark:bg-slate-800;
}
</style>

<style lang = "scss">

body {
    @apply bg-slate-100 transition-colors duration-500;
    @apply dark:bg-black dark:text-white;
    font-family: 'SF UI Display' !important;
}

h1, h2, h3, h4, h5, h6,
div, p, small, a, em, i, b, strong {
    @apply text-slate-900;
    @apply dark:text-slate-200;
    font-family: 'SF UI Display' !important;
}

a:not(h2 a) {
    font-weight: inherit !important;
}

code {
    font-family: 'SFMono' !important;
    font-weight: inherit !important;
}

</style>