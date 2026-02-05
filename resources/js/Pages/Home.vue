<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import SecondaryButton from '@/Components/UI/SecondaryButton.vue';
import { PhCloudArrowUp, PhChartBar, PhGraph, PhDeviceMobile, PhCode, PhMegaphone } from "@phosphor-icons/vue";

// Les props venant du contrôleur Laravel
defineProps({
    featuredProjects: Array,
});

// Données statiques pour les produits SaaS (à remplacer par la BDD plus tard)
const saasProducts = [
    { title: 'ReunionFlow', description: 'Plateforme de gestion de flux pour les entreprises locales.', icon: PhCloudArrowUp },
    { title: 'VolcanoMetrics', description: 'Outil d\'analyse de données temps réel.', icon: PhChartBar },
    { title: 'PrimaryRouting', description: 'Optimisation de trajets et logistique.', icon: PhGraph },
];
</script>

<template>
    <Head title="Studio Digital & SaaS Producter à La Réunion">
        <meta name="description" content="Velt est un studio digital et créateur de produits SaaS basé à La Réunion. Où le digital prend forme.">
    </Head>

    <MainLayout>
        <section class="px-8 pt-20 pb-32 max-w-7xl mx-auto relative">
            <h2 class="text-cyan-400 tracking-[0.2em] text-sm font-bold mb-4 uppercase">
                Where Digital Takes Form
            </h2>
            <h1 class="text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight mb-8">
                VELT STUDIO: Shaping Digital Realities in <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">La Réunion.</span>
            </h1>
            <p class="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                Creating cutting-edge SaaS and bespoke digital experiences that drive innovation and growth.
            </p>
            <div class="flex flex-wrap gap-6">
                <PrimaryButton :href="route('saas')">Explore Our SaaS</PrimaryButton>
                <SecondaryButton :href="route('contact')">Discuss Your Project</SecondaryButton>
            </div>

            <div class="absolute right-[-10%] top-1/2 -translate-y-1/2 md:opacity-80 opacity-40 pointer-events-none z-[-1] w-[800px] lg:w-[1000px] h-auto mix-blend-screen">
                <img src="/images/reunion-wireframe.svg" alt="La Réunion Digital Map" class="w-full h-full">
            </div>
        </section>

        <section class="px-8 py-24 max-w-7xl mx-auto relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(product, index) in saasProducts" :key="index"
                     class="group p-8 rounded-3xl bg-indigo-900/40 border border-slate-400/10 backdrop-blur-md hover:bg-indigo-900/60 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden">

                    <div class="absolute inset-0 bg-gradient-radial-top from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div class="w-16 h-16 bg-indigo-950 rounded-2xl flex items-center justify-center mb-6 border border-slate-400/20 group-hover:border-cyan-400/50 transition-colors">
                        <component :is="product.icon" :size="32" weight="fill" class="text-cyan-400" />
                    </div>
                    <h3 class="text-2xl font-bold mb-4">{{ product.title }}</h3>
                    <p class="text-slate-400 leading-relaxed">
                        {{ product.description }}
                        <span class="block mt-2 opacity-70 text-sm">Immersive proactive for datasets, operational runway.</span>
                    </p>
                </div>
            </div>
        </section>

        <section class="px-8 py-24 max-w-7xl mx-auto">
            <h2 class="text-4xl font-bold mb-16">Studio Services</h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div class="flex items-center mb-6">
                        <PhDeviceMobile :size="32" weight="fill" class="text-cyan-400 mr-4" />
                        <h3 class="text-2xl font-bold">UX/UI</h3>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <img src="/images/dev-dashboard.jpeg" class="rounded-xl border border-slate-400/10 hover:border-cyan-400/50 transition-all" alt="UX Project">
                        <img src="/images/branding-book.jpeg" class="rounded-xl border border-slate-400/10 hover:border-cyan-400/50 transition-all" alt="UI Project">
                    </div>
                </div>

                 <div>
                     <div class="flex items-center mb-6">
                        <PhCode :size="32" weight="fill" class="text-cyan-400 mr-4" />
                        <h3 class="text-2xl font-bold">Development</h3>
                    </div>
                    <div class="space-y-4">
                        <img src="/images/home-ux.jpeg" class="rounded-xl border border-slate-400/10 w-full h-48 object-cover" alt="Dev Project">
                         </div>
                </div>

                <div>
                     <div class="flex items-center mb-6">
                        <PhMegaphone :size="32" weight="fill" class="text-cyan-400 mr-4" />
                        <h3 class="text-2xl font-bold">Branding</h3>
                    </div>
                     <div class="grid grid-cols-2 gap-4">
                        <img src="https://placehold.co/300x400/0F172A/22D3EE?text=Brand+Identity" class="rounded-xl border border-slate-400/10" alt="Branding">
                        <img src="https://placehold.co/300x400/0F172A/22D3EE?text=Logofolio" class="rounded-xl border border-slate-400/10" alt="Branding">
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>