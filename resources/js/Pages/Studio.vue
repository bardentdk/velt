<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import { PhDeviceMobile, PhCode, PhMegaphone, PhArrowRight, PhStack, PhCheck } from "@phosphor-icons/vue";
import { Link, Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Nos Services Studio" />

    <MainLayout>
         <section class="pt-32 pb-24 px-8 bg-bg-light text-center relative overflow-hidden bg-tech-grid">
            <div class="relative z-10 max-w-4xl mx-auto">
                <div class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-white text-brand-indigo mb-8 shadow-sm border border-brand-indigo/10">
                    <PhStack class="mr-2" weight="bold"/> Studio Digital Hybride
                </div>
                <h1 class="text-5xl md:text-7xl font-black text-brand-obsidian mb-8 tracking-tight">Nos expertises</h1>
                 <p class="text-2xl text-brand-gray leading-relaxed max-w-3xl mx-auto font-medium">
                    Nous combinons design, technologie et stratégie pour construire des produits digitaux qui durent.
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
                        Nous concevons des interfaces intuitives et élégantes, basées sur la donnée et centrées sur l'utilisateur.
                    </p>
                    <ul class="space-y-4 text-brand-obsidian mb-10 font-bold">
                        <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"><PhCheck weight="bold" size="14"/></div>User Research & Personas</li>
                        <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"><PhCheck weight="bold" size="14"/></div>Wireframing & Prototypage</li>
                        <li class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mr-4"><PhCheck weight="bold" size="14"/></div>Design Systems scalables</li>
                    </ul>
                </div>
                <div class="lg:col-span-3 grid grid-cols-2 gap-8 p-8 bg-bg-light rounded-3xl border border-slate-100 shadow-premium bg-tech-grid">
                     <img src="/images/studio/ux-project-1.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full bg-white" alt="UX Project 1">
                     <img src="/images/studio/ui-project-2.jpg" class="rounded-2xl shadow-sm border border-white object-cover h-full w-full mt-16 bg-white" alt="UX Project 2">
                </div>
            </div>

            <div class="rounded-3xl bg-brand-obsidian p-12 lg:p-20 text-white grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative overflow-hidden shadow-premium">
                 <div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-indigo/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div class="lg:order-2 relative z-10">
                     <div class="w-16 h-16 bg-white/10 text-brand-indigo rounded-2xl flex items-center justify-center mb-10">
                        <PhCode :size="40" weight="fill" />
                    </div>
                    <h2 class="text-4xl font-bold mb-8 tracking-tight">Développement Tech</h2>
                    <p class="text-slate-300 text-xl leading-relaxed mb-10 font-medium">
                        Applications sur-mesure avec une stack moderne pour une performance maximale. Pas de CMS lourds.
                    </p>
                     <h3 class="text-lg font-bold mb-6 text-white uppercase tracking-wider">Notre Stack</h3>
                     <div class="flex flex-wrap gap-4 font-bold">
                        <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl">Laravel 12</span>
                        <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl">Vue.js 3</span>
                        <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl">Inertia</span>
                        <span class="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl">Tailwind v4</span>
                     </div>
                </div>
                <div class="lg:order-1 relative z-10">
                    <img src="/images/studio/dev-dashboard.jpg" class="rounded-2xl shadow-2xl border border-white/10 w-full h-auto" alt="Dev Project">
                </div>
            </div>
            
            </section>

        <section class="px-8 py-32 text-center bg-bg-light relative overflow-hidden bg-tech-grid">
            <div class="relative z-10 max-w-3xl mx-auto">
                <h2 class="text-5xl font-black text-brand-obsidian mb-10 tracking-tight">Prêt à lancer votre projet ?</h2>
                <Link :href="route('contact')" class="inline-flex items-center px-10 py-5 bg-brand-indigo rounded-lg font-bold text-white hover:bg-brand-indigo-dark hover:shadow-indigo-glow transition-all group text-xl">
                    Démarrer une conversation
                    <PhArrowRight class="ml-4 group-hover:translate-x-1 transition-transform" weight="bold" />
                </Link>
            </div>
        </section>
    </MainLayout>
</template>