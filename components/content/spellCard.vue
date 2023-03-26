<template>

    <section class = "spell">
        <h2 class = "spell-name">
            <ContentSlot :use="$slots.name" unwrap="p" />
        </h2>
        <p class = "spell-properties">
            <ContentSlot :use="$slots.properties" unwrap="p" />
        </p>
        <p class = "spell-description">
            <ContentSlot :use="$slots.description" unwrap="p" />
        </p>

        <div class = "spell-description" v-if = "$slots.level1">
            <h3 class = "spell-level">
                На 1 круге:
            </h3>
            <ContentSlot :use="$slots.level1" unwrap="p" />
        </div>
        <div class = "spell-description" v-if = "$slots.level2">
            <h3 class = "spell-level">
                На 2 круге:
            </h3>
            <ContentSlot :use="$slots.level2" unwrap="p" />
        </div>
        <div class = "spell-description" v-if = "$slots.level3">
            <h3 class = "spell-level">
                На 3 круге:
            </h3>
            <ContentSlot :use="$slots.level3" unwrap="p" />
        </div>
    </section>

</template>

<script setup>

</script>

<style lang = "scss" scoped>

.spell {
    &-name {
        @apply my-0;
    }
    &-properties {
        @apply -mt-6 font-bold;
    }
    &-description {
        @apply mt-3;
    }
    &-level {
        @apply font-bold;
    }
}

</style>