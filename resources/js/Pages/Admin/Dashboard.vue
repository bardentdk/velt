<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Admin Dashboard" />

    <AdminLayout>
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-slate-100">Dashboard</h1>
            <p class="text-slate-400">Welcome back to the control center.</p>
        </div>

        <div class="bg-indigo-900/30 border border-slate-400/10 rounded-3xl p-8 backdrop-blur-md">
            <h2 class="text-xl font-bold mb-4">Statut du système</h2>
            <p class="text-slate-300">Vous êtes connecté en tant qu'administrateur. Le module de gestion des projets sera bientôt disponible ici.</p>
        </div>
    </AdminLayout>
</template>