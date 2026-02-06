<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';

defineProps({
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post('/login', {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Admin Login" />

    <div class="min-h-screen flex items-center justify-center bg-bg-light relative overflow-hidden">
        <div class="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none"></div>

        <div class="max-w-md w-full bg-white p-10 rounded-3xl shadow-premium border border-slate-100 relative z-10">
            <div class="text-center mb-10">
                <h1 class="text-4xl font-black text-brand-obsidian tracking-tight mb-2">VELT</h1>
                <p class="text-brand-gray font-medium">Accès sécurisé administration</p>
            </div>

            <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                {{ status }}
            </div>

            <form @submit.prevent="submit" class="space-y-6">
                <div>
                    <label class="block text-sm font-bold text-brand-obsidian mb-2">Email</label>
                    <input type="email" v-model="form.email" required autofocus
                           class="w-full px-5 py-3 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian font-medium" />
                    <div v-if="form.errors.email" class="text-red-500 text-sm mt-2">{{ form.errors.email }}</div>
                </div>

                <div>
                    <label class="block text-sm font-bold text-brand-obsidian mb-2">Mot de passe</label>
                    <input type="password" v-model="form.password" required
                           class="w-full px-5 py-3 bg-bg-light border border-slate-200 rounded-xl focus:border-brand-indigo focus:ring-4 focus:ring-brand-indigo/10 outline-none transition-all text-brand-obsidian font-medium" />
                </div>

                <div class="block">
                    <label class="flex items-center">
                        <input type="checkbox" v-model="form.remember" class="rounded border-gray-300 text-brand-indigo shadow-sm focus:ring-brand-indigo" />
                        <span class="ml-2 text-sm text-brand-gray font-medium">Se souvenir de moi</span>
                    </label>
                </div>

                <PrimaryButton class="w-full justify-center py-4 text-lg font-bold" :disabled="form.processing">
                    Connexion
                </PrimaryButton>
            </form>
        </div>
    </div>
</template>