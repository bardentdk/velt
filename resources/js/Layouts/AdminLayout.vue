<script setup>
import { Link, router } from '@inertiajs/vue3';
import { PhSignOut, PhSquaresFour, PhStack, PhGear } from "@phosphor-icons/vue";

const logout = () => {
    router.post('/logout');
};
</script>

<template>
    <div class="min-h-screen bg-bg-light flex font-sans">
        <aside class="w-72 bg-brand-obsidian text-white flex flex-col relative z-20 shadow-2xl">
            <div class="p-8 pl-10">
                <Link :href="route('home')" class="text-2xl font-black tracking-tight text-white hover:text-brand-indigo transition-colors">VELT</Link>
            </div>

             <nav class="flex-1 px-6 space-y-2 py-8">
                <Link :href="route('admin.dashboard')" 
                      class="flex items-center px-4 py-3 rounded-xl font-bold transition-all duration-200"
                      :class="route().current('admin.dashboard') ? 'bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20' : 'text-slate-400 hover:text-white hover:bg-white/5'"
                >
                    <PhSquaresFour :size="22" class="mr-4" weight="fill"/>
                    Dashboard
                </Link>
                
                <Link href="#" class="flex items-center px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-bold transition-all">
                    <PhStack :size="22" class="mr-4" weight="bold"/>
                    Projets
                </Link>
             </nav>

             <div class="p-6 m-6 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div class="text-white font-bold mb-4 flex items-center">
                    <div class="w-8 h-8 bg-brand-indigo rounded-lg flex items-center justify-center mr-3 text-sm font-black shadow-inner">A</div>
                    <span class="truncate">{{ $page.props.auth.user.name }}</span>
                </div>
                <button @click="logout" class="w-full flex items-center px-3 py-2 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-all font-medium text-sm group">
                    <PhSignOut :size="18" class="mr-3 group-hover:translate-x-1 transition-transform" />
                    Déconnexion
                </button>
             </div>
        </aside>

        <main class="flex-1 h-screen overflow-y-auto bg-bg-light relative">
            <div class="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none fixed"></div>
            <div class="p-12 relative z-10">
                <slot />
            </div>
        </main>
    </div>
</template>