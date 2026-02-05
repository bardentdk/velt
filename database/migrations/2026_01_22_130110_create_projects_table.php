<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique(); // Pour le SEO
            $table->text('summary'); // Le petit texte sur les cartes
            $table->longText('content'); // Le contenu complet
            $table->string('thumbnail_path')->nullable(); // L'image de la carte
            $table->string('category'); // ex: "UX/UI", "Development"
            $table->boolean('is_featured')->default(false); // Pour mettre en avant sur la home
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
