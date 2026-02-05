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
    // Fortify utilise la route standard '/login' en POST
    form.post('/login', {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Admin Login" />

    <div class="min-h-screen flex items-center justify-center bg-bg-light bg-tech-grid py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-[450px] w-full space-y-10 bg-white p-12 rounded-[2rem] shadow-premium border border-slate-100">
            <div class="text-center">
                 <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
                    <text x="0" y="24" fill="#070B15" font-size="24" font-weight="900" style="font-family: Inter; letter-spacing: -0.02em;">VELT</text>
                </svg>
                <h2 class="mt-8 text-3xl font-black text-brand-obsidian tracking-tight">
                    Accès Admin
                </h2>
            </div>

            <form class="mt-10 space-y-6" @submit.prevent="submit">
                <div class="space-y-4">
                    <div>
                        <input id="email" name="email" type="email" required v-model="form.email"
                               class="appearance-none rounded-xl relative block w-full px-5 py-4 border border-slate-200 placeholder-slate-400 text-brand-obsidian focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 focus:border-brand-indigo sm:text-sm font-medium transition-all bg-bg-light"
                               placeholder="Adresse email">
                         <div v-if="form.errors.email" class="text-red-500 text-sm mt-2 font-medium">{{ form.errors.email }}</div>
                    </div>
                    <div>
                        <input id="password" name="password" type="password" required v-model="form.password"
                               class="appearance-none rounded-xl relative block w-full px-5 py-4 border border-slate-200 placeholder-slate-400 text-brand-obsidian focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 focus:border-brand-indigo sm:text-sm font-medium transition-all bg-bg-light"
                               placeholder="Mot de passe">
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" v-model="form.remember"
                               class="h-5 w-5 text-brand-indigo focus:ring-brand-indigo border-slate-300 rounded">
                        <label for="remember-me" class="ml-3 block text-sm text-brand-obsidian font-medium">
                            Se souvenir de moi
                        </label>
                    </div>
                </div>

                <div>
                    <PrimaryButton class="w-full justify-center py-4 font-bold" :disabled="form.processing">
                        Connexion sécurisée
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>