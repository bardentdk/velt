<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import { PhCheckCircle, PhCloudArrowUp, PhChartBar, PhGraph, PhArrowRight } from "@phosphor-icons/vue";
import { Head } from '@inertiajs/vue3';

// Données statiques des produits (à terme, pourraient venir d'une config ou BDD)
const products = [
    {
        id: 'reunionflow',
        title: 'ReunionFlow',
        subtitle: 'Gestion de flux pour les entreprises locales.',
        description: 'Une plateforme complète pour optimiser les processus opérationnels spécifiques au marché réunionnais. Connectez vos équipes, suivez vos indicateurs et gagnez en productivité.',
        features: ['Tableaux de bord temps réel', 'Automatisations locales', 'Support prioritaire 974', 'Conformité RGPD'],
        icon: PhCloudArrowUp,
        // Placeholder pour la capture d'écran du dashboard
        image: 'https://placehold.co/800x500/0F172A/22D3EE?text=ReunionFlow+Dashboard+Screen'
    },
    {
        id: 'volcanometrics',
        title: 'VolcanoMetrics',
        subtitle: 'Analyse de données haute performance.',
        description: 'Transformez vos données brutes en insights exploitables. VolcanoMetrics utilise des algorithmes avancés pour prédire les tendances et identifier les opportunités de croissance.',
        features: ['Prédictions par IA', 'Connecteurs API multiples', 'Rapports personnalisables', 'Sécurité de niveau bancaire'],
        icon: PhChartBar,
        image: 'https://placehold.co/800x500/0F172A/22D3EE?text=VolcanoMetrics+Analytics+Screen'
    },
    {
        id: 'primaryrouting',
        title: 'PrimaryRouting',
        subtitle: 'Optimisation logistique et trajets.',
        description: 'La solution ultime pour la logistique sur l\'île. Réduisez vos coûts de carburant et améliorez vos temps de livraison grâce à notre moteur de calcul d\'itinéraires intelligent.',
        features: ['Calcul d\'itinéraires complexe', 'Prise en compte du trafic', 'Application mobile chauffeurs', 'Tracking en direct'],
        icon: PhGraph,
        image: 'https://placehold.co/800x500/0F172A/22D3EE?text=PrimaryRouting+Map+Screen'
    }
];
</script>

<template>
    <Head title="Nos Produits SaaS Innovants" />

    <MainLayout>
        <section class="pt-32 pb-24 px-8 bg-brand-obsidian text-center relative overflow-hidden">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-indigo/10 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div class="relative z-10 max-w-4xl mx-auto">
                <h1 class="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">Nos Produits SaaS</h1>
                 <p class="text-2xl text-slate-300 leading-relaxed font-medium">
                    Des solutions logicielles natives, conçues pour résoudre des problèmes réels avec une technologie de pointe.
                </p>
            </div>
        </section>

        <section class="relative z-10">
            <div v-for="(product, index) in products" :key="product.id"
                 class="py-28 px-8"
                 :class="index % 2 === 0 ? 'bg-white' : 'bg-bg-light bg-tech-grid'"
            >
                <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20"
                     :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }">

                    <div class="flex-1 space-y-8">
                        <div class="flex items-center space-x-6">
                             <div class="w-16 h-16 bg-brand-indigo text-white rounded-2xl flex items-center justify-center shadow-indigo-glow">
                                <component :is="product.icon" :size="36" weight="fill" />
                            </div>
                            <h2 class="text-4xl font-black text-brand-obsidian tracking-tight">{{ product.title }}</h2>
                        </div>
                        <p class="text-2xl text-brand-indigo font-bold">{{ product.subtitle }}</p>
                        <p class="text-brand-gray leading-relaxed text-xl font-medium">{{ product.description }}</p>

                        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                            <li v-for="feature in product.features" :key="feature" class="flex items-center space-x-3 font-bold text-brand-obsidian">
                                <PhCheckCircle :size="24" weight="fill" class="text-brand-indigo flex-shrink-0" />
                                <span>{{ feature }}</span>
                            </li>
                        </ul>
                        <div class="pt-8">
                            <PrimaryButton class="px-8 py-4 text-lg">Demander une démo <PhArrowRight class="ml-3" weight="bold"/></PrimaryButton>
                        </div>
                    </div>

                    <div class="flex-1 relative perspective-1000">
                        <img :src="product.image" :alt="product.title + ' Dashboard'"
                             class="rounded-2xl border border-slate-200 shadow-premium w-full h-auto bg-white p-2 transform transition-all duration-700 hover:rotate-0"
                             :class="index % 2 === 0 ? 'lg:rotateY(5deg)' : 'lg:rotateY(-5deg)'"
                        >
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>