<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import { PhDeviceMobile, PhCode, PhMegaphone, PhArrowRight } from "@phosphor-icons/vue";
import { Link } from '@inertiajs/vue3';

// Cette page est statique pour l'instant, mais la section "Development"
// devra afficher les projets dynamiques venant de la BDD plus tard.
defineProps({
    // featuredProjects: Array, // À décommenter quand on liera le backend
});
</script>

<template>
    <Head title="Nos Services Studio : UX/UI, Développement, Branding" description="Velt Studio transforme vos idées en réalités digitales. Expertise en design d'expérience utilisateur, développement sur-mesure et identité de marque." />

    <MainLayout>
         <section class="pt-20 pb-16 px-8 max-w-7xl mx-auto text-center relative z-10">
            <h1 class="text-4xl md:text-5xl font-extrabold mb-6">OUR STUDIO SERVICES</h1>
             <p class="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Developing, designing and launching digital products. From concept to code, we handle the entire lifecycle.
            </p>
        </section>

        <section class="px-8 pb-32 max-w-7xl mx-auto relative z-10 space-y-24">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <div class="flex items-center mb-6">
                        <PhDeviceMobile :size="40" weight="fill" class="text-cyan-400 mr-6" />
                        <h2 class="text-3xl font-bold">UX/UI Design</h2>
                    </div>
                    <p class="text-slate-400 text-lg leading-relaxed mb-8">
                        Nous créons des interfaces utilisateur intuitives et centrées sur l'humain. Notre processus commence par la recherche utilisateur, passe par le wireframing et se termine par des maquettes haute-fidélité (comme celle de ce site !) qui allient esthétique et fonctionnalité.
                    </p>
                     <h3 class="text-xl font-bold mb-4 text-slate-100">Case Studies</h3>
                     <p class="text-slate-500 italic">Projets détaillés bientôt disponibles.</p>
                </div>
                <div class="grid grid-cols-2 gap-6">
                     <img src="https://placehold.co/400x500/0F172A/22D3EE?text=Mobile+App+UX" class="rounded-2xl border border-slate-400/10 hover:border-cyan-400/50 transition-all shadow-lg object-cover h-full w-full" alt="UX Project 1">
                     <img src="https://placehold.co/400x500/0F172A/67E8F9?text=Web+Platform+UI" class="rounded-2xl border border-slate-400/10 hover:border-cyan-400/50 transition-all shadow-lg object-cover h-full w-full mt-12" alt="UX Project 2">
                </div>
            </div>


            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:flex-row-reverse">
                <div class="lg:order-2">
                    <div class="flex items-center mb-6">
                        <PhCode :size="40" weight="fill" class="text-cyan-400 mr-6" />
                        <h2 class="text-3xl font-bold">Development</h2>
                    </div>
                    <p class="text-slate-400 text-lg leading-relaxed mb-8">
                        Experts en architectures modernes (Laravel, Vue.js, React), nous développons des applications web et mobiles robustes, scalables et sécurisées. Nous transformons les designs complexes en code performant, optimisé pour le SEO et la rapidité.
                    </p>
                     <h3 class="text-xl font-bold mb-4 text-slate-100">Process</h3>
                     <p class="text-slate-400">Agile methodology, CI/CD pipelines, Code reviews, Automated testing.</p>
                </div>
                 <div class="lg:order-1 relative group">
                    <div class="absolute inset-0 bg-cyan-400/10 blur-[60px] rounded-full group-hover:bg-cyan-400/20 transition-all duration-700 -z-10"></div>
                    <img src="https://placehold.co/800x600/0F172A/22D3EE?text=Complex+Admin+Dashboard+Dev" class="rounded-2xl border border-slate-400/10 shadow-2xl hover:border-cyan-400/50 transition-all object-cover w-full h-auto" alt="Dev Project">
                </div>
            </div>


            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <div class="flex items-center mb-6">
                        <PhMegaphone :size="40" weight="fill" class="text-cyan-400 mr-6" />
                        <h2 class="text-3xl font-bold">Branding & Identity</h2>
                    </div>
                    <p class="text-slate-400 text-lg leading-relaxed mb-8">
                        Une présence digitale forte commence par une marque forte. Nous forgeons des identités visuelles mémorables : logos, chartes graphiques, typographies et guidelines qui racontent l'histoire de votre entreprise et résonnent avec votre audience.
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-6 relative">
                     <div class="col-span-2 relative group z-10">
                         <img src="https://placehold.co/800x400/0F172A/22D3EE?text=Velt+Brand+Guidelines+Book" class="rounded-2xl border border-slate-400/10 shadow-lg hover:border-cyan-400/50 transition-all object-cover w-full h-auto" alt="Branding Highlight">
                     </div>
                     <img src="https://placehold.co/400x300/0F172A/67E8F9?text=Logofolio+Set" class="rounded-2xl border border-slate-400/10 shadow hover:border-cyan-400/50 transition-all object-cover h-full w-full" alt="Brand Project 1">
                     <img src="https://placehold.co/400x300/0F172A/22D3EE?text=Stationery+Design" class="rounded-2xl border border-slate-400/10 shadow hover:border-cyan-400/50 transition-all object-cover h-full w-full" alt="Brand Project 2">
                </div>
            </div>

        </section>

        <section class="px-8 pb-32 text-center relative z-10">
            <h2 class="text-3xl font-bold mb-8">Have a project in mind?</h2>
            <Link :href="route('contact')" class="inline-flex items-center px-8 py-4 bg-cyan-400 rounded-full font-bold text-indigo-950 hover:bg-cyan-300 hover:shadow-glow-cyan transition-all group">
                Start a conversation
                <PhArrowRight class="ml-3 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Link>
        </section>
    </MainLayout>
</template>