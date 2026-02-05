<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import { PhCloudArrowUp, PhChartBar, PhGraph, PhArrowRight, PhCheckCircle, PhCode, PhMegaphone, PhStack } from "@phosphor-icons/vue";
import { Link, Head } from '@inertiajs/vue3';

defineProps({ featuredProjects: Array });

const saasProducts = [
    { title: 'ReunionFlow', description: 'Plateforme de gestion de flux pour les entreprises locales.', icon: PhCloudArrowUp },
    { title: 'VolcanoMetrics', description: 'Outil d\'analyse de données temps réel IA.', icon: PhChartBar },
    { title: 'PrimaryRouting', description: 'Optimisation de trajets et logistique insulaire.', icon: PhGraph },
];
</script>

<template>
    <Head title="Studio Digital & SaaS Producter à La Réunion" />

    <MainLayout>
        <section class="px-8 pt-28 pb-32 max-w-7xl mx-auto relative overflow-hidden">
            <div class="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>

            <div class="flex flex-col lg:flex-row items-center relative z-10">
                <div class="lg:w-1/2 lg:pr-20">
                    <div class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-brand-indigo/10 text-brand-indigo mb-8 ring-1 ring-inset ring-brand-indigo/20">
                        <span class="relative flex h-2.5 w-2.5 mr-3">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-indigo opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-indigo"></span>
                        </span>
                        Basé à La Réunion
                    </div>
                    <h1 class="text-6xl md:text-7xl font-black text-brand-obsidian leading-tight mb-8 tracking-tight">
                        Where Digital <br>
                        <span class="text-brand-indigo">Takes Form.</span>
                    </h1>
                    <p class="text-xl text-brand-gray max-w-lg mb-12 leading-relaxed font-medium">
                        Studio hybride : nous concevons des produits SaaS innovants et créons des expériences digitales sur-mesure pour les entreprises ambitieuses.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <PrimaryButton :href="route('saas')" class="px-10 py-4 text-lg">
                            Découvrir nos SaaS
                            <PhArrowRight class="ml-2" weight="bold" />
                        </PrimaryButton>
                        <Link :href="route('contact')" class="inline-flex items-center px-10 py-4 bg-white border-2 border-slate-200 rounded-lg font-bold text-brand-obsidian hover:border-brand-obsidian transition-all duration-300 text-lg">
                            Discuter d'un projet
                        </Link>
                    </div>
                </div>
                <div class="lg:w-1/2 mt-20 lg:mt-0 relative perspective-1000">
                    <img src="https://placehold.co/800x600/F8FAFC/6366F1?text=Velt+Premium+SaaS+Dashboard" alt="Velt SaaS Dashboard" class="rounded-2xl shadow-premium border border-slate-100 relative z-10 transform md:rotateY(-5deg) md:rotateX(5deg) hover:rotate-0 transition-all duration-700 ease-out bg-white p-2">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-indigo/20 blur-[100px] -z-10 rounded-full opacity-60"></div>
                </div>
            </div>
        </section>

        <section class="bg-brand-obsidian py-20 px-8">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-0 max-w-xl leading-tight">
                    La technologie au service de votre croissance.
                </h2>
                <div class="flex flex-col sm:flex-row gap-6 md:gap-12 text-white font-bold text-lg">
                    <div class="flex items-center"><PhCheckCircle class="text-brand-indigo mr-3" weight="fill" :size="24" /> Architecture Moderne</div>
                    <div class="flex items-center"><PhCheckCircle class="text-brand-indigo mr-3" weight="fill" :size="24" /> Performance SEO</div>
                </div>
            </div>
        </section>

        <section class="px-8 py-32 bg-bg-light relative overflow-hidden">
            <div class="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-20">
                    <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Nos Produits</h2>
                    <p class="text-5xl font-black text-brand-obsidian tracking-tight">Solutions SaaS natives</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="(product, index) in saasProducts" :key="index"
                         class="group p-10 bg-white rounded-2xl shadow-premium hover:shadow-indigo-glow hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-slate-100">
                        
                        <div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-colors duration-300">
                            <component :is="product.icon" :size="32" weight="fill" />
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-brand-obsidian">{{ product.title }}</h3>
                        <p class="text-brand-gray leading-relaxed mb-8 font-medium">
                            {{ product.description }}
                        </p>
                        <Link :href="route('saas')" class="inline-flex items-center font-bold text-brand-indigo hover:text-brand-indigo-dark transition items-center group/link">
                            En savoir plus <PhArrowRight class="ml-2 group-hover/link:translate-x-1 transition-transform" weight="bold" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-8 py-32 max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-end mb-20">
                 <div>
                    <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Le Studio</h2>
                    <p class="text-5xl font-black text-brand-obsidian tracking-tight">Expertise sur-mesure.</p>
                </div>
                <Link :href="route('studio')" class="inline-flex items-center font-bold text-brand-obsidian hover:text-brand-indigo transition mt-8 md:mt-0 text-lg group">
                    Voir tous nos services <PhArrowRight class="ml-2 group-hover:translate-x-1 transition-transform" weight="bold"/>
                </Link>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-2 p-12 bg-brand-obsidian rounded-3xl text-white relative overflow-hidden flex flex-col justify-between min-h-[450px] group shadow-premium">
                     <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-indigo/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                     
                     <div class="relative z-10">
                        <div class="w-14 h-14 bg-white/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6">
                            <PhDeviceMobile :size="32" weight="fill" />
                        </div>
                        <h3 class="text-3xl font-bold mb-4">UX/UI & Product Design</h3>
                        <p class="text-slate-300 text-lg max-w-md font-medium leading-relaxed">
                            Nous transformons des problèmes complexes en interfaces intuitives. Recherche, wireframing, design systems.
                        </p>
                     </div>
                     <div class="relative z-10 mt-12 ml-12">
                         <img src="https://placehold.co/600x400/0f172a/ffffff?text=UX+Wireframes+Premium" alt="UX Design" class="rounded-tl-2xl shadow-2xl border-t border-l border-white/10 transform group-hover:scale-105 transition-transform duration-500">
                     </div>
                </div>

                <div class="p-10 bg-white rounded-3xl border border-slate-100 shadow-premium relative overflow-hidden group hover:border-brand-indigo/30 transition-colors">
                    <div class="w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6">
                        <PhCode :size="32" weight="fill" />
                    </div>
                    <h3 class="text-2xl font-bold text-brand-obsidian mb-4">Développement Tech</h3>
                    <p class="text-brand-gray mb-8 font-medium leading-relaxed">Stack moderne : Laravel, Vue.js, Inertia. Code robuste, scalable et performant.</p>
                    <PhStack :size="120" class="text-brand-indigo/5 absolute -bottom-8 -right-8 group-hover:scale-110 transition-transform duration-500" weight="duotone"/>
                </div>

                <div class="p-10 bg-white rounded-3xl border border-slate-100 shadow-premium relative overflow-hidden group hover:border-brand-indigo/30 transition-colors">
                    <div class="w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6">
                        <PhMegaphone :size="32" weight="fill" />
                    </div>
                    <h3 class="text-2xl font-bold text-brand-obsidian mb-4">Branding & Identité</h3>
                    <p class="text-brand-gray mb-8 font-medium leading-relaxed">Création de marques fortes qui résonnent dans l'écosystème tech et digital.</p>
                    <PhMegaphone :size="120" class="text-brand-indigo/5 absolute -bottom-8 -right-8 group-hover:scale-110 transition-transform duration-500" weight="duotone"/>
                </div>
            </div>
        </section>
    </MainLayout>
</template>