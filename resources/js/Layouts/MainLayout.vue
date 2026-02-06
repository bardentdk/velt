<script setup>
import { Link } from '@inertiajs/vue3';
import { PhList, PhX } from "@phosphor-icons/vue";
import { ref } from 'vue';

const showingNavigationDropdown = ref(false);
</script>

<template>
    <div class="min-h-screen flex flex-col bg-white relative font-sans">
        <nav class="sticky top-0 py-5 px-8 flex items-center justify-between z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
            <Link :href="route('home')" class="flex items-center group">
                 <!-- <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="24" fill="#070B15" font-size="24" font-weight="900" style="font-family: Inter; letter-spacing: -0.02em;">VELT</text>
                </svg> -->
                <img src="../../../public/images/logo.svg" alt="Identité visuelle de Velt" width="150" />
            </Link>

            <div class="hidden md:flex items-center space-x-12 font-semibold text-sm text-brand-obsidian/80">
                <Link :href="route('studio')" class="hover:text-brand-indigo transition duration-300">Projets</Link>
                <Link :href="route('saas')" class="hover:text-brand-indigo transition duration-300">SaaS Products</Link>
                <Link :href="route('studio')" class="hover:text-brand-indigo transition duration-300">Studio</Link>
                <Link :href="route('contact')" class="px-5 py-2.5 bg-brand-indigo text-white rounded-lg hover:bg-brand-indigo-dark hover:shadow-indigo-glow transition-all duration-300 font-bold">
                    Contact
                </Link>
            </div>

             <button @click="showingNavigationDropdown = !showingNavigationDropdown" class="md:hidden text-brand-obsidian focus:outline-none">
                <PhList v-if="!showingNavigationDropdown" :size="28" weight="bold" />
                <PhX v-else :size="28" weight="bold" />
            </button>
        </nav>

        <div v-if="showingNavigationDropdown" class="md:hidden fixed inset-0 bg-white z-40 flex flex-col p-8 space-y-8 mt-20">
             <Link :href="route('studio')" class="text-2xl font-bold text-brand-obsidian hover:text-brand-indigo transition">Projets</Link>
             <Link :href="route('saas')" class="text-2xl font-bold text-brand-obsidian hover:text-brand-indigo transition">SaaS Products</Link>
             <Link :href="route('studio')" class="text-2xl font-bold text-brand-obsidian hover:text-brand-indigo transition">Studio</Link>
             <Link :href="route('contact')" class="text-2xl font-bold text-brand-indigo transition">Contact</Link>
        </div>


        <main class="flex-grow relative z-10">
            <slot />
        </main>

        <footer class="py-16 px-8 bg-brand-obsidian text-slate-400 text-sm relative z-10">
            <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div class="col-span-1 md:col-span-2">
                     <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-6">
                        <text x="0" y="24" fill="white" font-size="24" font-weight="900" style="font-family: Inter; letter-spacing: -0.02em;">VELT</text>
                    </svg>
                    <p class="max-w-xs leading-relaxed">
                        Studio digital et créateur de produits SaaS basé à La Réunion. Where Digital Takes Form.
                    </p>
                </div>
                <div>
                    <h3 class="text-white font-bold mb-6 uppercase tracking-wider text-xs">Studio</h3>
                    <ul class="space-y-3 font-medium">
                        <li><Link href="#" class="hover:text-brand-indigo transition">UX/UI Design</Link></li>
                        <li><Link href="#" class="hover:text-brand-indigo transition">Développement</Link></li>
                        <li><Link href="#" class="hover:text-brand-indigo transition">Branding</Link></li>
                    </ul>
                </div>
                 <div>
                    <h3 class="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact</h3>
                    <ul class="space-y-3 font-medium">
                        <li>Saint-Denis, La Réunion</li>
                        <li><a href="mailto:hello@velt.re" class="hover:text-brand-indigo transition">hello@velt.re</a></li>
                    </ul>
                </div>
            </div>
            <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
                <p>© {{ new Date().getFullYear() }} VELT. Tous droits réservés.</p>
                <div class="flex space-x-6 mt-4 md:mt-0 font-medium">
                    <a href="#" class="hover:text-brand-indigo transition">Mentions légales</a>
                    <a href="#" class="hover:text-brand-indigo transition">Confidentialité</a>
                </div>
            </div>
        </footer>
    </div>
</template>