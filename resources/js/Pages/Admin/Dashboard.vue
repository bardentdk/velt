<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import { PhTrafficCone, PhCheckCircle, PhWarning } from "@phosphor-icons/vue";

// On récupère la prop isMaintenanceMode envoyée par le routeur (voir étape précédente)
const props = defineProps({
    isMaintenanceMode: Boolean
});

// Fonction pour basculer le mode via la route créée précédemment
const toggleMaintenance = () => {
    router.post(route('admin.maintenance.toggle'), {}, {
        preserveScroll: true,
    });
};
</script>

<template>
    <Head title="Admin Dashboard" />

    <AdminLayout>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
                <h1 class="text-4xl font-black text-brand-obsidian tracking-tight mb-2">Dashboard</h1>
                <p class="text-brand-gray font-medium text-lg">Vue d'ensemble et contrôle du système.</p>
            </div>

            <div class="flex items-center bg-white p-3 pr-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div class="mr-4 text-right">
                    <p class="text-xs font-bold uppercase tracking-wider text-slate-400">Mode Maintenance</p>
                    <p class="text-sm font-bold" :class="isMaintenanceMode ? 'text-brand-indigo' : 'text-green-600'">
                        {{ isMaintenanceMode ? 'Activé' : 'Désactivé' }}
                    </p>
                </div>
                
                <button 
                    @click="toggleMaintenance"
                    class="relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:ring-offset-2"
                    :class="isMaintenanceMode ? 'bg-brand-indigo' : 'bg-slate-200'"
                >
                    <span class="sr-only">Activer la maintenance</span>
                    <span 
                        class="inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-200 ease-in-out"
                        :class="isMaintenanceMode ? 'translate-x-7' : 'translate-x-1'"
                    />
                </button>
            </div>
        </div>

        <div v-if="isMaintenanceMode" class="mb-8 p-6 bg-brand-indigo/10 border border-brand-indigo/20 rounded-2xl flex items-center text-brand-indigo shadow-inner">
            <div class="w-12 h-12 bg-brand-indigo rounded-xl flex items-center justify-center mr-5 flex-shrink-0 animate-pulse">
                <PhTrafficCone :size="24" weight="fill" class="text-white" />
            </div>
            <div>
                <h3 class="font-bold text-xl mb-1">Le site est en maintenance</h3>
                <p class="text-brand-indigo/80 font-medium">Le site public affiche la page d'attente. Vous seul avez accès au site normal.</p>
            </div>
        </div>

        <div v-else class="mb-8 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center text-emerald-800 shadow-sm">
            <div class="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-5 flex-shrink-0">
                <PhCheckCircle :size="24" weight="fill" class="text-white" />
            </div>
            <div>
                <h3 class="font-bold text-xl mb-1">Système opérationnel</h3>
                <p class="text-emerald-700/80 font-medium">Le site est accessible à tous les visiteurs.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-premium col-span-2">
                <h2 class="text-xl font-bold text-brand-obsidian mb-4">Activité récente</h2>
                <div class="h-48 bg-bg-light rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 font-medium">
                    Graphique d'activité (Bientôt)
                </div>
            </div>
            <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-premium">
                <h2 class="text-xl font-bold text-brand-obsidian mb-4">Statistiques</h2>
                 <div class="space-y-4">
                    <div class="flex justify-between items-center p-3 bg-bg-light rounded-xl">
                        <span class="font-bold text-brand-gray">Projets</span>
                        <span class="text-brand-obsidian font-black text-lg">12</span>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-bg-light rounded-xl">
                        <span class="font-bold text-brand-gray">Articles</span>
                        <span class="text-brand-obsidian font-black text-lg">3</span>
                    </div>
                 </div>
            </div>
        </div>
    </AdminLayout>
</template>