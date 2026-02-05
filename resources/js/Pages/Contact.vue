<script setup>
import MainLayout from '@/Layouts/MainLayout.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import { PhEnvelopeSimple, PhMapPin, PhPhone } from "@phosphor-icons/vue";
import { useForm } from '@inertiajs/vue3';

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
    <Head title="Contactez Velt Studio La Réunion" description="Parlons de votre prochain projet digital. Contactez notre équipe à La Réunion pour discuter de SaaS, développement ou design." />

    <MainLayout>
        <section class="pt-20 px-8 pb-32 max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div>
                <h1 class="text-4xl md:text-5xl font-extrabold mb-8">Let's create something <span class="text-cyan-400">extraordinary.</span></h1>
                <p class="text-xl text-slate-400 leading-relaxed mb-12">
                    Que vous ayez une idée de SaaS révolutionnaire ou besoin d'une refonte complète de votre identité digitale, notre équipe à La Réunion est prête à vous écouter.
                </p>

                <div class="space-y-8">
                    <div class="flex items-start">
                        <PhEnvelopeSimple :size="32" class="text-cyan-400 mr-4 mt-1" />
                        <div>
                            <h3 class="text-lg font-bold text-slate-100">Email</h3>
                            <p class="text-slate-400">hello@velt.re (Exemple)</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <PhMapPin :size="32" class="text-cyan-400 mr-4 mt-1" />
                        <div>
                            <h3 class="text-lg font-bold text-slate-100">Studio</h3>
                            <p class="text-slate-400">Saint-Denis, La Réunion</p>
                        </div>
                    </div>
                     <div class="flex items-start">
                        <PhPhone :size="32" class="text-cyan-400 mr-4 mt-1" />
                        <div>
                            <h3 class="text-lg font-bold text-slate-100">Phone</h3>
                            <p class="text-slate-400">+262 692 00 00 00 (Exemple)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-indigo-900/30 p-8 md:p-12 rounded-3xl border border-slate-400/10 backdrop-blur-md relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

                <h2 class="text-2xl font-bold mb-8">Send us a message</h2>

                <form @submit.prevent="submit" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                        <input type="text" id="name" v-model="form.name" required
                               class="w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100 placeholder-slate-500"
                               placeholder="John Doe">
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                        <input type="email" id="email" v-model="form.email" required
                               class="w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100 placeholder-slate-500"
                               placeholder="john@example.com">
                    </div>

                     <div>
                        <label for="subject" class="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                        <select id="subject" v-model="form.subject"
                                class="w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100"
                        >
                            <option value="" disabled selected>Select a topic</option>
                            <option value="saas">New SaaS Project</option>
                            <option value="studio">Studio Services (UX/Dev/Branding)</option>
                            <option value="other">Other Inquiry</option>
                        </select>
                    </div>

                    <div>
                        <label for="message" class="block text-sm font-medium text-slate-300 mb-2">Message</label>
                        <textarea id="message" rows="5" v-model="form.message" required
                                  class="w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100 placeholder-slate-500 resize-none"
                                  placeholder="Tell us about your project..."></textarea>
                    </div>

                    <div>
                        <PrimaryButton type="submit" class="w-full justify-center py-4 text-lg" :disabled="form.processing">
                            Send Message
                        </PrimaryButton>
                    </div>
                </form>
            </div>

        </section>
    </MainLayout>
</template>