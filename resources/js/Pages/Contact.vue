<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import { PhEnvelopeSimple, PhMapPin, PhPhone } from "@phosphor-icons/vue";
import { useForm, Head } from '@inertiajs/vue3';

// Utilisation du helper useForm d'Inertia pour gérer l'état du formulaire
const form = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const submit = () => {
    // Pour l'instant, ça ne fait rien. On connectera ça au backend plus tard.
    console.log('Form submitted:', form.data());
    // form.post(route('contact.send'));
};
</script>

<template>
    <Head title="Contactez Velt Studio" />

    <MainLayout>
        <section class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-85px)] shadow-premium m-8 rounded-3xl overflow-hidden border border-slate-100">
            <div class="bg-brand-obsidian p-16 lg:p-24 text-white flex flex-col justify-center relative overflow-hidden">
                <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                <div class="relative z-10">
                    <h1 class="text-5xl md:text-6xl font-black mb-10 leading-tight tracking-tight">Parlons de votre <span class="text-brand-indigo">futur projet.</span></h1>
                    <p class="text-xl text-slate-300 leading-relaxed mb-16 font-medium">
                        Notre équipe est prête à analyser vos besoins. Réponses sous 24h ouvrées.
                    </p>

                    <div class="space-y-10 font-medium">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-brand-indigo/20 rounded-xl flex items-center justify-center text-brand-indigo mr-6">
                                <PhEnvelopeSimple :size="24" weight="fill" />
                            </div>
                            <div>
                                <h3 class="text-lg font-bold mb-1 text-white">Email</h3>
                                <p class="text-slate-300">hello@velt.re</p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>

            <div class="bg-white p-16 lg:p-24 flex flex-col justify-center">
                <h2 class="text-3xl font-bold text-brand-obsidian mb-12 tracking-tight">Envoyez-nous un message</h2>

                <form @submit.prevent="submit" class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label class="block text-sm font-bold text-brand-obsidian mb-3">Votre Nom</label>
                            <input type="text" v-model="form.name" required
                                   class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium"
                                   placeholder="John Doe">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-brand-obsidian mb-3">Email Professionnel</label>
                            <input type="email" v-model="form.email" required
                                   class="w-full px-5 py-4 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 outline-none transition-all text-brand-obsidian placeholder-slate-400 font-medium"
                                   placeholder="john@company.com">
                        </div>
                    </div>
                    <div>
                        <PrimaryButton type="submit" class="w-full justify-center py-5 text-lg font-bold" :disabled="form.processing">
                            Envoyer la demande
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </section>
    </MainLayout>
</template>