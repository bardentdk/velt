<script setup>
import { Head } from '@inertiajs/vue3';
import { PhTrafficCone, PhEnvelopeSimple, PhTimer } from "@phosphor-icons/vue";
</script>

<template>
    <Head title="Maintenance en cours" />

    <div class="min-h-screen bg-brand-obsidian flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans text-white">
        <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="relative z-10 text-center max-w-2xl">
            <div class="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-premium backdrop-blur-sm animate-pulse">
                <PhTrafficCone :size="48" weight="fill" class="text-brand-indigo" />
            </div>

            <h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                Mise à jour <span class="text-brand-indigo">Système.</span>
            </h1>
            
            <p class="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                Nous déployons actuellement une nouvelle version de la plateforme pour améliorer votre expérience. L'accès sera rétabli dans quelques instants.
            </p>

            <div class="flex flex-col md:flex-row justify-center gap-6">
                <div class="flex items-center justify-center space-x-3 px-6 py-3 bg-white/5 rounded-xl border border-white/10">
                    <PhTimer :size="24" class="text-brand-indigo" />
                    <span class="font-bold">Retour estimé : < 1h</span>
                </div>
                <a href="mailto:hello@velt.re" class="flex items-center justify-center space-x-3 px-6 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-brand-indigo hover:border-brand-indigo transition-all duration-300">
                    <PhEnvelopeSimple :size="24" />
                    <span class="font-bold">Contacter le support</span>
                </a>
            </div>
        </div>

        <div class="absolute bottom-8 text-slate-500 text-sm font-mono">
            System Status: <span class="text-brand-indigo">MAINTENANCE_MODE</span>
        </div>
    </div>
</template>