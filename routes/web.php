<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// --- ROUTES PUBLIQUES (Existantes) ---
Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/studio', [PageController::class, 'studio'])->name('studio');
Route::get('/saas-products', [PageController::class, 'saas'])->name('saas');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');

// --- ROUTES ADMIN (Nouvelles) ---
// Le middleware 'auth' vérifie si l'utilisateur est connecté
// Le middleware 'verified' est optionnel (si tu utilises la vérification d'email de Fortify)
Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {

    // Dashboard Principal
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard', [
            // On envoie l'état actuel au frontend
            'isMaintenanceMode' => \Illuminate\Support\Facades\Cache::get('app_maintenance_mode', false)
        ]);
    })->name('dashboard');
    // Route pour basculer la maintenance
    Route::post('/maintenance/toggle', function () {
        $currentStatus = \Illuminate\Support\Facades\Cache::get('app_maintenance_mode', false);
        
        // On inverse la valeur (True devient False, et inversement)
        // On le stocke pour toujours (ou une durée très longue)
        \Illuminate\Support\Facades\Cache::forever('app_maintenance_mode', !$currentStatus);

        return back()->with('message', 'Statut de maintenance mis à jour.');
    })->name('maintenance.toggle');
    // TODO: Routes CRUD pour les Projets ici
    // Route::resource('projects', ProjectController::class);
});

// --- REDIRECTION APRÈS LOGIN ---
// Par défaut Fortify redirige vers '/home'. On veut aller vers '/admin/dashboard'.
// Ouvre app/Providers/RouteServiceProvider.php et change la constante HOME.
// Si tu es sur Laravel 11, c'est différent, dis-le moi si la redirection ne marche pas.