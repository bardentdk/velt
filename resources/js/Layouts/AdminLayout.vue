<script setup>
import { Link, router } from '@inertiajs/vue3';
import { PhSignOut, PhSquaresFour, PhStack } from "@phosphor-icons/vue";

const logout = () => router.post('/logout');
</script>

<template>
    <div class="min-h-screen bg-bg-light flex font-sans">
        <aside class="w-72 bg-brand-obsidian text-white flex flex-col relative z-10">
            <div class="p-8 pl-10">
                 <svg width="100" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="24" fill="white" font-size="24" font-weight="900" style="font-family: Inter; letter-spacing: -0.02em;">VELT</text>
                </svg>
            </div>

             <nav class="flex-1 px-6 space-y-2 py-8">
                <Link :href="route('admin.dashboard')" class="flex items-center px-4 py-3 bg-brand-indigo/10 text-brand-indigo rounded-xl font-bold transition-all">
                    <PhSquaresFour :size="22" class="mr-4" weight="fill"/>
                    Dashboard
                </Link>
                <Link href="#" class="flex items-center px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-bold transition-all">
                    <PhStack :size="22" class="mr-4" weight="bold"/>
                    Projets
                </Link>
             </nav>

             <div class="p-6 m-6 bg-white/5 rounded-2xl border border-white/5">
                <div class="text-white font-bold mb-4 flex items-center">
                    <div class="w-8 h-8 bg-brand-indigo rounded-lg flex items-center justify-center mr-3 text-sm">A</div>
                    {{ $page.props.auth.user.name }}
                </div>
                <button @click="logout" class="w-full flex items-center px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium text-sm">
                    <PhSignOut :size="18" class="mr-3" />
                    Déconnexion
                </button>
             </div>
        </aside>

        <main class="flex-1 p-12 overflow-y-auto bg-tech-grid">
            <slot />
        </main>
    </div>
</template>