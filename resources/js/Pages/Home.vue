<script setup>
import { onMounted, onBeforeUpdate, onUnmounted, ref, nextTick } from 'vue';
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import { 
    PhCloudArrowUp, PhChartBar, PhGraph, PhArrowRight, PhCheckCircle, 
    PhDeviceMobile, PhCode, PhMegaphone, PhStack, PhLightbulb, 
    PhRocketLaunch, PhHandshake, PhArticle, PhPaintBrush 
} from "@phosphor-icons/vue";
import { Link, Head } from '@inertiajs/vue3';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

defineProps({ featuredProjects: Array });

// --- 1. CONFIGURATION FIABLE DES ICONES ---
// On mappe les noms vers les composants pour un rendu infaillible
const iconMap = {
    'cloud': PhCloudArrowUp,
    'chart': PhChartBar,
    'graph': PhGraph
};

const saasProducts = [
    { title: 'ReunionFlow', description: 'Plateforme de gestion de flux pour les entreprises locales.', icon: 'cloud' },
    { title: 'VolcanoMetrics', description: 'Outil d\'analyse de données temps réel IA.', icon: 'chart' },
    { title: 'PrimaryRouting', description: 'Optimisation de trajets et logistique insulaire.', icon: 'graph' },
];

const processSteps = [
    { icon: PhLightbulb, title: '1. Immersion & Stratégie', description: 'Nous plongeons dans votre business pour définir les objectifs, les personas et la feuille de route produit.' },
    { icon: PhPaintBrush, title: '2. Design & Prototypage', description: 'Création de wireframes UX et de maquettes UI haute-fidélité interactives sur Figma.' },
    { icon: PhCode, title: '3. Développement Agile', description: 'Codage en sprints avec des points d\'étape réguliers. Stack moderne, tests et revue de code.' },
    { icon: PhRocketLaunch, title: '4. Lancement & Itération', description: 'Mise en production sécurisée, suivi des analytics et améliorations continues basées sur la data.' },
];

const testimonials = [
    { name: 'Marie Dubois', role: 'CEO, TechRun', content: 'Velt a transformé notre vision en un produit SaaS exceptionnel. Leur expertise technique et leur sens du design sont inégalés.' },
    { name: 'Thomas Payet', role: 'Fondateur, EcoLogistics', content: 'Une équipe à l\'écoute, réactive et force de proposition. Notre plateforme logistique n\'a jamais été aussi performante.' },
];

const latestArticles = [
    { title: 'L\'importance de l\'UX dans les produits SaaS', date: '15 Mai 2024', image: 'https://placehold.co/400x250/F8FAFC/6366F1?text=Article+UX' },
    { title: 'Laravel et Vue.js : le duo gagnant pour votre web app', date: '28 Avril 2024', image: 'https://placehold.co/400x250/F8FAFC/6366F1?text=Article+Tech' },
    { title: 'Comment réussir le lancement de votre startup à La Réunion', date: '10 Avril 2024', image: 'https://placehold.co/400x250/F8FAFC/6366F1?text=Article+Startup' },
];

// --- GESTION DES REFS ---
const mainContainer = ref(null); // Pour scoper GSAP
const floatingIconsRefs = ref([]);

// Cette fonction garantit que le tableau est vidé avant chaque update de Vue
// pour éviter l'erreur "forEach is not a function" ou les doublons
onBeforeUpdate(() => {
    floatingIconsRefs.value = [];
});

const setFloatingIconRef = (el) => {
    if (el) floatingIconsRefs.value.push(el);
};

let ctx; // Variable pour stocker le contexte GSAP

onMounted(async () => {
    await nextTick(); // On attend que tout le DOM soit rendu

    // On utilise gsap.context() pour un nettoyage facile
    ctx = gsap.context(() => {
        
        // 1. HERO ANIMATION
        // On utilise autoAlpha: 0 au lieu de opacity: 0 pour éviter le FOUC (Flash of Unstyled Content)
        const heroTl = gsap.timeline();
        heroTl.from(".hero-text-anim", {
            y: 50,
            autoAlpha: 0, 
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        })
        .from(".hero-img-anim", {
            x: 50,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=0.6");

        // 2. PARALLAX EFFECTS
        // Background Grid
        gsap.to(".bg-tech-grid-parallax", {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // 3. SAAS CARDS (Batch pour performance et fiabilité)
        ScrollTrigger.batch(".saas-card", {
            onEnter: batch => gsap.fromTo(batch, 
                { autoAlpha: 0, y: 50 },
                { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, overwrite: true, ease: "power3.out" }
            ),
            start: "top 85%"
        });

        // 4. STUDIO CARDS
        gsap.from(".studio-card-left", {
            x: -50,
            autoAlpha: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".studio-card-left", start: "top 85%" }
        });
        gsap.from(".studio-card-right", {
            x: 50,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: { trigger: ".studio-card-right", start: "top 85%" }
        });

        // 5. GENERIC FADE UP (Process, Blog, etc.)
        const fadeElements = gsap.utils.toArray('.fade-up-trigger');
        fadeElements.forEach(el => {
            gsap.fromTo(el, 
                { autoAlpha: 0, y: 30 },
                { autoAlpha: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 90%" } }
            );
        });

        // 6. FLOATING ICONS
        if (floatingIconsRefs.value.length) {
            floatingIconsRefs.value.forEach((icon, i) => {
                gsap.to(icon, {
                    y: 15,
                    duration: 2 + (i * 0.2), // Légère variation pour chaque icône
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });
        }

    }, mainContainer.value); // Scope tout sur mainContainer
});

onUnmounted(() => {
    // Nettoyage propre de GSAP quand on quitte la page
    if (ctx) ctx.revert();
});
</script>

<template>
    <Head title="Studio Digital & SaaS Producter à La Réunion" />

    <MainLayout>
        <div ref="mainContainer"> 
            
            <section class="px-8 pt-28 pb-32 max-w-7xl mx-auto relative overflow-hidden w-full">
                <div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>

                <div class="flex flex-col lg:flex-row items-center relative z-10">
                    <div class="lg:w-1/2 lg:pr-20">
                        <div class="hero-text-anim">
                            <div class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold bg-brand-indigo/10 text-brand-indigo mb-8 ring-1 ring-inset ring-brand-indigo/20">
                                <span class="relative flex h-2.5 w-2.5 mr-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-indigo opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-indigo"></span>
                                </span>
                                Basé à La Réunion
                            </div>
                        </div>
                        <h1 class="hero-text-anim text-6xl md:text-7xl font-black text-brand-obsidian leading-tight mb-8 tracking-tight">
                            Where Digital <br>
                            <span class="text-brand-indigo">Takes Form.</span>
                        </h1>
                        <p class="hero-text-anim text-xl text-brand-gray max-w-lg mb-12 leading-relaxed font-medium">
                            Studio hybride : nous concevons des produits SaaS innovants et créons des expériences digitales sur-mesure pour les entreprises ambitieuses.
                        </p>
                        <div class="hero-text-anim flex flex-wrap gap-4">
                            <PrimaryButton :href="route('saas')" class="px-10 py-4 text-lg">
                                Découvrir nos SaaS
                                <PhArrowRight class="ml-2" weight="bold" />
                            </PrimaryButton>
                            <Link :href="route('contact')" class="inline-flex items-center px-10 py-4 bg-white border-2 border-slate-200 rounded-lg font-bold text-brand-obsidian hover:border-brand-obsidian transition-all duration-300 text-lg">
                                Discuter d'un projet
                            </Link>
                        </div>
                    </div>
                    <div class="hero-img-anim lg:w-1/2 mt-20 lg:mt-0 relative perspective-1000">
                        <img src="https://placehold.co/800x600/F8FAFC/6366F1?text=Velt+SaaS+Analytics" alt="Velt SaaS Dashboard" class="rounded-2xl shadow-premium border border-slate-100 relative z-10 transform md:rotateY(-5deg) md:rotateX(5deg) hover:rotate-0 transition-all duration-700 ease-out bg-white p-2">
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-indigo/20 blur-[100px] -z-10 rounded-full opacity-60"></div>
                    </div>
                </div>
            </section>

            <section class="bg-brand-obsidian py-20 px-8">
                <div class="fade-up-trigger max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
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
                <div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>
                <div class="max-w-7xl mx-auto relative z-10">
                    <div class="fade-up-trigger text-center mb-20">
                        <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Nos Produits</h2>
                        <p class="text-5xl font-black text-brand-obsidian tracking-tight">Solutions SaaS natives</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="(product, index) in saasProducts" :key="index"
                            class="saas-card group p-10 bg-white rounded-2xl shadow-premium hover:shadow-indigo-glow hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-slate-100">
                            
                            <div class="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-colors duration-300">
                                <component :is="iconMap[product.icon]" :size="32" weight="fill" />
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
                <div class="fade-up-trigger flex flex-col md:flex-row justify-between items-end mb-20">
                    <div>
                        <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Le Studio</h2>
                        <p class="text-5xl font-black text-brand-obsidian tracking-tight">Expertise sur-mesure.</p>
                    </div>
                    <Link :href="route('studio')" class="inline-flex items-center font-bold text-brand-obsidian hover:text-brand-indigo transition mt-8 md:mt-0 text-lg group">
                        Voir tous nos services <PhArrowRight class="ml-2 group-hover:translate-x-1 transition-transform" weight="bold"/>
                    </Link>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="studio-card-left md:col-span-2 p-12 bg-brand-obsidian rounded-3xl text-white relative overflow-hidden flex flex-col justify-between min-h-[450px] group shadow-premium">
                        <div class="absolute top-0 right-0 w-[80%] md:w-[400px] h-[80%] md:h-[400px] bg-brand-indigo/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        
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

                    <div class="studio-card-right p-10 bg-white rounded-3xl border border-slate-100 shadow-premium relative overflow-hidden group hover:border-brand-indigo/30 transition-colors">
                        <div class="w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6">
                            <PhCode :size="32" weight="fill" />
                        </div>
                        <h3 class="text-2xl font-bold text-brand-obsidian mb-4">Développement Tech</h3>
                        <p class="text-brand-gray mb-8 font-medium leading-relaxed">Stack moderne : Laravel, Vue.js, Inertia. Code robuste, scalable et performant.</p>
                        <div :ref="setFloatingIconRef" class="absolute -bottom-8 -right-8">
                            <PhStack :size="120" class="text-brand-indigo/5 group-hover:scale-110 transition-transform duration-500" weight="duotone"/>
                        </div>
                    </div>

                    <div class="studio-card-right p-10 bg-white rounded-3xl border border-slate-100 shadow-premium relative overflow-hidden group hover:border-brand-indigo/30 transition-colors">
                        <div class="w-14 h-14 bg-brand-indigo/10 text-brand-indigo rounded-xl flex items-center justify-center mb-6">
                            <PhMegaphone :size="32" weight="fill" />
                        </div>
                        <h3 class="text-2xl font-bold text-brand-obsidian mb-4">Branding & Identité</h3>
                        <p class="text-brand-gray mb-8 font-medium leading-relaxed">Création de marques fortes qui résonnent dans l'écosystème tech et digital.</p>
                        <div :ref="setFloatingIconRef" class="absolute -bottom-8 -right-8">
                            <PhMegaphone :size="120" class="text-brand-indigo/5 group-hover:scale-110 transition-transform duration-500" weight="duotone"/>
                        </div>
                    </div>
                </div>
            </section>

            <section class="px-8 py-32 bg-bg-light relative overflow-hidden">
                <div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>
                <div class="max-w-7xl mx-auto relative z-10">
                    <div class="fade-up-trigger text-center mb-20">
                        <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Notre Méthodologie</h2>
                        <p class="text-5xl font-black text-brand-obsidian tracking-tight">Un processus clair, de l'idée au produit</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div v-for="(step, index) in processSteps" :key="index" class="fade-up-trigger process-step relative group">
                            <div class="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 h-full relative z-10 hover:shadow-premium hover:border-brand-indigo/30 transition-all duration-300">
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

            <section class="px-8 py-32 max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div class="fade-up-trigger">
                        <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Pourquoi Velt ?</h2>
                        <p class="text-5xl font-black text-brand-obsidian tracking-tight mb-8 leading-tight">Plus qu'un studio, un partenaire de croissance.</p>
                        <p class="text-xl text-brand-gray mb-12 font-medium leading-relaxed">
                            Nous ne nous contentons pas de livrer du code. Nous nous immergeons dans votre business pour créer des solutions qui ont un impact réel et mesurable.
                        </p>
                        <ul class="space-y-6 text-brand-obsidian font-bold text-lg">
                            <li class="flex items-center"><PhCheckCircle class="text-brand-indigo mr-4 flex-shrink-0" weight="fill" :size="28" /> Expertise Technique & Produit</li>
                            <li class="flex items-center"><PhCheckCircle class="text-brand-indigo mr-4 flex-shrink-0" weight="fill" :size="28" /> Approche Agile & Itérative</li>
                            <li class="flex items-center"><PhCheckCircle class="text-brand-indigo mr-4 flex-shrink-0" weight="fill" :size="28" /> Ancrage Local & Vision Globale</li>
                            <li class="flex items-center"><PhCheckCircle class="text-brand-indigo mr-4 flex-shrink-0" weight="fill" :size="28" /> Transparence & Collaboration</li>
                        </ul>
                    </div>
                    <div class="fade-up-trigger relative">
                        <div class="absolute top-0 right-0 w-[80%] h-[80%] bg-brand-indigo/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <img src="https://placehold.co/600x700/0f172a/ffffff?text=Team+Collaboration" alt="Velt Team" class="rounded-3xl shadow-2xl border border-slate-100 relative z-10 bg-white p-2 transform lg:rotate-3 hover:rotate-0 transition-all duration-500">
                    </div>
                </div>
            </section>

            <section class="px-8 py-32 bg-brand-obsidian relative overflow-hidden">
                <div class="testimonials-bg-parallax absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
                <div class="testimonials-bg-parallax absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-indigo/10 rounded-full blur-[150px] pointer-events-none"></div>

                <div class="max-w-7xl mx-auto relative z-10 text-center">
                    <div class="fade-up-trigger">
                        <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Témoignages</h2>
                        <p class="text-5xl font-black text-white tracking-tight mb-20">Ils nous font confiance</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div v-for="(testimonial, index) in testimonials" :key="index" class="fade-up-trigger testimonial-card p-10 bg-white/5 border border-white/10 rounded-3xl text-left relative">
                            <PhHandshake class="text-brand-indigo mb-8" :size="48" weight="duotone"/>
                            <p class="text-xl text-slate-300 italic mb-8 leading-relaxed">"{{ testimonial.content }}"</p>
                            <div>
                                <p class="text-white font-bold text-lg">{{ testimonial.name }}</p>
                                <p class="text-brand-indigo">{{ testimonial.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="px-8 py-32 bg-bg-light relative overflow-hidden">
                <div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>
                <div class="max-w-7xl mx-auto relative z-10">
                    <div class="fade-up-trigger flex flex-col md:flex-row justify-between items-end mb-20">
                        <div>
                            <h2 class="text-brand-indigo font-bold tracking-widest uppercase mb-4 text-sm">Blog</h2>
                            <p class="text-5xl font-black text-brand-obsidian tracking-tight">Insights & Actualités</p>
                        </div>
                        <Link href="#" class="inline-flex items-center font-bold text-brand-obsidian hover:text-brand-indigo transition mt-8 md:mt-0 text-lg group">
                            Voir tous les articles <PhArrowRight class="ml-2 group-hover:translate-x-1 transition-transform" weight="bold"/>
                        </Link>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href="#" v-for="(article, index) in latestArticles" :key="index" class="fade-up-trigger group bg-white rounded-2xl shadow-premium border border-slate-100 overflow-hidden hover:-translate-y-1 transition-all duration-300">
                            <div class="relative overflow-hidden h-56">
                                <img :src="article.image" :alt="article.title" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute top-4 left-4 bg-brand-indigo text-white text-xs font-bold px-3 py-1.5 rounded-full">Blog</div>
                            </div>
                            <div class="p-8">
                                <p class="text-sm text-brand-gray font-medium mb-3 flex items-center"><PhArticle class="mr-2" /> {{ article.date }}</p>
                                <h3 class="text-xl font-bold text-brand-obsidian leading-tight group-hover:text-brand-indigo transition-colors">{{ article.title }}</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section class="px-8 py-40 text-center bg-white relative overflow-hidden">
                <div class="bg-tech-grid-parallax absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>
                <div class="fade-up-trigger relative z-10 max-w-4xl mx-auto">
                    <h2 class="text-6xl font-black text-brand-obsidian mb-10 tracking-tight leading-tight">Prêt à donner vie à votre <span class="text-brand-indigo">vision digitale</span> ?</h2>
                    <p class="text-xl text-brand-gray mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                        Discutons de vos objectifs et voyons comment nous pouvons vous aider à les atteindre.
                    </p>
                    <Link :href="route('contact')" class="inline-flex items-center px-12 py-5 bg-brand-indigo rounded-xl font-bold text-white hover:bg-brand-indigo-dark hover:shadow-indigo-glow transition-all group text-xl">
                        Démarrer une conversation
                        <PhArrowRight class="ml-4 group-hover:translate-x-1 transition-transform" weight="bold" />
                    </Link>
                </div>
            </section>

        </div>
    </MainLayout>
</template>