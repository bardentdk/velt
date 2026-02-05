<script setup>
import { Link } from '@inertiajs/vue3';
import { PhList, PhX } from "@phosphor-icons/vue";
import { ref } from 'vue';

// État pour le menu mobile
const showingNavigationDropdown = ref(false);
</script>

<template>
    <div class="min-h-screen flex flex-col bg-indigo-950 relative overflow-hidden">
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div class="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-cyan-900/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>


        <nav class="py-6 px-8 flex items-center justify-between relative z-50">
            <Link :href="route('home')" class="text-3xl font-black tracking-wider text-slate-100">
                VELT
            </Link>

            <div class="hidden md:flex items-center space-x-8 font-medium text-sm">
                <Link :href="route('studio')" class="hover:text-cyan-400 transition">Projets</Link>
                <Link :href="route('saas')" class="hover:text-cyan-400 transition">SaaS Products</Link>
                <Link :href="route('studio')" class="hover:text-cyan-400 transition">Studio</Link>
                <Link :href="route('contact')" class="hover:text-cyan-400 transition">Contact</Link>
            </div>

             <button @click="showingNavigationDropdown = !showingNavigationDropdown" class="md:hidden text-slate-100 focus:outline-none">
                <PhList v-if="!showingNavigationDropdown" :size="32" />
                <PhX v-else :size="32" />
            </button>
        </nav>

        <div v-if="showingNavigationDropdown" class="md:hidden absolute top-20 inset-x-0 bg-indigo-900/95 backdrop-blur-xl p-8 z-40 flex flex-col space-y-6 border-b border-slate-400/20">
             <Link :href="route('studio')" class="text-xl hover:text-cyan-400 transition">Projets</Link>
             <Link :href="route('saas')" class="text-xl hover:text-cyan-400 transition">SaaS Products</Link>
             <Link :href="route('studio')" class="text-xl hover:text-cyan-400 transition">Studio</Link>
             <Link :href="route('contact')" class="text-xl hover:text-cyan-400 transition">Contact</Link>
        </div>


        <main class="flex-grow relative z-10">
            <slot />
        </main>

        <footer class="py-12 px-8 border-t border-indigo-900/50 text-slate-400 text-sm relative z-10 bg-indigo-950/80 backdrop-blur-md">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-slate-100 font-bold mb-4">Studio Services</h3>
                    <ul class="space-y-2">
                        <li>UX/UI</li>
                        <li>Development</li>
                        <li>Branding</li>
                    </ul>
                </div>
                <div>
                    <p>© 2026 VELT — La Réunion</p>
                </div>
            </div>
        </footer>
    </div>
</template>