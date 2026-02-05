<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: { type: String, default: null },
    type: { type: String, default: 'submit' }
});
</script>

<template>
    <component
        :is="href ? Link : 'button'"
        :href="href"
        :type="!href ? type : undefined"
        class="inline-flex items-center justify-center px-8 py-3 bg-brand-indigo text-white font-bold tracking-wide rounded-lg transition-all duration-300 hover:bg-brand-indigo-dark hover:shadow-indigo-glow hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:ring-offset-2"
    >
        <slot />
    </component>
</template>