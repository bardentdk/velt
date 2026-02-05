<script setup>
import { Link, router } from '@inertiajs/vue3';
import { PhSignOut, PhSquaresFour } from "@phosphor-icons/vue";

const logout = () => {
    // Route de déconnexion standard de Fortify
    router.post('/logout');
};
</script>

<template>
    <div class="min-h-screen bg-indigo-950 flex">
        <aside class="w-64 bg-indigo-900/50 border-r border-slate-400/10 p-6 flex flex-col">
             <div class="text-3xl font-black tracking-wider text-slate-100 mb-12">VELT <span class="text-cyan-400 text-xs">Admin</span></div>

             <nav class="flex-1 space-y-4">
                <Link :href="route('admin.dashboard')" class="flex items-center px-4 py-3 bg-cyan-400/10 text-cyan-400 rounded-xl font-medium transition-all">
                    <PhSquaresFour :size="24" class="mr-3" weight="fill"/>
                    Dashboard
                </Link>
                </nav>

             <div class="border-t border-slate-400/10 pt-6">
                <div class="text-slate-100 font-medium mb-4 px-2">
                    {{ $page.props.auth.user.name }}
                </div>
                <button @click="logout" class="w-full flex items-center px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all">
                    <PhSignOut :size="24" class="mr-3" />
                    Log Out
                </button>
             </div>
        </aside>

        <main class="flex-1 p-8 overflow-y-auto">
            <slot />
        </main>
    </div>
</template>