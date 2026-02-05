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
    <Head title="Admin Login - Velt" />

    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-indigo-950 relative overflow-hidden">
        <div class="absolute top-[-50%] left-[-50%] w-[100%] h-[100%] bg-indigo-900/30 rounded-full blur-[150px] -z-10"></div>
        <div class="absolute bottom-[-50%] right-[-50%] w-[80%] h-[80%] bg-cyan-900/20 rounded-full blur-[150px] -z-10"></div>

        <div class="w-full sm:max-w-md mt-6 px-8 py-10 bg-indigo-900/50 border border-slate-400/10 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-400/20 blur-[50px] rounded-full -z-10"></div>

            <div class="flex justify-center mb-8">
                 <h1 class="text-4xl font-black tracking-wider text-slate-100">VELT <span class="text-cyan-400 text-lg block font-medium tracking-normal">Admin Panel</span></h1>
            </div>

            <div v-if="status" class="mb-4 font-medium text-sm text-cyan-400">
                {{ status }}
            </div>

            <form @submit.prevent="submit" class="space-y-6">
                <div>
                    <label for="email" class="block font-medium text-sm text-slate-300">Email</label>
                    <input id="email" type="email" class="mt-1 block w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100" v-model="form.email" required autofocus autocomplete="username" />
                    <div v-if="form.errors.email" class="text-red-400 text-sm mt-2">{{ form.errors.email }}</div>
                </div>

                <div>
                    <label for="password" class="block font-medium text-sm text-slate-300">Password</label>
                    <input id="password" type="password" class="mt-1 block w-full px-4 py-3 bg-indigo-950/50 border border-slate-400/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition-all text-slate-100" v-model="form.password" required autocomplete="current-password" />
                    <div v-if="form.errors.password" class="text-red-400 text-sm mt-2">{{ form.errors.password }}</div>
                </div>

                <div class="block">
                    <label class="flex items-center">
                        <input type="checkbox" name="remember" v-model="form.remember" class="rounded border-slate-400/20 bg-indigo-950/50 text-cyan-400 shadow-sm focus:ring-cyan-400/50" />
                        <span class="ml-2 text-sm text-slate-400">Remember me</span>
                    </label>
                </div>

                <div class="flex items-center justify-end mt-4">
                    <PrimaryButton class="w-full justify-center py-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>