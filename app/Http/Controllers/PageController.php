<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        // On récupère les projets mis en avant pour la section "Studio Services"
        // Dans un vrai cas, on filtrerait peut-être par catégorie
        $featuredProjects = Project::published()
            ->where('is_featured', true)
            ->latest()
            ->take(3)
            ->get();

        // On retourne la vue Inertia 'Home' avec les données
        return Inertia::render('Home', [
            'featuredProjects' => $featuredProjects,
            // On pourrait aussi passer des données pour les SaaS products si ils étaient en BDD
        ]);
    }

    // Exemples pour les autres pages
    public function studio() { return Inertia::render('Studio'); }
    public function saas() { return Inertia::render('Saas'); }
    public function contact() { return Inertia::render('Contact'); }
}