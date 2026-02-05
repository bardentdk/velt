<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: {
        type: String,
        required: false,
        default: null,
    },
    type: {
        type: String,
        default: 'submit',
    }
});
</script>

<template>
    <component
        :is="href ? Link : 'button'"
        :href="href"
        :type="!href ? type : undefined"
        class="inline-flex items-center px-8 py-3 bg-cyan-400 border border-transparent rounded-full font-semibold text-indigo-950 tracking-wide hover:bg-cyan-300 hover:shadow-glow-cyan transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-indigo-950"
    >
        <slot />
    </component>
</template>