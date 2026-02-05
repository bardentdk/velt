<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({ href: String });
</script>

<template>
    <component :is="href ? Link : 'button'" :href="href" class="inline-flex items-center px-8 py-3 bg-transparent border-2 border-slate-400/30 rounded-full font-semibold text-slate-100 tracking-wide hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
        <slot />
    </component>
</template>