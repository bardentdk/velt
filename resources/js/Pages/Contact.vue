<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import { PhEnvelopeSimple, PhMapPin, PhPaperPlaneTilt } from "@phosphor-icons/vue";
import { useForm, Head } from '@inertiajs/vue3';

// Initialisation du formulaire avec tous les champs nécessaires
const form = useForm({
    name: '',
    email: '',
    subject: '', // Valeur par défaut vide pour le select
    message: '',
});

const submit = () => {
    // Pour l'instant, on simule l'envoi dans la console.
    // Plus tard, ce sera : form.post(route('contact.send'));
    console.log('Formulaire soumis avec les données :', form.data());
    
    // Simulation d'un reset après envoi réussi (à connecter au backend plus tard)
    // form.reset();
};
</script>

<template>
    <Head title="Contactez Velt Studio" />

    <MainLayout>
        <section class="max-w-7xl mx-auto my-12 lg:my-20 px-4 md:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] shadow-premium rounded-3xl overflow-hidden border border-slate-100">
                
                <div class="bg-brand-obsidian p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden">
                    <div class="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-brand-indigo/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
                    <div class="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

                    <div class="relative z-10">
                        <h1 class="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
                            Parlons de votre <span class="text-brand-indigo">futur projet.</span>
                        </h1>
                        <p class="text-xl text-slate-300 leading-relaxed mb-12 font-medium">
                            Que ce soit pour une idée de SaaS ou une refonte complète, notre équipe est prête à vous écouter. Réponses sous 24h ouvrées.
                        </p>

                        <div class="space-y-8 font-medium">
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-brand-indigo/20 rounded-xl flex items-center justify-center text-brand-indigo mr-5 flex-shrink-0">
                                    <PhEnvelopeSimple :size="24" weight="fill" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold mb-1 text-white">Email</h3>
                                    <p class="text-slate-300">hello@velt.re</p>
                                    <p class="text-slate-400 text-sm">Pour toute demande commerciale ou générale.</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-brand-indigo/20 rounded-xl flex items-center justify-center text-brand-indigo mr-5 flex-shrink-0">
                                    <PhMapPin :size="24" weight="fill" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold mb-1 text-white">Studio</h3>
                                    <p class="text-slate-300">Saint-Denis, La Réunion</p>
                                    <p class="text-slate-400 text-sm">Sur rendez-vous uniquement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-12 lg:p-20 flex flex-col justify-center">
                    <h2 class="text-3xl font-bold text-brand-obsidian mb-10 tracking-tight">Envoyez-nous un message</h2>

                    <form @submit.prevent="submit" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-sm font-bold text-brand-obsidian mb-2">Votre Nom <span class="text-brand-indigo">*</span></label>
                                <input type="text" id="name" v-model="form.name" required
                                       class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium"
                                       placeholder="John Doe">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-bold text-brand-obsidian mb-2">Email Professionnel <span class="text-brand-indigo">*</span></label>
                                <input type="email" id="email" v-model="form.email" required
                                       class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium"
                                       placeholder="john@company.com">
                            </div>
                        </div>

                         <div>
                            <label for="subject" class="block text-sm font-bold text-brand-obsidian mb-2">Sujet de votre demande <span class="text-brand-indigo">*</span></label>
                            <select id="subject" v-model="form.subject" required
                                    class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian font-medium appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E')] bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_1rem_center] pr-10"
                            >
                                <option value="" disabled selected>Sélectionnez un sujet...</option>
                                <option value="saas_project">Nouveau projet SaaS / Web App</option>
                                <option value="website_redesign">Refonte de site / UX/UI Design</option>
                                <option value="branding">Identité visuelle & Branding</option>
                                <option value="partnership">Partenariat / Autre</option>
                            </select>
                        </div>

                        <div>
                            <label for="message" class="block text-sm font-bold text-brand-obsidian mb-2">Votre Message <span class="text-brand-indigo">*</span></label>
                            <textarea id="message" rows="5" v-model="form.message" required
                                      class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium resize-none"
                                      placeholder="Décrivez votre projet, vos objectifs et votre budget estimé si possible..."></textarea>
                        </div>

                        <div class="pt-4">
                            <PrimaryButton type="submit" class="w-full justify-center py-5 text-lg font-bold" :disabled="form.processing">
                                <PhPaperPlaneTilt class="mr-3" weight="bold" :size="20"/>
                                Envoyer la demande
                            </PrimaryButton>
                            <p class="text-xs text-slate-500 mt-4 text-center font-medium">
                                En envoyant ce formulaire, vous acceptez notre politique de confidentialité. Vos données sont sécurisées.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </MainLayout>
</template>