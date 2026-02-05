<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import { PhCheckCircle, PhCloudArrowUp, PhChartBar, PhGraph } from "@phosphor-icons/vue";

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
    <Head title="Nos Produits SaaS Innovants" description="Découvrez nos solutions logicielles développées à La Réunion : ReunionFlow, VolcanoMetrics et PrimaryRouting." />

    <MainLayout>
        <section class="pt-20 pb-16 px-8 max-w-7xl mx-auto text-center relative z-10">
            <h1 class="text-4xl md:text-5xl font-extrabold mb-6">OUR SAAS PRODUCTS</h1>
             <p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Creating cutting-edge SaaS and bespoke digital experiences that drive innovation and growth from La Réunion to the world.
            </p>
        </section>

        <section class="px-8 pb-32 max-w-7xl mx-auto relative z-10 space-y-32">
            <div v-for="(product, index) in products" :key="product.id"
                 class="flex flex-col lg:flex-row items-center gap-16"
                 :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
            >
                <div class="flex-1 space-y-8">
                    <div class="flex items-center space-x-4">
                         <div class="w-12 h-12 bg-indigo-900/50 rounded-xl flex items-center justify-center border border-cyan-400/20">
                            <component :is="product.icon" :size="28" weight="fill" class="text-cyan-400" />
                        </div>
                        <h2 class="text-3xl font-bold">{{ product.title }}</h2>
                    </div>
                    <p class="text-xl text-cyan-300">{{ product.subtitle }}</p>
                    <p class="text-slate-400 leading-relaxed text-lg">{{ product.description }}</p>

                    <ul class="space-y-4 mt-8">
                        <li v-for="feature in product.features" :key="feature" class="flex items-center space-x-3">
                            <PhCheckCircle :size="24" weight="fill" class="text-cyan-400 flex-shrink-0" />
                            <span class="text-slate-100">{{ feature }}</span>
                        </li>
                    </ul>
                </div>

                <div class="flex-1 relative group">
                    <div class="absolute inset-0 bg-cyan-400/20 blur-[80px] rounded-full group-hover:bg-cyan-400/30 transition-all duration-700 -z-10"></div>
                    <img :src="product.image" :alt="product.title + ' Dashboard'"
                         class="rounded-2xl border-2 border-slate-400/10 shadow-2xl shadow-indigo-950/50 group-hover:border-cyan-400/50 group-hover:scale-[1.02] transition-all duration-500 object-cover w-full h-auto"
                    >
                </div>
            </div>
        </section>
    </MainLayout>
</template>