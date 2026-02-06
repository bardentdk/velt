<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class CheckMaintenanceMode
{
    public function handle(Request $request, Closure $next): Response
    {
        // 1. Vérifier si la maintenance est active dans le cache
        $isMaintenanceOn = Cache::get('app_maintenance_mode', false);

        // 2. Si désactivé, on laisse passer
        if (!$isMaintenanceOn) {
            return $next($request);
        }

        // 3. LISTE BLANCHE (EXCEPTIONS)
        // On laisse toujours passer l'admin, le login, et les assets
        if ($request->is('admin/*') || 
            $request->is('login') || 
            $request->is('logout') || 
            $request->is('sanctum/*')) {
            return $next($request);
        }

        // 4. Si l'utilisateur est connecté et est un admin, on laisse passer (optionnel, selon ta logique)
        // if ($request->user() && $request->user()->isAdmin()) { return $next($request); }

        // 5. Sinon, on renvoie la page de maintenance
        // On utilise le code 503 pour que Google sache que c'est temporaire
        return Inertia::render('Maintenance')
            ->toResponse($request)
            ->setStatusCode(503);
    }
}