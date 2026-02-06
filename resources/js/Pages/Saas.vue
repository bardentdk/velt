<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import {
    PhCheckCircle,
    PhCloudArrowUp,
    PhChartBar,
    PhGraph,
    PhArrowRight,
    PhShieldCheck,
    PhServer,
    PhLifebuoy,
    PhCpu,
    PhQuestion
} from "@phosphor-icons/vue";
import { Head, Link } from '@inertiajs/vue3';

// --- DONNÉES EXISTANTES ---
const products = [
    {
        id: 'reunionflow',
        title: 'ReunionFlow',
        subtitle: 'Gestion de flux opérationnels.',
        description: 'Une plateforme complète pour optimiser les processus opérationnels spécifiques au marché réunionnais. Connectez vos équipes, suivez vos indicateurs et gagnez en productivité.',
        features: ['Tableaux de bord temps réel', 'Automatisations locales', 'Support prioritaire 974', 'Conformité RGPD'],
        icon: PhCloudArrowUp,
        // Remplacement par une image placeholder plus "SaaS" pour la démo
        image: 'https://placehold.co/800x500/F8FAFC/6366F1?text=ReunionFlow+Dashboard'
    },
    {
        id: 'volcanometrics',
        title: 'VolcanoMetrics',
        subtitle: 'Analyse de données temps réel IA.',
        description: 'Transformez vos données brutes en insights exploitables. VolcanoMetrics utilise des algorithmes avancés pour prédire les tendances et identifier les opportunités de croissance.',
        features: ['Prédictions par IA', 'Connecteurs API multiples', 'Rapports personnalisables', 'Sécurité de niveau bancaire'],
        icon: PhChartBar,
        image: 'https://placehold.co/800x500/F8FAFC/6366F1?text=VolcanoMetrics+Analytics'
    },
    {
        id: 'primaryrouting',
        title: 'PrimaryRouting',
        subtitle: 'Optimisation logistique et trajets.',
        description: 'La solution ultime pour la logistique sur l\'île. Réduisez vos coûts de carburant et améliorez vos temps de livraison grâce à notre moteur de calcul d\'itinéraires intelligent.',
        features: ['Calcul d\'itinéraires complexe', 'Prise en compte du trafic', 'Application mobile chauffeurs', 'Tracking en direct'],
        icon: PhGraph,
        image: 'https://placehold.co/800x500/F8FAFC/6366F1?text=PrimaryRouting+Map'
    }
];

// --- NOUVELLES DONNÉES POUR LES SECTIONS ENRICHIES ---

const saasBenefits = [
    { icon: PhLifebuoy, title: 'Support Local 974', description: 'Une équipe basée à La Réunion, qui comprend vos contraintes et disponible sur votre fuseau horaire.' },
    { icon: PhShieldCheck, title: 'Sécurité & Conformité', description: 'Données hébergées en France ou en UE, conformes RGPD, avec des standards de sécurité bancaires.' },
    { icon: PhCpu, title: 'Performance & Scalabilité', description: 'Architectures cloud-native capables de gérer votre croissance sans ralentissement.' },
    { icon: PhArrowsClockwise, title: 'Mises à jour continues', description: 'Profitez des dernières fonctionnalités et améliorations de sécurité sans intervention de votre part.' },
];

const infraStats = [
    { value: '99.99%', label: 'Uptime Garanti' },
    { value: '<100ms', label: 'Temps de latence moyen' },
    { value: '24/7', label: 'Monitoring proactif' },
    { value: 'Daily', label: 'Backups automatisés' },
];

const faqs = [
    { question: 'Proposez-vous des démos personnalisées ?', answer: 'Oui, absolument. Contactez-nous pour planifier une démonstration adaptée à votre secteur d\'activité et vos cas d\'usage spécifiques.' },
    { question: 'Comment se passe l\'intégration avec nos outils existants ?', answer: 'Nos produits SaaS disposent d\'API RESTful documentées et de connecteurs natifs pour les CRM et ERP les plus courants du marché.' },
    { question: 'Vos solutions sont-elles adaptées aux PME ?', answer: 'Tout à fait. Nos modèles tarifaires sont flexibles et conçus pour s\'adapter aux entreprises de toutes tailles, de la startup au grand groupe.' },
    { question: 'Où sont hébergées les données ?', answer: 'Nous privilégions des hébergeurs certifiés (AWS, Scaleway) avec des datacenters situés en France ou en Europe pour garantir la souveraineté des données.' },
    { question: 'Quel est le niveau de support inclus ?', answer: 'Tous nos plans incluent un support par email et chat. Les plans Entreprise bénéficient d\'un Account Manager dédié et d\'un support téléphonique prioritaire.' },
    { question: 'Puis-je migrer mes données actuelles ?', answer: 'Oui, nous proposons des services d\'accompagnement à la migration pour importer vos données historiques en toute sécurité.' },
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
                    Des solutions logicielles natives, puissantes et sécurisées, conçues pour accélérer votre croissance.
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
                            <PrimaryButton class="px-8 py-4 text-lg">
                                Demander une démo <PhArrowRight class="ml-3" weight="bold"/>
                            </PrimaryButton>
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

        <section class="px-8 py-32 bg-white relative overflow-hidden">
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-20">
                    <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">L'avantage Velt</h2>
                    <p class="text-5xl font-black text-brand-obsidian tracking-tight">Pourquoi choisir nos solutions ?</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div v-for="(benefit, index) in saasBenefits" :key="index" class="p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-300 group">
                        <div class="w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-indigo group-hover:text-white transition-colors">
                            <component :is="benefit.icon" :size="32" weight="fill" />
                        </div>
                        <h3 class="text-xl font-bold text-brand-obsidian mb-4">{{ benefit.title }}</h3>
                        <p class="text-brand-gray font-medium leading-relaxed">{{ benefit.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-brand-obsidian py-24 px-8 relative overflow-hidden">
            <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[150px] translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

            <div class="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                <div class="lg:w-1/2">
                    <div class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-brand-indigo/20 text-brand-indigo mb-8 ring-1 ring-inset ring-brand-indigo/30">
                        <PhServer class="mr-2" weight="bold"/> Infrastructure Cloud-Native
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                        Robustesse, Sécurité et <span class="text-brand-indigo">Performance.</span>
                    </h2>
                    <p class="text-xl text-slate-300 leading-relaxed font-medium mb-10">
                        Nos SaaS ne sont pas seulement de belles interfaces. Ils reposent sur une infrastructure cloud de pointe, conçue pour la résilience, la sécurité des données et une scalabilité infinie.
                    </p>
                    <ul class="space-y-4 text-white font-bold text-lg">
                        <li class="flex items-center"><PhShieldCheck class="text-brand-indigo mr-4 flex-shrink-0" weight="fill" :size="24" /> Chiffrement de bout en bout</li>
                        <li class="flex items-center"><PhShieldCheck class="text-brand-indigo mr-4 flex-shrink-0" weight="fill" :size="24" /> Conformité RGPD & Hébergement UE</li>
                        <li class="flex items-center"><PhShieldCheck class="text-brand-indigo mr-4 flex-shrink-0" weight="fill" :size="24" /> Architecture Haute Disponibilité</li>
                    </ul>
                </div>
                <div class="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                    <div v-for="(stat, index) in infraStats" :key="index" class="p-8 bg-white/5 border border-white/10 rounded-3xl text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <p class="text-4xl md:text-5xl font-black text-brand-indigo mb-2 tracking-tight">{{ stat.value }}</p>
                        <p class="text-slate-300 font-medium">{{ stat.label }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-8 py-32 bg-bg-light relative overflow-hidden bg-tech-grid">
            <div class="max-w-4xl mx-auto relative z-10">
                <div class="text-center mb-20">
                    <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">FAQ</h2>
                    <p class="text-5xl font-black text-brand-obsidian tracking-tight">Questions fréquentes</p>
                </div>
                
                <div class="space-y-6">
                    <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden hover:border-brand-indigo/30 transition-colors">
                        <div class="p-6 flex items-start">
                            <PhQuestion :size="28" weight="bold" class="text-brand-indigo mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <h3 class="text-xl font-bold text-brand-obsidian mb-3">{{ faq.question }}</h3>
                                <p class="text-brand-gray font-medium leading-relaxed">{{ faq.answer }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-8 py-40 text-center bg-white relative overflow-hidden">
            <div class="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>
            <div class="relative z-10 max-w-4xl mx-auto">
                <h2 class="text-6xl font-black text-brand-obsidian mb-10 tracking-tight leading-tight">Prêt à moderniser <br> vos <span class="text-brand-indigo">opérations ?</span></h2>
                <p class="text-xl text-brand-gray mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                    Planifiez une démonstration personnalisée de nos solutions et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
                </p>
                <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <PrimaryButton class="px-12 py-5 text-xl">
                        Réserver une démo
                        <PhArrowRight class="ml-4" weight="bold" />
                    </PrimaryButton>
                    <Link :href="route('contact')" class="inline-flex items-center px-12 py-5 bg-white border-2 border-slate-200 rounded-xl font-bold text-brand-obsidian hover:border-brand-obsidian transition-all duration-300 text-xl">
                        Contacter l'équipe commerciale
                    </Link>
                </div>
            </div>
        </section>
    </MainLayout>
</template>