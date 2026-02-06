<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import {
    PhDeviceMobile,
    PhCode,
    PhMegaphone,
    PhArrowRight,
    PhStack,
    PhCheck,
    PhLightbulb,
    PhPaintBrush,
    PhRocketLaunch,
    PhArrowsClockwise,
    PhFigmaLogo,
    PhGithubLogo,
    PhSlackLogo,
    PhNotionLogo,
    PhSketchLogo,
    PhTerminalWindow
} from "@phosphor-icons/vue";
import { Link, Head } from '@inertiajs/vue3';

// Données pour le processus créatif
const processSteps = [
    { icon: PhLightbulb, title: '1. Immersion & Stratégie', description: 'Nous plongeons dans votre business pour définir les objectifs, les personas et la feuille de route produit.' },
    { icon: PhPaintBrush, title: '2. Design & Prototypage', description: 'Création de wireframes UX et de maquettes UI haute-fidélité interactives sur Figma.' },
    { icon: PhCode, title: '3. Développement Agile', description: 'Codage en sprints avec des points d\'étape réguliers. Stack moderne, tests et revue de code.' },
    { icon: PhRocketLaunch, title: '4. Lancement & Itération', description: 'Mise en production sécurisée, suivi des analytics et améliorations continues basées sur la data.' },
];

// Données pour la boîte à outils (Toolkit)
const toolkit = [
    { icon: PhFigmaLogo, name: 'Figma', category: 'Design & Prototypage' },
    { icon: PhNotionLogo, name: 'Notion', category: 'Documentation & Gestion' },
    { icon: PhSlackLogo, name: 'Slack', category: 'Communication' },
    // Note: Remplacement d'icônes spécifiques non dispos dans Phosphor basic par des génériques ou proches
    { icon: PhArrowsClockwise, name: 'Linear', category: 'Gestion de projet Agile' },
    { icon: PhGithubLogo, name: 'GitHub', category: 'Versionning & CI/CD' },
    { icon: PhTerminalWindow, name: 'VS Code', category: 'Développement' },
];
</script>

<template>
    <Head title="Nos Services Studio - Design & Développement" />

    <MainLayout>
         <section class="pt-32 pb-24 px-8 bg-bg-light text-center relative overflow-hidden bg-tech-grid">
            <div class="relative z-10 max-w-4xl mx-auto">
                <div class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-white text-brand-indigo mb-8 shadow-sm border border-brand-indigo/10">
                    <PhStack class="mr-2" weight="bold"/> Studio Digital Hybride
                </div>
                <h1 class="text-5xl md:text-7xl font-black text-brand-obsidian mb-8 tracking-tight">Nos expertises</h1>
                 <p class="text-2xl text-brand-gray leading-relaxed max-w-3xl mx-auto font-medium">
                    Nous combinons design, technologie et stratégie pour construire des produits digitaux qui durent et scalent.
                </p>
            </div>
        </section>

        <section class="px-8 py-32 max-w-7xl mx-auto relative z-10 space-y-40">

            <div class="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
                <div class="lg:col-span-2">
                    <div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10">
                        <PhDeviceMobile :size="40" weight="fill" />
                    </div>
                    <h2 class="text-4xl font-bold text-brand-obsidian mb-8 tracking-tight">UX/UI Design</h2>
                    <p class="text-brand-gray text-xl leading-relaxed mb-10 font-medium">
                        Nous concevons des interfaces intuitives et élégantes, basées sur la donnée et centrées sur l'utilisateur final.
                    </p>
                    <ul class="space-y-4 text-brand-obsidian mb-10 font-bold">
                        <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"><PhCheck weight="bold" size="14"/></div>User Research & Personas</li>
                        <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"><PhCheck weight="bold" size="14"/></div>Wireframing & Prototypage (Figma)</li>
                        <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"><PhCheck weight="bold" size="14"/></div>Design Systems scalables</li>
                    </ul>
                </div>
                <div class="lg:col-span-3 grid grid-cols-2 gap-8 p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-premium bg-tech-grid">
                     <img src="/images/studio/ux-project-1.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white" alt="UX Project 1">
                     <img src="/images/studio/ui-project-2.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full mt-16 bg-white" alt="UX Project 2">
                </div>
            </div>

            <div class="rounded-3xl bg-brand-obsidian p-12 lg:p-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative overflow-hidden shadow-premium">
                 <div class="absolute top-1/2 right-0 w-[80%] md:w-[500px] h-[80%] md:h-[500px] bg-brand-indigo/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div class="lg:order-2 relative z-10">
                     <div class="w-16 h-16 bg-white/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10">
                        <PhCode :size="40" weight="fill" />
                    </div>
                    <h2 class="text-4xl font-bold mb-8 tracking-tight">Développement Tech</h2>
                    <p class="text-slate-300 text-xl leading-relaxed mb-10 font-medium">
                        Applications sur-mesure avec une stack moderne pour une performance maximale. Pas de CMS lourds, du code propre et maintenable.
                    </p>
                     <h3 class="text-lg font-bold mb-6 text-white uppercase tracking-wider">Notre Stack Principale</h3>
                     <div class="flex flex-wrap gap-4 font-bold">
                        <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center"><PhCode class="mr-2 text-brand-indigo"/> Laravel 12</span>
                        <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center"><PhDeviceMobile class="mr-2 text-brand-indigo"/> Vue.js 3</span>
                        <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center"><PhArrowsClockwise class="mr-2 text-brand-indigo"/> Inertia SSR</span>
                        <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl flex items-center"><PhPaintBrush class="mr-2 text-brand-indigo"/> Tailwind v4</span>
                     </div>
                </div>
                <div class="lg:order-1 relative z-10">
                    <img src="/images/studio/dev-dashboard.jpg" class="rounded-2xl shadow-2xl border border-white/10 w-full h-auto" alt="Dev Project">
                </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center md:flex-row-reverse">
                <div class="lg:col-span-2 lg:order-2">
                    <div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10">
                        <PhMegaphone :size="40" weight="fill" />
                    </div>
                    <h2 class="text-4xl font-bold text-brand-obsidian mb-8 tracking-tight">Branding & Identité</h2>
                    <p class="text-brand-gray text-xl leading-relaxed mb-10 font-medium">
                        Création de marques fortes qui résonnent dans l'écosystème tech et digital. Nous définissons votre voix visuelle et verbale.
                    </p>
                    <ul class="space-y-4 text-brand-obsidian mb-10 font-bold">
                        <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"><PhCheck weight="bold" size="14"/></div>Stratégie de marque & Positionnement</li>
                        <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"><PhCheck weight="bold" size="14"/></div>Identité visuelle & Logotype</li>
                        <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"><PhCheck weight="bold" size="14"/></div>Brand Guidelines & Tone of Voice</li>
                    </ul>
                </div>
                <div class="lg:col-span-3 lg:order-1 grid grid-cols-2 gap-8 p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-premium bg-tech-grid relative overflow-hidden">
                      <div class="col-span-2 relative group z-10">
                         <img src="/images/studio/branding-book.jpg" class="rounded-2xl shadow-sm border border-white object-cover w-full h-auto bg-white" alt="Branding Highlight">
                     </div>
                     <img src="/images/studio/logofolio.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white" alt="Brand Project 1">
                     <img src="/images/studio/stationery.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white" alt="Brand Project 2">
                      <PhMegaphone :size="200" class="text-brand-indigo/5 absolute -bottom-10 -left-10 pointer-events-none" weight="duotone"/>
                </div>
            </div>

        </section>

        <section class="px-8 py-32 bg-white relative overflow-hidden border-t border-slate-100">
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-20">
                    <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Notre Méthodologie</h2>
                    <p class="text-5xl font-black text-brand-obsidian tracking-tight">Un processus clair, de l'idée au produit</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(step, index) in processSteps" :key="index" class="relative group">
                        <div class="p-8 bg-bg-light rounded-3xl shadow-sm border border-slate-100 h-full relative z-10 hover:shadow-premium hover:border-brand-indigo/30 transition-all duration-300">
                            <div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-colors">
                                <component :is="step.icon" :size="32" weight="fill" />
                            </div>
                            <h3 class="text-xl font-bold text-brand-obsidian mb-4 leading-tight">{{ step.title }}</h3>
                            <p class="text-brand-gray font-medium leading-relaxed">{{ step.description }}</p>
                        </div>
                         <div v-if="index < processSteps.length - 1" class="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0 -ml-4">
                            <div class="absolute right-0 top-1/2 w-3 h-3 bg-white border-2 border-brand-indigo rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-8 py-32 bg-brand-obsidian relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
             <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-indigo/10 rounded-full blur-[150px] pointer-events-none translate-y-1/2"></div>

            <div class="max-w-7xl mx-auto relative z-10 text-center">
                <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Notre Toolkit</h2>
                <p class="text-5xl font-black text-white tracking-tight mb-12">Les meilleurs outils pour un travail de qualité</p>
                <p class="text-xl text-slate-300 max-w-2xl mx-auto mb-20 font-medium">Nous utilisons des outils modernes et collaboratifs pour assurer fluidité et transparence tout au long du projet.</p>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    <div v-for="(tool, index) in toolkit" :key="index" class="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 transition-colors group">
                        <component :is="tool.icon" :size="48" class="text-slate-300 group-hover:text-brand-indigo transition-colors mb-4" weight="duotone"/>
                        <p class="text-white font-bold text-lg mb-1">{{ tool.name }}</p>
                        <p class="text-slate-400 text-xs font-medium">{{ tool.category }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-8 py-32 text-center bg-bg-light relative overflow-hidden bg-tech-grid border-t border-slate-100">
            <div class="relative z-10 max-w-3xl mx-auto">
                <h2 class="text-5xl font-black text-brand-obsidian mb-10 tracking-tight">Prêt à lancer votre projet ?</h2>
                <p class="text-xl text-brand-gray mb-12 font-medium leading-relaxed">Que ce soit pour un MVP, une refonte ou un produit complexe, nous sommes prêts à relever le défi.</p>
                <Link :href="route('contact')" class="inline-flex items-center px-10 py-5 bg-brand-indigo rounded-lg font-bold text-white hover:bg-brand-indigo-dark hover:shadow-indigo-glow transition-all group text-xl">
                    Démarrer une conversation
                    <PhArrowRight class="ml-4 group-hover:translate-x-1 transition-transform" weight="bold" />
                </Link>
            </div>
        </section>
    </MainLayout>
</template>